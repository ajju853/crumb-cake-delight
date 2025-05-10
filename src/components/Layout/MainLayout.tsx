
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartSlideout from '../Cart/CartSlideout';
import { AnimatePresence } from 'framer-motion';
import Bokeh from '../UI/Bokeh';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Bokeh />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
      <AnimatePresence>
        <CartSlideout />
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
