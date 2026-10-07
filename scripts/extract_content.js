import https from 'https';
import fs from 'fs';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function cleanHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '...')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

async function main() {
  try {
    const homeHtml = await fetchUrl('https://vipbrandingexperience.com/');
    fs.writeFileSync('scripts/home_raw.html', homeHtml);
    
    // Find all links on the site
    const linkMatches = [...homeHtml.matchAll(/href=["'](https:\/\/vipbrandingexperience\.com\/[^"']+)["']/gi)];
    const uniqueLinks = [...new Set(linkMatches.map(m => m[1]))];
    
    console.log('Found links:', uniqueLinks);

    const fullContent = {
      homepage: cleanHtml(homeHtml),
      pages: {}
    };

    for (const link of uniqueLinks) {
      if (link.includes('/wp-') || link.includes('#') || link === 'https://vipbrandingexperience.com/') continue;
      try {
        console.log('Fetching:', link);
        const pageHtml = await fetchUrl(link);
        fullContent.pages[link] = cleanHtml(pageHtml);
      } catch (e) {
        console.error('Failed to fetch', link, e.message);
      }
    }

    fs.writeFileSync('scripts/extracted_content.json', JSON.stringify(fullContent, null, 2));
    
    let summaryText = `=== VIP BRANDING EXPERIENCE - SITIO WEB OFICIAL ===\n\n`;
    summaryText += `URL: https://vipbrandingexperience.com/\n\n`;
    summaryText += `--- CONTENIDO HOME ---\n` + fullContent.homepage + `\n\n`;
    
    for (const [url, text] of Object.entries(fullContent.pages)) {
      summaryText += `\n\n--- PÁGINA: ${url} ---\n` + text + `\n`;
    }
    
    fs.writeFileSync('scripts/extracted_summary.txt', summaryText);
    console.log('Saved scripts/extracted_summary.txt successfully!');
  } catch (err) {
    console.error('Error fetching website:', err);
  }
}

main();
