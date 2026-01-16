import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Bio: React.FC = () => {
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const LINKS = [
        {
            id: 'booking',
            label: 'Reservar Agora',
            sub: 'Melhores taxas garantidas',
            icon: 'calendar_month',
            url: 'https://wa.me/5511999999999', // Replace with booking engine if needed
            primary: true
        },
        {
            id: 'suites',
            label: 'Nossas Suítes',
            sub: 'Conheça o luxo',
            icon: 'bed',
            url: 'https://instagram.com' // Replace with gallery link
        },
        {
            id: 'location',
            label: 'Como Chegar',
            sub: 'Google Maps',
            icon: 'map',
            url: 'https://maps.google.com'
        },
        {
            id: 'contact',
            label: 'Falar no WhatsApp',
            sub: 'Atendimento 24h',
            icon: 'chat',
            url: 'https://wa.me/5511999999999'
        }
    ];

    return (
        <div className={`min-h-screen bg-background-dark text-white flex flex-col items-center relative overflow-hidden transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[60%] bg-primary/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            </div>

            <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center gap-8">

                {/* Header / Brand */}
                <div className="flex flex-col items-center text-center gap-4 animate-[fadeIn_0.8s_ease-out]">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative h-28 w-28 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center shadow-2xl shadow-primary/10 group-hover:scale-105 transition-transform duration-500">
                            <span className="material-symbols-outlined text-primary text-5xl">sunny</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-1.5 rounded-full border-2 border-[#121212] flex shadow-lg">
                            <span className="material-symbols-outlined text-[16px]">verified</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-display font-medium tracking-tight text-white drop-shadow-lg">Pé na Areia</h1>
                        <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Boutique Hotel & Spa</p>
                    </div>

                    <p className="text-sm text-gray-400 font-serif italic max-w-[280px] leading-relaxed">
                        "O refúgio perfeito onde o luxo encontra a natureza."
                    </p>
                </div>

                {/* Links Grid */}
                <div className="w-full flex flex-col gap-4">
                    {LINKS.map((link, idx) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                relative group overflow-hidden w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]
                                ${link.primary
                                    ? 'bg-primary text-black shadow-lg shadow-primary/20 border border-primary'
                                    : 'bg-[#1A1A1A] text-white border border-white/5 hover:border-white/20 hover:bg-[#222]'
                                }
                            `}
                            style={{ animation: `slideUp 0.5s ease-out ${idx * 0.1}s backwards` }}
                        >
                            <div className={`
                                h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110
                                ${link.primary ? 'bg-black/10 text-black' : 'bg-white/5 text-gray-300 group-hover:text-white'}
                            `}>
                                <span className="material-symbols-outlined text-2xl">{link.icon}</span>
                            </div>

                            <div className="flex flex-col flex-1">
                                <span className={`text-sm font-bold tracking-wide ${link.primary ? 'text-black' : 'text-white'}`}>
                                    {link.label}
                                </span>
                                <span className={`text-[10px] font-medium tracking-wider uppercase ${link.primary ? 'text-black/60' : 'text-gray-500'}`}>
                                    {link.sub}
                                </span>
                            </div>

                            <span className={`material-symbols-outlined ${link.primary ? 'text-black/40' : 'text-white/20 group-hover:text-white/60'}`}>
                                arrow_outward
                            </span>
                        </a>
                    ))}
                </div>

                {/* Footer / Guest Access */}
                <div className="mt-8 flex flex-col items-center gap-4 w-full animate-[fadeIn_1s_ease-out_0.5s_backwards]">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <a href="/" className="group flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Já é hóspede?</span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">smartphone</span>
                            Acessar App do Hotel
                        </span>
                    </a>

                    <div className="flex gap-4 mt-4">
                        {['pool', 'restaurant', 'spa'].map((img, i) => (
                            <div key={i} className="h-16 w-12 rounded-lg bg-white/5 border border-white/5 overflow-hidden rotate-[-5deg] hover:rotate-0 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg">
                                {/* Placeholders for mini gallery vibe */}
                                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bio;
