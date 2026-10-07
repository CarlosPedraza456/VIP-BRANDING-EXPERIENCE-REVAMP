import React from 'react';
import { Quote, Video, ShieldCheck, Play, Sparkles } from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';
import { SectionSparkleCanvas } from './SectionSparkleCanvas';

export const TestimonialsMetrics: React.FC = () => {
  const primaryTestimonials = [
    {
      name: 'Felipe Rodriguez',
      location: 'Boca Raton, FL',
      highlight: 'Mindset & Real-Life Breakthroughs',
      quote:
        'One of the biggest benefits of working with Rey is his mindset and the knowledge behind what he has created. Learning from a branding and marketing expert and understanding his wisdom on condensing time and knowing where his focus is, has made a dramatic impact in every aspect of my life. He has raised my standards and the way I view time forever. My favorite part about attending the VIP Branding Experience was the real-life scenarios given by Rey – it’s a no holds barred, raw look into how he thinks, what is most important to him, and his value systems. Not only does he teach you but he forces you to take immediate action. This was an incredible weekend with many breakthroughs.',
    },
    {
      name: 'Raj Singh',
      location: 'Jersey City, NJ',
      highlight: 'Million Dollar Moments & Mental Filter',
      quote:
        'One of the greatest benefits to working with Rey is his knowledge, experience, and work ethic. His confidence overflows when he speaks and he helps me believe in myself more than I already do. Rey instills the belief in people that they can do anything they put their mind to. He has always been a great asset to me whenever I need him. The best part of VIP Branding Experience was the "Million Dollar Moments" and learning what controls my "filter." This section really helped me to set more effective goals and focus on the steps that I need to accomplish without getting sidetracked by the daily challenges of life. I now use it every day in my personal and business life.',
    }
  ];

  const videoClients = [
    'Kristina Grube',
    'Tim Cox',
    'Jerrad Havins',
    'Billy Wease',
    'Robert Syfert',
    'Eric L. Dunavant',
    'Saen Higgins',
    'Jared Irby',
    'Daniel O’Bannon',
    'Brian Dalmaso',
    'Shawn Feurer'
  ];

  return (
    <section className="relative py-28 px-6 sm:px-8 bg-gradient-to-b from-[#14120F] via-[#0E0E0E] to-[#0A0A0A] overflow-hidden border-t border-[#DDA83B]/20">
      {/* Animated luxury ambient sparkles / destellos background */}
      <SectionSparkleCanvas density="medium" glowIntensity="high" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric Header with Fade-Zoom */}
        <ParallaxHorizontalWrapper direction="fade-zoom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#DDA83B]" />
                <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-semibold block">
                  VERIFIED SOCIAL PROOF
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Listen to our <span className="text-gold-gradient">VIP Clients</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed">
                Direct insights and transformational breakthroughs shared by elite entrepreneurs who attended the VIP Branding Experience.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* Primary In-Depth Quotes with Combined Slide + Zoom Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {primaryTestimonials.map((t, idx) => (
            <ParallaxHorizontalWrapper
              key={idx}
              direction={idx === 0 ? 'slide-zoom-left' : 'slide-zoom-right'}
              distance={70}
              className="h-full flex flex-col"
            >
              <div className="p-8 sm:p-10 rounded-sm border border-[#DDA83B]/35 bg-gradient-to-b from-[#181613] via-[#121212] to-[#0D0D0D] flex flex-col justify-between h-full hover:border-[#DDA83B] transition-all shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <VipCrestEmblem size={24} className="w-6 h-6 text-[#DDA83B]" />
                      <span className="text-[10px] tracking-widest uppercase font-mono text-[#DDA83B]">
                        VIP Client Feedback
                      </span>
                    </div>
                    <Quote className="w-6 h-6 text-[#DDA83B]/40" />
                  </div>

                  <div className="mb-4 inline-block px-3 py-1 rounded-sm bg-[#DDA83B]/15 border border-[#DDA83B]/30 text-xs text-[#DDA83B] font-semibold">
                    {t.highlight}
                  </div>

                  <p className="text-xs sm:text-sm text-[#F7F4EF]/85 leading-relaxed italic mb-8 font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DDA83B]/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-base font-bold text-white">
                      - {t.name}
                    </h4>
                    <span className="text-xs text-[#DDA83B] font-medium">{t.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#F7F4EF]/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#DDA83B]" />
                    <span>Verified Attendee</span>
                  </div>
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          ))}
        </div>

        {/* Video Testimonials Sizzle Reel Grid with Zoom-In */}
        <ParallaxHorizontalWrapper direction="zoom-in" distance={60}>
          <div className="bg-gradient-to-r from-[#171512] via-[#121212] to-[#0F0F0F] border border-[#DDA83B]/35 rounded-sm p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-[#DDA83B]" />
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    Testimonial Sizzle &amp; Event Highlights Reel
                  </h3>
                  <p className="text-xs text-[#F7F4EF]/60">
                    Over a decade of high achievers transformed across every Brand in 2 Days edition
                  </p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B] border border-[#DDA83B]/30 font-semibold">
                11+ Recorded Video Cases
              </span>
            </div>

            {/* Video client tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {videoClients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-sm bg-black/50 border border-[#222] flex items-center gap-2.5 hover:border-[#DDA83B]/60 transition-colors"
                >
                  <div className="w-6 h-6 rounded-sm bg-[#DDA83B]/15 flex items-center justify-center text-[#DDA83B] shrink-0">
                    <Play className="w-2.5 h-2.5 fill-current" />
                  </div>
                  <span className="text-xs text-[#F7F4EF]/80 font-medium truncate">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ParallaxHorizontalWrapper>
      </div>
    </section>
  );
};
