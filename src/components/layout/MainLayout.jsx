import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import FloatingActions from '../common/FloatingActions';
import PageLoader from '../common/PageLoader';
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 antialiased selection:bg-nand-blue selection:text-white">
      <PageLoader />
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default MainLayout;
