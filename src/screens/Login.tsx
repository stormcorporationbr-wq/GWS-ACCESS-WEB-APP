import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface LoginProps {
    onLogin: (guestName: string, roomNumber: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const { t } = useLanguage();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !room) return;

        setIsLoading(true);

        // Simulate API delay for a smoother feel
        setTimeout(() => {
            onLogin(name, room);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background-dark text-white flex flex-col items-center justify-center relative overflow-hidden px-6">

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8 animate-[fadeIn_0.8s_ease-out]">

                {/* Logo/Brand */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative h-24 w-24 rounded-2xl bg-[#121212] border border-white/10 flex items-center justify-center shadow-2xl shadow-primary/5">
                        <span className="material-symbols-outlined text-primary text-5xl drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">sunny</span>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-display font-medium text-white tracking-tight">Pé na Areia</h1>
                        <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Boutique Hotel & Spa</p>
                    </div>
                </div>

                {/* Welcome Message */}
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-light text-white">Bem-vindo</h2>
                    <p className="text-sm text-gray-400 font-serif italic">"Sua experiência exclusiva começa aqui."</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-gray-500 ml-1">Nome do Hóspede</label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 group-focus-within:text-white transition-colors">person</span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ex: Leonardo"
                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-[#222] transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-gray-500 ml-1">Número do Quarto</label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 group-focus-within:text-white transition-colors">key</span>
                            <input
                                type="tel"
                                value={room}
                                onChange={(e) => setRoom(e.target.value)}
                                placeholder="Ex: 102"
                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-[#222] transition-all"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 w-full bg-primary text-black font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <span>Acessar App</span>
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </>
                        )}
                    </button>

                </form>

                <p className="text-[10px] text-gray-600 text-center max-w-[200px] leading-relaxed">
                    Ao entrar, você concorda com nossos termos de serviço digitais.
                </p>

            </div>
        </div>
    );
};

export default Login;
