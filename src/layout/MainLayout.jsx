import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function MainLayout() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${location.key}`, window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.key]);

  const handleExitComplete = () => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    } else {
      const savedPos = sessionStorage.getItem(`scroll-${location.key}`);
      if (savedPos !== null) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPos, 10));
        }, 10);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          <motion.div   
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
