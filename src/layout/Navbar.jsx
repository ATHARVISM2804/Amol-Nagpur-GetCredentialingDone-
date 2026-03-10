import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowRight, HiChevronDown } from 'react-icons/hi2';
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
        <nav className="container-custom flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1772874370/logo-transparent_jzzdlr.png"
                alt="Get Credentialing Done"
                className="h-20 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav — pill style */}
          <div className="hidden lg:flex items-center">
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
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-700"
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
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-gray-100 shadow-2xl shadow-primary/5"
          >
            <div className="container-custom py-5 space-y-1">
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full py-3.5 px-5 rounded-2xl text-sm font-semibold text-gray-700 hover:bg-primary-50/60 hover:text-primary transition-all duration-200"
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
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4"
                        >
                          <Link
                            to="/services"
                            className="flex items-center py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-primary"
                          >
                            All Services
                          </Link>
                          {serviceDropdownLinks.map((s) => (
                            <NavLink
                              key={s.path}
                              to={s.path}
                              className={({ isActive }) =>
                                `flex items-center justify-between py-2.5 px-5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                  isActive
                                    ? 'text-primary bg-primary/5'
                                    : 'text-gray-600 hover:bg-primary-50/60 hover:text-primary'
                                }`
                              }
                            >
                              {s.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-3.5 px-5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-primary to-primary-600 shadow-md'
                            : 'text-gray-700 hover:bg-primary-50/60 hover:text-primary'
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
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-3"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-accent to-red-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-accent/20"
                >
                  Get Started <HiArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
