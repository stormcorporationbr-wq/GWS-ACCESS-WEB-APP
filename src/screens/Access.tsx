
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Access: React.FC = () => {
    const { t } = useLanguage();

    const ACCESS_ITEMS = [
        { label: t.actionStaff, icon: 'support_agent', color: 'text-emerald-500', bg: 'bg-emerald-500/10', link: 'https://wa.me/5511999999999' },
        { label: t.actionWifi, icon: 'wifi', color: 'text-blue-500', bg: 'bg-blue-500/10', action: 'wifi' },
        { label: t.actionPix, icon: 'qr_code_2', color: 'text-primary', bg: 'bg-primary/10', action: 'pix' },
        { label: t.actionReviews, icon: 'star', color: 'text-yellow-500', bg: 'bg-yellow-500/10', link: 'https://g.page/' },
        { label: t.maps, icon: 'map', color: 'text-gray-300', bg: 'bg-gray-500/10', link: 'https://maps.google.com' },
        { label: t.saveContact, icon: 'contact_phone', color: 'text-white', bg: 'bg-white/10', action: 'vcard' },
    ];

    const handleItemClick = (item: any) => {
        if (item.link) window.open(item.link, '_blank');
        if (item.action === 'wifi') alert('Wi-Fi: PenaAreiaGuest \nPass: luxury2024');
        if (item.action === 'pix') alert('Pix Copiado: 00.000.000/0001-00');
        if (item.action === 'vcard') alert('Contato salvo (simulação)');
    };

    return (
        <div className="fade-in max-w-6xl mx-auto relative px-5 pt-8 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                <h1 className="text-2xl font-light text-white">{t.accessTitle}</h1>
            </div>

            {/* Emergency Grid - Redesigned */}
            <div className="bg-gradient-to-br from-red-950/40 to-red-900/10 border border-red-500/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(255,0,0,0.05)]">
                <div className="flex items-center justify-between mb-4 border-b border-red-500/10 pb-3">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                        </div>
                        <h3 className="text-[10px] font-bold text-red-400 tracking-[0.25em] uppercase">{t.emergencyTitle}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-red-500/60">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider">{t.emergencyLocation}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { label: t.police, number: '190' },
                        { label: t.ambulance, number: '192' },
                        { label: t.fire, number: '193' },
                        { label: t.general, number: 'SOS', isSpecial: true }
                    ].map((em, idx) => (
                        <a
                            key={idx}
                            href={`tel:${em.number === 'SOS' ? '112' : em.number}`}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all active:scale-95 hover:-translate-y-1 ${em.isSpecial
                                ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/20 hover:bg-red-600'
                                : 'bg-red-500/5 border-red-500/10 hover:bg-red-500/20 hover:border-red-500/30'
                                }`}
                        >
                            <span className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${em.isSpecial ? 'text-white/80' : 'text-red-400'}`}>{em.label}</span>
                            <span className={`text-xl font-mono font-bold ${em.isSpecial ? 'text-white' : 'text-white'}`}>{em.number}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {ACCESS_ITEMS.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleItemClick(item)}
                        className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#121212] border border-white/5 hover:bg-[#1A1A1A] hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 active:scale-95"
                    >
                        <div className={`h-14 w-14 rounded-full ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-xs font-bold text-white uppercase tracking-wider text-center">{item.label}</span>
                            <span className="text-[9px] text-gray-600 font-semibold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">OPEN</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Access;
