import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowRight, HiChevronDown, HiOutlinePhone } from 'react-icons/hi2';
import { navLinks, serviceDropdownLinks } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX }}
        className="h-[2px] bg-gradient-to-r from-accent via-primary-400 to-accent origin-left"
      />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(6,69,145,0.08)] border-b border-primary/5'
            : 'bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-md'
        }`}
      >
        <nav className="container-custom flex items-center justify-between h-16 md:h-20 xl:h-[88px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1772874370/logo-transparent_jzzdlr.png"
                alt="Get Credentialing Done"
                className="h-12 md:h-16 xl:h-20 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav — pill style */}
          <div className="hidden xl:flex items-center">
            <div className="flex items-center bg-gray-50/80 rounded-2xl p-1.5 border border-gray-100/60">
              {navLinks.map((link) =>
                link.dropdown ? (
                  // Services dropdown
                  <div
                    key={link.path}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`relative flex items-center gap-1 text-[13px] font-semibold px-5 py-2 rounded-xl transition-all duration-300 ${
                        location.pathname.startsWith('/services')
                          ? 'text-white'
                          : 'text-gray-600 hover:text-primary'
                      }`}
                    >
                      {location.pathname.startsWith('/services') && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 rounded-xl shadow-md shadow-primary/25"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                      >
                        <HiChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    </button>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-gray-100/80 overflow-hidden z-50"
                        >
                          <div className="p-2">
                            <div className="px-3 py-2 mb-1">
                              <Link
                                to="/services"
                                className="text-xs font-bold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors"
                              >
                                All Services →
                              </Link>
                            </div>
                            {serviceDropdownLinks.map((s, i) => (
                              <motion.div
                                key={s.path}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                              >
                                <Link
                                  to={s.path}
                                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200 group/item"
                                >
                                  <span>{s.label}</span>
                                  <HiArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => setHoveredLink(link.path)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={({ isActive }) =>
                      `relative text-[13px] font-semibold px-5 py-2 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-600 hover:text-primary'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 rounded-xl shadow-md shadow-primary/25"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        {!isActive && hoveredLink === link.path && (
                          <motion.div
                            layoutId="nav-hover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-primary/5 rounded-xl"
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        <span className="relative z-10">{link.label}</span>
                      </>
                    )}
                  </NavLink>
                )
              )}
            </div>

            <div className="ml-5">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden bg-gradient-to-r from-accent to-red-600 text-white text-[13px] font-bold px-6 py-2.5 rounded-2xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 btn-shine"
                >
                  <span className="relative z-10">Get Started</span>
                  <HiArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-700"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <HiXMark className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <HiBars3 className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl z-50"
          >
            <div className="container-custom py-4 space-y-1">
              {/* Mobile header info */}
              <div className="flex items-center justify-between px-2 pb-3 mb-1 border-b border-gray-100">
                <span className="text-xs text-gray-500 font-medium">Navigation</span>
                <a href="tel:8663183663" className="text-xs font-semibold text-primary flex items-center gap-1">
                  <HiOutlinePhone className="w-3.5 h-3.5" /> 866-318-3663
                </a>
              </div>
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full py-3.5 px-4 rounded-xl text-[15px] font-semibold text-gray-900 bg-gray-50 hover:bg-primary-50 hover:text-primary transition-all duration-200"
                    >
                      {link.label}
                      <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <HiChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-1 ml-3 border-l-2 border-primary/20 pl-3 space-y-0.5 py-1">
                            <Link
                              to="/services"
                              className="flex items-center py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/5 transition-colors"
                            >
                              All Services →
                            </Link>
                            {serviceDropdownLinks.map((s) => (
                              <NavLink
                                key={s.path}
                                to={s.path}
                                className={({ isActive }) =>
                                  `flex items-center justify-between py-2.5 px-3 rounded-lg text-[14px] font-medium transition-all duration-150 ${
                                    isActive
                                      ? 'text-primary bg-primary/8 font-semibold'
                                      : 'text-gray-800 hover:bg-primary/5 hover:text-primary'
                                  }`
                                }
                              >
                                {s.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3.5 px-4 rounded-xl text-[15px] font-semibold transition-all duration-150 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-primary to-primary-600 shadow-md'
                          : 'text-gray-900 bg-gray-50 hover:bg-primary-50 hover:text-primary'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && <div className="w-2 h-2 rounded-full bg-accent" />}
                      </>
                    )}
                  </NavLink>
                )
              )}
              <div className="pt-3 pb-1">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-accent to-red-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-accent/25 text-[15px]"
                >
                  Get Started <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
