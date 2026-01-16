
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { MenuItem } from '../types';
import { useLanguage } from '../LanguageContext';

const Menu: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const [userName, setUserName] = useState('');

    // Imagens de Hotel Boutique
    const MENU_ITEMS: MenuItem[] = [
        {
            id: '1',
            name: 'Spa Experience',
            price: 'R$ 350',
            description: t.item1Desc || 'Relaxamento completo',
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
            recommended: true,
            category: 'wellness'
        },
        {
            id: '2',
            name: 'Jantar Pé na Areia',
            price: 'R$ 480',
            description: t.item2Desc || 'Jantar romântico',
            image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop',
            category: 'dining'
        },
        {
            id: '3',
            name: 'Passeio de Lancha',
            price: 'R$ 1.200',
            description: t.item3Desc || 'Passeio exclusivo',
            image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop',
            category: 'experience'
        },
        {
            id: '4',
            name: 'Master Suite Ocean',
            price: 'Upgrade',
            description: t.item4Desc || 'Upgrade de quarto',
            image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
            category: 'upgrade'
        },
        {
            id: '5',
            name: 'Café da Manhã Flutuante',
            price: 'R$ 220',
            description: 'Experiência única de café da manhã servido na piscina da sua suíte.',
            image: 'https://images.unsplash.com/photo-1596464522437-128a1be52e25?q=80&w=2070&auto=format&fit=crop',
            category: 'dining',
            recommended: true
        },
        {
            id: '6',
            name: 'Yoga ao Amanhecer',
            price: 'R$ 150',
            description: 'Sessão guiada de yoga na praia para começar o dia com energia.',
            image: 'https://images.unsplash.com/photo-1599447332159-425514867c44?q=80&w=2070&auto=format&fit=crop',
            category: 'wellness'
        }
    ];

    const categories = [
        { id: 'all', label: 'Todos' },
        { id: 'dining', label: 'Gastronomia' },
        { id: 'wellness', label: 'Bem-estar' },
        { id: 'experience', label: 'Experiências' },
        { id: 'upgrade', label: 'Upgrades' }
    ];

    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = activeCategory === 'all' || (item as any).category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredItems = MENU_ITEMS.filter(item => item.recommended);

    const handleOrder = () => {
        if (!userName.trim()) {
            alert('Por favor, informe seu nome para continuar.');
            return;
        }

        if (!selectedItem) return;

        const message = `🌟 *Novo Pedido / Consulta* 🌟\n\n👤 *Cliente:* ${userName}\n🛎️ *Item:* ${selectedItem.name}\n💰 *Valor:* ${selectedItem.price}\n\n_Gostaria de verificar a disponibilidade._`;
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fade-in max-w-6xl mx-auto relative">

            {/* Header & Search */}
            <div className="px-4 pt-8 pb-4 bg-transparent z-30 transition-all duration-300">
                <h1 className="text-3xl font-light tracking-tight text-white mb-2 font-display">
                    {t.moduleTitle} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#F4E285]">{t.moduleSubtitle}</span>
                </h1>

                {/* Search Bar */}
                <div className="relative mb-6 mt-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-gray-500">search</span>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 bg-[#121212] border border-white/10 rounded-xl leading-5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 sm:text-sm transition-all"
                        placeholder="Buscar serviços..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Featured Section (Only show if no search query) */}
                {!searchQuery && activeCategory === 'all' && (
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-primary text-sm">stars</span>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Destaques</h3>
                        </div>
                        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
                            {featuredItems.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedItem(item)}
                                    className="flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden relative cursor-pointer group border border-white/5 snap-center shadow-lg hover:shadow-primary/10 transition-all"
                                >
                                    <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <span className="bg-primary text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1 inline-block">Recomendado</span>
                                        <h4 className="text-white font-bold text-lg leading-tight">{item.name}</h4>
                                        <p className="text-gray-300 text-xs">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${activeCategory === cat.id
                                ? 'bg-primary text-black border-primary'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 w-full">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="group relative flex flex-col gap-3 rounded-2xl p-2 transition-all duration-500 cursor-pointer overflow-hidden bg-[#121212] hover:bg-[#181818] border border-white/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
                    >
                        <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                            <div className="absolute bottom-2 right-2 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                <p className="text-white group-hover:text-black text-[10px] font-bold tracking-wide font-montserrat transition-colors">{item.price}</p>
                            </div>

                            {/* Quick Add Button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white">visibility</span>
                                </div>
                            </div>
                        </div>

                        <div className="px-1.5 pb-2 flex flex-col gap-0.5 z-10">
                            <p className="text-white text-sm font-bold leading-tight group-hover:text-primary transition-colors font-montserrat tracking-tight uppercase line-clamp-1">{item.name}</p>
                            <p className="text-gray-500 text-[9px] uppercase tracking-widest font-bold font-montserrat opacity-70 line-clamp-2">{item.description}</p>
                        </div>
                    </div>
                ))}

                {filteredItems.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-50">
                        <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
                        <p className="text-sm">Nenhum item encontrado.</p>
                    </div>
                )}
            </div>

            {/* Details Modal - Bottom Sheet Portal */}
            {selectedItem && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-[fadeIn_0.3s_ease-out]"
                        onClick={() => setSelectedItem(null)}
                    ></div>

                    {/* Bottom Sheet Panel */}
                    <div className="relative w-full max-w-lg bg-[#121212] border-t border-white/10 rounded-t-3xl sm:rounded-3xl sm:border max-h-[85vh] flex flex-col shadow-2xl shadow-primary/10 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">

                        {/* Drag Handle (Mobile Visual) */}
                        <div className="w-full flex justify-center pt-3 pb-1 sm:hidden" onClick={() => setSelectedItem(null)}>
                            <div className="w-12 h-1.5 rounded-full bg-white/20"></div>
                        </div>

                        {/* Close Button (Desktop/Mobile) */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full text-white/70 hover:text-white hover:bg-black/60 transition-all border border-white/5"
                        >
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>

                        {/* Modal Image Carousel */}
                        <div className="relative h-72 w-full flex-shrink-0 group">
                            {selectedItem.images && selectedItem.images.length > 0 ? (
                                <div className="flex overflow-x-auto snap-x snap-mandatory h-full w-full no-scrollbar">
                                    {selectedItem.images.map((img, idx) => (
                                        <div key={idx} className="flex-shrink-0 w-full h-full snap-center relative">
                                            <img src={img} alt={`${selectedItem.name} ${idx + 1}`} className="w-full h-full object-cover rounded-t-3xl sm:rounded-t-3xl" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="w-full h-full relative">
                                    <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover rounded-t-3xl sm:rounded-t-3xl" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                                </div>
                            )}

                            {/* Image Counter Badge */}
                            {selectedItem.images && selectedItem.images.length > 1 && (
                                <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-[10px] uppercase font-bold text-white tracking-widest flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[12px]">photo_library</span>
                                        Fotos
                                    </span>
                                </div>
                            )}

                            {/* Title Overlay */}
                            <div className="absolute bottom-4 left-6 pr-4 pointer-events-none">
                                {selectedItem.recommended && (
                                    <span className="bg-primary text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">Recomendado</span>
                                )}
                                <h2 className="text-2xl font-display font-bold text-white leading-tight shadow-black drop-shadow-lg">{selectedItem.name}</h2>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-6 pt-2 flex flex-col gap-6 overflow-y-auto no-scrollbar pb-24">
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="text-3xl font-light text-primary">{selectedItem.price}</span>
                                <div className="flex items-center gap-1 opacity-60 bg-white/5 px-2 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    <span className="text-xs font-medium">Disponível agora</span>
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed font-light">
                                {selectedItem.description}
                                <br /><br />
                                <span className="text-xs text-gray-500 italic">Preços e disponibilidade sujeitos a alteração.</span>
                            </p>

                            {/* Input Area */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] text-gray-500 uppercase mb-2 font-bold tracking-wider">Nome para reserva/pedido</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2.5 text-gray-500 material-symbols-outlined text-lg">person</span>
                                        <input
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600"
                                            placeholder="Digite seu nome..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fixed Bottom Action Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#121212]/90 backdrop-blur-xl border-t border-white/10">
                            <button
                                onClick={handleOrder}
                                className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-xl">whatsapp</span>
                                Solicitar via WhatsApp
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Menu;
