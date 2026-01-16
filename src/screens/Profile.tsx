
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Profile: React.FC = () => {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop", // Quarto Luxo
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop", // Vista Praia
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",   // Piscina/Externa (Updated)
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop", // Interior
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"  // Spa
  ];

  const FAQS = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex-1 relative fade-in px-4 max-w-5xl mx-auto">

      {/* Brand Profile - Estilo "Cartão de Visita de Luxo" */}
      <section className="flex flex-col items-center relative rounded-b-3xl overflow-hidden shadow-2xl shadow-black/50 mx-[-16px] mb-8 pb-8 pt-10">
        {/* Cover Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
            alt="Cover"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#0A0A0A]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full px-5">
          <div className="relative mb-4 group cursor-pointer perspective-1000">
            {/* Efeito de brilho atrás do logo */}
            <div className="absolute inset-0 bg-black/50 blur-2xl rounded-full opacity-60"></div>

            <div className="relative h-24 w-24 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl shadow-black/80 ring-1 ring-white/10">
              <span className="material-symbols-outlined text-primary text-5xl drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]">sunny</span>
            </div>

            {/* Badge de Verificado */}
            <div className="absolute -bottom-2 -right-2 bg-white text-black p-1 rounded-full border-2 border-black/20 shadow-lg">
              <span className="material-symbols-outlined text-[14px] font-bold block text-blue-500">verified</span>
            </div>
          </div>

          <h2 className="text-3xl font-display font-medium text-white tracking-tight mb-1 drop-shadow-md">Pé na Areia</h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-primary/50"></span>
            <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-sm">Boutique Hotel & Spa</p>
            <span className="h-px w-6 bg-primary/50"></span>
          </div>

          {/* Quick Stats Row - Dynamic Translation */}
          <div className="flex items-center justify-between w-full max-w-xs bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5 shadow-lg">
            <div className="flex flex-col items-center gap-1.5 group">
              <span className="material-symbols-outlined text-[22px] text-white group-hover:text-primary transition-colors">hotel_class</span>
              <span className="text-[8px] uppercase tracking-widest text-center font-bold text-gray-300">{t.statStars}</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex flex-col items-center gap-1.5 group">
              <span className="material-symbols-outlined text-[22px] text-white group-hover:text-primary transition-colors">beach_access</span>
              <span className="text-[8px] uppercase tracking-widest text-center font-bold text-gray-300">{t.statBeach}</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex flex-col items-center gap-1.5 group">
              <span className="material-symbols-outlined text-[22px] text-white group-hover:text-primary transition-colors">schedule</span>
              <span className="text-[8px] uppercase tracking-widest text-center font-bold text-gray-300">{t.statService}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About - Texto Editorial */}
      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:w-1.5 transition-all"></div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 group-hover:text-gray-300 transition-colors">{t.profileTitle}</h3>
          <p className="text-sm text-gray-300 font-serif italic leading-relaxed opacity-90">
            "{t.missionDesc}"
          </p>
        </div>

        {/* Review Block */}
        <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] rounded-2xl p-6 border border-white/5 relative shadow-lg group hover:border-primary/20 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map(star => (
                <span key={star} className="material-symbols-outlined text-[18px] icon-filled drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]">star</span>
              ))}
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="h-5 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>

          <p className="text-sm text-gray-300 italic mb-4 relative z-10 leading-relaxed">"{t.reviewQuote}"</p>

          <div className="flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold border border-primary/20">
                {t.reviewAuthor.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">{t.reviewAuthor}</span>
                <span className="text-[9px] text-gray-500">Local Guide</span>
              </div>
            </div>
            <button
              onClick={() => window.open('https://g.page/', '_blank')}
              className="text-[10px] font-bold text-primary hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              {t.readReviews} <span className="material-symbols-outlined text-[12px]">arrow_outward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="mb-8 -mx-4 md:-mx-0">
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 md:px-0 pb-4 snap-x snap-mandatory">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="relative flex-shrink-0 w-[260px] h-[160px] rounded-2xl overflow-hidden border border-white/5 snap-center group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-gray-900 animate-pulse"></div>
              <img
                src={img}
                alt="Hotel ambiance"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Grid - Funcional e Direto */}
      <section className="grid grid-cols-2 gap-3 mb-8">
        {/* Address Card */}
        <div className="bg-[#121212] p-5 rounded-2xl border border-white/5 flex flex-col justify-between h-40 relative overflow-hidden group hover:border-white/10 transition-all">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity rotate-12 transform origin-top-right scale-150">
            <span className="material-symbols-outlined text-6xl">map</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-2">{t.address}</span>
            <p className="text-xs text-white leading-relaxed font-medium w-[85%] whitespace-pre-line">{t.hqAddr}</p>
          </div>
          <button className="mt-auto bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2 px-4 flex items-center justify-center gap-2 w-full transition-all active:scale-95 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary">
            <span className="material-symbols-outlined text-[16px] text-primary group-hover:scale-110 transition-transform">near_me</span>
            <span className="text-[10px] font-bold text-white uppercase group-hover:text-primary transition-colors">{t.navigate}</span>
          </button>
        </div>

        {/* Hours Card */}
        <div className="bg-[#121212] p-5 rounded-2xl border border-white/5 flex flex-col justify-between h-40 relative overflow-hidden group hover:border-white/10 transition-all">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mt-1">{t.openHours}</span>
              <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-1 rounded-md border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[8px] font-bold text-green-500 uppercase tracking-wide leading-none">{t.openStatus}</span>
              </div>
            </div>

            <p className="text-xs text-white font-medium whitespace-pre-line mt-2">{t.hoursDesc}</p>
          </div>

          <div className="mt-auto pt-3 border-t border-white/5 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-[18px] text-primary">concierge</span>
            <span className="text-[10px] uppercase font-bold tracking-wide">Reception Desk</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8 fade-in" style={{ animationDelay: '0.15s' }}>
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 pl-1">{t.faqTitle}</h3>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xs font-bold text-white uppercase tracking-wide pr-4">{faq.q}</span>
                <span className={`material-symbols-outlined text-primary text-xl transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
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
      </section>

    </div>
  );
};

export default Profile;
