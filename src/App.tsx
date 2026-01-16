
import React, { useState, useEffect, useRef } from 'react';
import { AppTab } from './types';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Access from './screens/Access';
import Menu from './screens/Menu';
import Profile from './screens/Profile';
import Bio from './screens/Bio';
import Login from './screens/Login';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isBioPage, setIsBioPage] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    // 1. Check for BIO page
    const path = window.location.pathname;
    if (path === '/bio') {
      setIsBioPage(true);
      return;
    }

    // 2. Check for existing session (Guest App)
    const storedAuth = localStorage.getItem('gws_auth');
    if (storedAuth) {
      const { name } = JSON.parse(storedAuth);
      setGuestName(name);
      setIsAuthenticated(true);
    }
  }, []);

  // Reset scroll position when tab changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const handleLogin = (name: string, room: string) => {
    localStorage.setItem('gws_auth', JSON.stringify({ name, room, timestamp: Date.now() }));
    setGuestName(name);
    setIsAuthenticated(true);
  };

  // RENDER: Bio Page (Public)
  if (isBioPage) {
    return (
      <LanguageProvider>
        <Bio />
      </LanguageProvider>
    );
  }

  // RENDER: Login Screen (Gatekeeper)
  if (!isAuthenticated && !isBioPage) {
    return (
      <LanguageProvider>
        <Login onLogin={handleLogin} />
      </LanguageProvider>
    );
  }

  // RENDER: Main Guest App (Protected)
  return (
    <LanguageProvider>
      <div className="relative w-full h-screen bg-background-dark overflow-hidden flex flex-col">

        {/* Ambient Spotlight - Luz de fundo para profundidade */}
        <div className="absolute top-[-20%] left-0 right-0 h-[60%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-background-dark to-background-dark pointer-events-none z-0"></div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col relative z-10 h-full">
          <Header />

          <main
            ref={scrollRef}
            className="flex-1 overflow-y-auto no-scrollbar scroll-mask-content pb-36 md:pb-0 md:pl-28 transition-all duration-300"
          >
            {activeTab === AppTab.HOME && (
              <Home
                onExplore={() => setActiveTab(AppTab.MODULE)}
                onOpenAccess={() => setActiveTab(AppTab.ACCESS)}
                guestName={guestName}
              />
            )}
            {activeTab === AppTab.ACCESS && <Access />}
            {activeTab === AppTab.MODULE && <Menu />}
            {activeTab === AppTab.PROFILE && <Profile />}
          </main>

          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

      </div>
    </LanguageProvider>
  );
};

export default App;
