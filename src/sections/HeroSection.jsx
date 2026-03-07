import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80',
    alt: 'Healthcare professional with stethoscope',
  },
  {
    url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=80',
    alt: 'Medical team collaboration',
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80',
    alt: 'Professional office workspace',
  },
  {
    url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1400&q=80',
    alt: 'Healthcare provider reviewing documents',
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '8%' : '-8%', opacity: 0, scale: 1.08 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-8%' : '8%', opacity: 0, scale: 1.02 }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ===== SLIDING BACKGROUND IMAGES ===== */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].url}
              alt={slides[current].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-900/60 to-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-primary-900/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/10" />

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-15" />

        {/* Animated accent lines */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-0 w-[400px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/3 right-0 w-[500px] h-px bg-gradient-to-r from-transparent via-primary-300/20 to-transparent"
        />
      </div>

      {/* ===== SLIDE NAVIGATION ===== */}
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-5 h-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-10 h-2.5 bg-gradient-to-r from-accent to-accent-400'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ===== FLOATING ORBS ===== */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[8%] w-60 h-60 bg-primary/15 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-[5%] w-72 h-72 bg-accent/10 rounded-full blur-[100px]"
      />

      {/* ===== CONTENT ===== */}
      <div className="container-custom relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-accent bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Healthcare Credentialing Experts
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-heading font-extrabold text-white leading-[1.08] mb-7 drop-shadow-lg text-glow"
            >
              Fast &amp; Easy{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-300 via-accent to-accent-400 bg-clip-text text-transparent">Insurance Credentialing</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8c50-6 100-6 148-2s100 4 148-2" stroke="#E72629" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>{' '}
              Services
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-200/90 leading-relaxed mb-9 max-w-lg"
            >
              Empowering providers to focus on patient care while we handle
              credentialing with speed, accuracy, and transparency.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button to="/contact" variant="accent" size="lg" icon={<HiArrowRight className="w-4 h-4" />}>
                Get Started
              </Button>
              <Button to="/services" variant="white" size="lg">
                Our Services
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 sm:gap-10 mt-14 pt-8 border-t border-white/10"
            >
              {[
                { num: '2,132+', label: 'Providers Credentialed' },
                { num: '113+', label: 'Groups Served' },
                { num: '60+', label: 'Specialties' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-10 bg-white/15 -ml-3 sm:-ml-5" />}
                  <div>
                    <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                      {stat.num}
                    </p>
                    <p className="text-xs text-gray-300/80 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Floating cards over transparent area */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0)' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            {/* Decorative glass panel */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent" />
              {/* Slide thumbnail inside */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
                  src={slides[current].url}
                  alt={slides[current].alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl"
                />
              </AnimatePresence>
            </div>

            {/* Floating card - bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-8"
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-5 flex items-center gap-4 border border-white/80 ring-1 ring-emerald-200/30"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Credentialing Complete</p>
                  <p className="text-xs text-gray-500">Average 45 days faster</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card - top right */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -right-4 md:-top-5 md:-right-6"
            >
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-white/80"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">HIPAA Compliant</p>
                  <p className="text-xs text-gray-500">100% Secure</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card - mid right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute top-1/2 -right-3 md:-right-5 -translate-y-1/2"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-white/80"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Fast Turnaround</p>
                  <p className="text-xs text-gray-500">60-90 Day Average</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Smooth wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 0v30c200 30 400 30 720 0s520-30 720 0v30H0V0z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
