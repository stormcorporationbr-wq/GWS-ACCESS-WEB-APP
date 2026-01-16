import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Bio: React.FC = () => {
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const CAROUSEL_IMAGES = [
        { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop", label: "Suítes de Luxo" },
        { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop", label: "Piscina Infinita" },
        { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop", label: "Spa Relaxante" },
        { src: "https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2070&auto=format&fit=crop", label: "Gastronomia" }
    ];

    const FAQS = [
        { q: "O hotel aceita pets?", a: "Sim! Somos Pet Friendly. Seu melhor amigo é bem-vindo em nossas suítes térreas mediante pequena taxa." },
        { q: "Qual horário do Check-in?", a: "Check-in a partir das 14h e Check-out até as 12h. Late check-out sujeito a disponibilidade." },
        { q: "O café da manhã está incluso?", a: "Com certeza. Servido diariamente das 7h às 10h30 com produtos locais e frescos." },
        { q: "Tem estacionamento?", a: "Sim, dispomos de estacionamento privativo gratuito e monitorado 24h para todos os hóspedes." }
    ];

    return (
        <div className={`h-screen overflow-y-auto bg-background-dark text-white flex flex-col items-center relative overflow-x-hidden transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

            {/* HER0 SECTION */}
            <div className="relative w-full h-[65vh] flex flex-col items-center justify-center text-center px-6">

                {/* Background Cover */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
                        alt="Cover"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-dark"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-6 animate-[slideUp_0.8s_ease-out]">

                    {/* Brand */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                            <span className="material-symbols-outlined text-white text-4xl drop-shadow-md">sunny</span>
                        </div>
                        <div>
                            <h1 className="text-4xl font-display font-medium text-white tracking-tight drop-shadow-lg">Pé na Areia</h1>
                            <p className="text-white/90 text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-md">Boutique Hotel & Spa</p>
                        </div>
                    </div>

                    {/* Value Prop */}
                    <p className="text-white/90 font-serif italic max-w-[280px] text-lg leading-snug drop-shadow-md">
                        "O refúgio perfeito onde o luxo encontra a natureza."
                    </p>

                    {/* Primary CTA */}
                    <a href="https://wa.me/5511999999999" target="_blank" className="mt-2 group relative px-8 py-4 bg-primary text-black font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="flex items-center gap-2 uppercase tracking-wider text-xs">
                            Reservar Agora
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                    </a>
                    <p className="text-[10px] text-primary font-bold tracking-wider uppercase animate-pulse">Melhor preço garantido</p>

                </div>
            </div>

            {/* SOCIAL PROOF (Trust Signals) */}
            <div className="w-full max-w-md px-6 -mt-8 relative z-20">
                <a href="https://g.page/" target="_blank" className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-xl hover:bg-[#222] transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs">4.9</div>
                        <div className="flex flex-col">
                            <div className="flex text-yellow-500 text-sm">
                                {'★★★★★'.split('').map(s => <span key={Math.random()}>{s}</span>)}
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wide">Google Reviews</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-gray-500">open_in_new</span>
                </a>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="w-full max-w-md px-6 py-8 flex flex-col gap-8 pb-24">

                {/* CAROUSEL SECTION */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between px-1">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Experiências</h3>
                        <span className="text-[10px] text-primary cursor-pointer hover:underline">Ver Tabela</span>
                    </div>

                    <div className="-mx-6 px-6 overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory py-4">
                        {CAROUSEL_IMAGES.map((img, idx) => (
                            <div key={idx} className="relative flex-shrink-0 w-[240px] h-[300px] rounded-2xl overflow-hidden snap-center shadow-lg border border-white/5 group">
                                <img src={img.src} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.label} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-white font-display text-xl">{img.label}</p>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-300">Saber mais</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECONDARY LINKS */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 px-1">Links Rápidos</h3>
                    {[
                        { icon: 'chat', label: 'Falar no WhatsApp', sub: 'Atendimento Online', url: 'https://wa.me/' },
                        { icon: 'map', label: 'Como Chegar', sub: 'Abrir no Maps', url: 'https://maps.google.com' },
                    ].map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" className="group bg-[#121212] border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-white/20 transition-all active:scale-[0.98]">
                            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined">{link.icon}</span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="text-sm font-bold text-white">{link.label}</span>
                                <span className="text-[10px] text-gray-500">{link.sub}</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition-colors">chevron_right</span>
                        </a>
                    ))}
                </div>

                {/* FAQ SECTION */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 px-1">Dúvidas Frequentes</h3>
                    <div className="flex flex-col gap-2">
                        {FAQS.map((faq, idx) => (
                            <div key={idx} className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden">
                                <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-4 text-left">
                                    <span className="text-xs font-bold text-gray-200">{faq.q}</span>
                                    <span className={`material-symbols-outlined text-gray-500 text-sm transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-4 pt-0 text-[11px] text-gray-400 leading-relaxed border-t border-white/5 mt-0">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-8 flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="h-px w-20 bg-white/10"></div>
                    <a href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        Já é hóspede? Acessar App
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Bio;
