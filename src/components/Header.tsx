
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const LangButton = ({ lang }: { lang: Language }) => {
    const isActive = language === lang;
    return (
      <button
        onClick={() => setLanguage(lang)}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isActive
            ? 'bg-white text-black font-bold scale-110'
            : 'text-gray-500 hover:text-white'
          }`}
      >
        <span className="text-[10px] tracking-tighter">{lang}</span>
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-xl border-b border-white/5 px-6 pt-12 pb-4 fade-in md:pl-28 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-[#0a192f] to-[#050505] border border-primary/20 shadow-glow overflow-hidden">
            {/* Logo - Usando um ícone dourado como placeholder elegante */}
            <span className="material-symbols-outlined text-primary text-3xl">sunny</span>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold tracking-[0.10em] text-white leading-none">PÉ NA AREIA</h1>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
              <span className="text-[10px] text-gray-400 tracking-widest font-semibold uppercase">{t.conciergeOnline}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
          <LangButton lang="BR" />
          <LangButton lang="US" />
          <LangButton lang="ES" />
        </div>
      </div>
    </header>
  );
};

export default Header;
