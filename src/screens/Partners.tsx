
import React, { useState, useMemo } from 'react';
import { Partner } from '../types';
import { useLanguage } from '../LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Imagens de marcas/parceiros de hotel
  const PARTNERS: Partner[] = useMemo(() => [
    {
      id: '1',
      name: 'Veuve Clicquot',
      category: t.catBeverage, 
      image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'L\'Occitane',
      category: t.catOrganic, 
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Mergulho Vip',
      category: t.catDelivery, 
      image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '4',
      name: 'Chef Local',
      category: t.catDining, 
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop'
    }
  ], [t]);

  const filteredPartners = PARTNERS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col fade-in">
      <section className="px-6 pt-6 pb-2">
        <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase opacity-80 mb-2">
          {t.partnersTitle}
        </p>
        <h2 className="text-3xl font-light text-white">{t.partnersSubtitle}</h2>
      </section>

      <section className="sticky top-0 z-40 px-6 py-4 bg-background-dark/95 backdrop-blur-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <span className={`material-symbols-outlined transition-colors duration-300 ${searchQuery ? 'text-primary' : 'text-gray-500'}`}>search</span>
          </div>
          <input 
            className="block w-full pl-12 pr-4 py-4 rounded-xl bg-[#121212] text-white placeholder:text-gray-600 border border-white/5 focus:ring-1 focus:ring-primary focus:border-primary/50 focus:outline-none transition-all duration-300" 
            placeholder={t.searchPartners}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <main className="flex-1 px-6 space-y-3 mt-2 pb-20">
        {filteredPartners.map((partner) => (
            <div key={partner.id} className="flex items-center p-4 rounded-xl bg-[#121212] border border-white/5 gap-4">
               <div className="h-12 w-12 bg-white/5 rounded-lg overflow-hidden flex items-center justify-center">
                   <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${partner.image}')` }}></div>
               </div>
               <div className="flex-1">
                  <h3 className="text-white font-bold">{partner.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{partner.category}</p>
               </div>
               <span className="material-symbols-outlined text-gray-600">chevron_right</span>
            </div>
        ))}
      </main>
    </div>
  );
};

export default Partners;
