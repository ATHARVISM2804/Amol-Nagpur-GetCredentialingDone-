import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi2';

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const DURATION = 6000;

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setProgress(0);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  }, [testimonials.length]);

  // Auto-advance with progress tracking
  useEffect(() => {
    const interval = 50;
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (interval / DURATION) * 100;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [next, current]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  const avatarColors = [
    'from-primary to-primary-600',
    'from-accent to-accent-600',
    'from-blue-500 to-primary-400',
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation arrows */}
      <motion.button
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={prev}
        className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-card hover:shadow-card-hover border border-gray-100 flex items-center justify-center text-primary hover:text-accent transition-all duration-300"
      >
        <HiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={next}
        className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-card hover:shadow-card-hover border border-gray-100 flex items-center justify-center text-primary hover:text-accent transition-all duration-300"
      >
        <HiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Glass card container */}
      <div className="relative">
        {/* Animated gradient border glow */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-sm" />

        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-glass-lg p-10 md:p-16 text-center overflow-hidden">
        {/* Decorative gradient mesh inside card */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-2xl" />

        {/* Large decorative quote */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-glow rotate-3">
          <span className="text-white text-2xl font-heading font-bold leading-none">&ldquo;</span>
        </div>

        {/* Star rating */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-1 mt-4 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 300 }}
            >
              <HiStar className="w-5 h-5 text-amber-400 drop-shadow-sm" />
            </motion.div>
          ))}
        </motion.div>

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-10 font-light italic max-w-3xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[current % avatarColors.length]} flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg ring-4 ring-white`}
                >
                  {testimonials[current].name[0]}
                </motion.div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-gray-900 text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar + dots */}
        <div className="mt-10 space-y-4">
          {/* Progress bar */}
          <div className="max-w-xs mx-auto h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Interactive dots */}
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group/dot relative p-1"
                aria-label={`Go to testimonial by ${t.name}`}
              >
                <div className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? 'bg-gradient-to-r from-primary to-primary-600 w-10'
                    : 'bg-gray-200 hover:bg-gray-300 w-2.5'
                }`} />
                {/* Tooltip on hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/dot:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-2 py-1 bg-gray-800 text-white text-[10px] rounded-md whitespace-nowrap font-medium">
                    {t.name.split(' ')[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
