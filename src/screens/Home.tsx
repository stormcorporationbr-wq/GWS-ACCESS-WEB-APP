
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

interface HomeProps {
  onExplore: () => void;
  onOpenAccess: () => void;
  guestName?: string;
}

const BANNER_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop", // Proven working (Luxury Room)
    link: "https://instagram.com",
    type: "external"
  },
  {
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop", // Proven working (Pool)
    link: "https://wa.me/5511999999999",
    type: "external"
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop", // Proven working (Interior)
    link: null,
    type: "internal"
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
];

const Home: React.FC<HomeProps> = ({ onExplore, onOpenAccess, guestName }) => {
  const { t, language } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (language === 'BR') {
        if (hour < 12) setGreeting('Bom dia');
        else if (hour < 18) setGreeting('Boa tarde');
        else setGreeting('Boa noite');
      } else if (language === 'ES') {
        if (hour < 12) setGreeting('Buenos días');
        else if (hour < 18) setGreeting('Buenas tardes');
        else setGreeting('Buenas noches');
      } else {
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBannerClick = () => {
    const currentSlide = BANNER_SLIDES[currentBannerIndex];
    if (currentSlide.link) {
      window.open(currentSlide.link, '_blank');
    } else {
      onExplore();
    }
  };

  const handleAction = (action: string) => {
    if (action === 'wifi') alert('Wi-Fi: PenaAreiaGuest \nPass: luxury2024');
    if (action === 'pix') alert('Pix Copiado: 00.000.000/0001-00');
    if (action === 'reviews') window.open('https://g.page/google-reviews-link', '_blank');
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const FAQS = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
  ];

  return (
    <div className="fade-in max-w-6xl mx-auto relative flex flex-col gap-6 px-4">

      {/* Welcome Header */}
      <div className="flex flex-col gap-1 fade-in pl-1">
        <h2 className="text-xs font-montserrat font-bold text-primary tracking-[0.25em] uppercase flex items-center gap-2">
          <span className="h-px w-6 bg-primary"></span>
          {greeting}{guestName ? `, ${guestName}` : ''}
        </h2>
        <h1 className="text-4xl font-display font-light text-white leading-none tracking-tight">
          {t.heroInstitution}
        </h1>
      </div>

      {/* Interactive Banner */}
      <div
        className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 group cursor-pointer active:scale-[0.99] transition-all duration-500 bg-gray-900"
        onClick={handleBannerClick}
      >
        {/* Images */}
        {BANNER_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentBannerIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}

        {/* Overlay - Z-index 20 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-20"></div>

        {/* Content - Z-index 30 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start z-30 transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-widest shadow-lg">Featured</span>
          </div>
          <h3 className="text-white text-2xl font-display font-medium leading-tight mb-1 drop-shadow-lg">{t.bannerTitle}</h3>
          <p className="text-gray-300 text-sm font-medium drop-shadow-md flex items-center gap-2">
            {t.bannerDesc}
            <span className="material-symbols-outlined text-[14px] text-primary animate-pulse">arrow_forward</span>
          </p>
        </div>

        {/* Indicators - Z-index 30 */}
        <div className="absolute bottom-6 right-6 z-30 flex gap-1.5">
          {BANNER_SLIDES.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-500 ${idx === currentBannerIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/30'}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 fade-in" style={{ animationDelay: '0.1s' }}>
        {[
          { id: 'staff', icon: 'support_agent', label: t.actionStaff, color: 'text-emerald-500', bg: 'bg-emerald-500/10', onClick: () => window.open('https://wa.me/5511999999999') },
          { id: 'wifi', icon: 'wifi', label: t.actionWifi, color: 'text-blue-500', bg: 'bg-blue-500/10', onClick: () => handleAction('wifi') },
          { id: 'pix', icon: 'qr_code_2', label: t.actionPix, color: 'text-primary', bg: 'bg-primary/10', onClick: () => handleAction('pix') },
          { id: 'reviews', icon: 'star', label: t.actionReviews, color: 'text-yellow-500', bg: 'bg-yellow-500/10', onClick: () => handleAction('reviews') },
        ].map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className="group relative bg-[#121212]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3 hover:bg-[#1A1A1A] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <div className={`h-11 w-11 rounded-full ${action.bg} flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform duration-300`}>
              <span className="material-symbols-outlined text-[22px]">{action.icon}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-bold text-white tracking-wide group-hover:text-primary transition-colors">{action.label}</span>
              <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Tap to open</span>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
              <span className="material-symbols-outlined text-gray-400 text-xs">arrow_outward</span>
            </div>
          </button>
        ))}
      </div>

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Utilities Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 fade-in" style={{ animationDelay: '0.2s' }}>

        {/* Maps */}
        <button className="w-full bg-[#121212] border border-white/5 rounded-2xl p-4 flex items-center justify-between hover:bg-[#1A1A1A] transition-all duration-200 group">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-white border border-white/10 group-hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-xl group-hover:text-primary">map</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-white uppercase tracking-wide">{t.maps}</span>
              <span className="text-[10px] text-gray-500">Google Maps / Waze navigation</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition-colors">chevron_right</span>
        </button>

        {/* Emergency - Redesigned */}
        <button
          onClick={onOpenAccess}
          className="w-full bg-gradient-to-r from-red-950/30 to-red-900/10 border border-red-500/20 rounded-2xl p-4 flex items-center justify-between hover:border-red-500/50 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping opacity-75"></div>
              <div className="relative h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/30 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">emergency</span>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-bold text-red-400 tracking-[0.2em] uppercase group-hover:text-red-300 transition-colors">{t.emergencyTitle}</h3>
              <span className="text-[10px] text-red-500/60 uppercase tracking-wider font-semibold">Immediate Assistance</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-red-500/50 group-hover:text-red-400 transition-colors">chevron_right</span>
        </button>
      </div>

      {/* Gallery Section */}
      <div className="fade-in pt-4" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{t.galleryTitle}</h3>
          <span className="h-px flex-1 bg-white/10 ml-4"></span>
        </div>

        <div className="-mx-4 md:-mx-0">
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 md:px-0 pb-4 snap-x snap-mandatory">
            {GALLERY_IMAGES.map((img, index) => (
              <div key={index} className="relative flex-shrink-0 w-[280px] h-[180px] rounded-2xl overflow-hidden border border-white/5 snap-center group shadow-lg cursor-pointer hover:shadow-primary/10 transition-all duration-500">
                <div className="absolute inset-0 bg-gray-900 animate-pulse"></div>
                <img
                  src={img}
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="fade-in pb-8" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{t.faqTitle}</h3>
          <span className="h-px flex-1 bg-white/10 ml-4"></span>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 group">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xs font-bold text-white uppercase tracking-wide pr-4 group-hover:text-primary transition-colors">{faq.q}</span>
                <span className={`material-symbols-outlined text-gray-500 group-hover:text-white transition-all duration-300 ${activeFaq === index ? 'rotate-180 text-primary' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 text-sm text-gray-400 font-medium leading-relaxed border-t border-white/5 mt-0 bg-white/[0.02]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
