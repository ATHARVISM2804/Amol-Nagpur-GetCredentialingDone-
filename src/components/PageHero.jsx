import { motion } from 'framer-motion';
import AnimatedReveal from './AnimatedReveal';

export default function PageHero({ subtitle, title, description }) {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Dark gradient background matching home hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-transparent to-accent/5" />

      {/* Mesh overlay for depth */}
      <div className="absolute inset-0 bg-mesh-dark" />

      {/* Animated floating orbs — CSS only */}
      <div
        className="absolute top-16 right-[10%] w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-float-slow"
        style={{willChange:'transform'}}
      />
      <div
        className="absolute bottom-0 left-[5%] w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl animate-float-slower"
        style={{willChange:'transform'}}
      />
      <div
        className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary-400/5 rounded-full blur-[100px] animate-float"
        style={{willChange:'transform'}}
      />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />

      {/* Animated accent sweep lines — CSS only */}
      <div className="absolute top-1/4 left-0 w-[300px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-sweep-right" style={{willChange:'transform'}} />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-px bg-gradient-to-r from-transparent via-primary-300/20 to-transparent animate-sweep-left" style={{willChange:'transform'}} />

      {/* Geometric shapes — CSS only */}
      <div className="absolute top-20 left-[15%] w-16 h-16 border border-white/[0.06] rounded-xl animate-spin-slow" style={{willChange:'transform'}} />
      <div className="absolute bottom-16 right-[20%] w-12 h-12 border border-accent/10 rounded-full animate-spin-slow" style={{animationDirection:'reverse',willChange:'transform'}} />

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
        <AnimatedReveal>
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 justify-center mb-5"
            >
              <span className="w-8 h-[2px] bg-accent rounded-full" />
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
                {subtitle}
              </span>
              <span className="w-8 h-[2px] bg-accent rounded-full" />
            </motion.div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.1] mb-7 text-balance text-glow">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Decorative bottom accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto mt-8"
          />
        </AnimatedReveal>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 0v30c200 30 400 30 720 0s520-30 720 0v30H0V0z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
