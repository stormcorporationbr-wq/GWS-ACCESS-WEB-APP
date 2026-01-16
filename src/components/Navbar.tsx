import React from 'react';
import { AppTab } from '../types';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: AppTab.HOME, label: t.navHome, icon: 'home' },
    { id: AppTab.ACCESS, label: t.navAccess, icon: 'grid_view' },
    { id: AppTab.MODULE, label: t.navModule, icon: 'room_service' },
    { id: AppTab.PROFILE, label: t.navProfile, icon: 'person' },
  ];

  return (
    <nav className="fixed z-50 transition-all duration-300 bottom-6 left-0 right-0 px-4 max-w-md mx-auto pointer-events-none md:bottom-auto md:top-0 md:left-0 md:right-auto md:h-screen md:w-28 md:px-0 md:flex md:items-center md:mx-0">
      <div className="relative pointer-events-auto bg-[#0F0F0F]/85 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] ring-1 ring-white/5 overflow-hidden transition-all duration-300 w-full h-[72px] rounded-[24px] flex items-center justify-around px-2 md:w-20 md:h-[60vh] md:flex-col md:justify-center md:gap-6 md:rounded-r-[24px] md:rounded-l-none md:border-l-0 md:py-8">

        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative flex items-center justify-center group outline-none transition-all duration-300 active:scale-95 flex-col w-[22%] h-full md:w-full md:h-16"
            >
              {/* Active Indicator Light */}
              {isActive && (
                <div className="absolute bg-primary shadow-[0_0_15px_3px_rgba(212,175,55,0.7)] transition-all duration-300 top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-b-full md:top-1/2 md:-translate-y-1/2 md:left-0 md:w-[3px] md:h-8 md:rounded-r-full"></div>
              )}

              <div className={`relative z-10 transition-all duration-500 flex items-center justify-center
                ${isActive ? 'md:translate-x-1' : ''}
                ${isActive ? '-translate-y-1 md:translate-y-0' : ''}
              `}>
                <span className={`material-symbols-outlined transition-all duration-300 ${isActive
                    ? 'text-primary icon-filled drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]'
                    : 'text-gray-500 icon-light group-hover:text-gray-300'
                  } text-[24px] md:text-[28px]`}>
                  {tab.icon}
                </span>
              </div>

              {/* Label: Only visible on Mobile */}
              <span className={`relative z-10 text-[9px] mt-1 tracking-[0.15em] uppercase transition-all duration-300 font-montserrat md:hidden ${isActive
                  ? 'font-bold text-white opacity-100 translate-y-[-2px]'
                  : 'font-medium text-gray-600 opacity-0 group-hover:opacity-100'
                }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
