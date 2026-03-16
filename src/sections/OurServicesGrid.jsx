import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedReveal from '../components/AnimatedReveal';
import { HiArrowRight } from 'react-icons/hi2';

const serviceCards = [
  {
    title: 'Individual Provider Credentialing',
    description:
      'Individual provider enrollment refers to the process of requesting participation in a health insurance network as a provider.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.4">
        <circle cx="16" cy="11" r="5" />
        <path d="M16 18c-5.5 0-10 3-10 7v1h20v-1c0-4-4.5-7-10-7z" />
        <circle cx="24" cy="9" r="2.5" strokeDasharray="2 2" opacity="0.6" />
        <path d="M26 14c1.5 1 2.5 2.5 2.5 4.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    link: '/services/individual-provider-credentialing',
  },
  {
    title: 'Group Credentialing',
    description:
      'Group provider credentialing is the process of getting group practice credentialed with payers. To be an in-network group provider, the group must be contracted with payers.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.4">
        <path d="M6 28V16l10-8 10 8v12H6z" />
        <rect x="12" y="20" width="8" height="8" rx="0.5" />
        <path d="M14 16h4v4h-4z" fill="currentColor" opacity="0.25" />
        <path d="M16 9V6" strokeLinecap="round" />
      </svg>
    ),
    link: '/services/group-credentialing',
  },
  {
    title: 'Individual & Group Affiliation',
    description:
      'Expanding your practice or hiring new individual clinician or provider to work under your group, it is very important to credential individual provider under the group practice.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.4">
        <circle cx="11" cy="12" r="4" />
        <circle cx="21" cy="12" r="4" />
        <path d="M6 24c0-3.5 2.5-6 5-6 1.2 0 2.8.5 5 2 2.2-1.5 3.8-2 5-2 2.5 0 5 2.5 5 6" strokeLinecap="round" />
      </svg>
    ),
    link: '/services/individual-group-affiliation',
  },
];

/* ---- Card sub-component ---- */
function ServiceCard({ card, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedReveal animation="fadeUp" delay={index * 0.15}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -14, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="group relative h-full cursor-pointer"
      >
        {/* ---- Outer glow ring (visible on hover) ---- */}
        <motion.div
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.45 }}
          className="absolute -inset-[2px] rounded-[1.75rem] blur-[6px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(100,160,255,0.45), rgba(180,80,220,0.35), rgba(231,38,41,0.5))',
          }}
        />

        {/* ---- Card body ---- */}
        <div className="relative h-full rounded-[1.6rem] overflow-hidden">
          {/* Default glass background */}
          <motion.div
            animate={isHovered ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white/[0.06] backdrop-blur-lg border border-white/[0.12] rounded-[1.6rem]"
          />

          {/* Hover gradient fill (blue -> purple -> pink -> red) */}
          <motion.div
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-[1.6rem]"
            style={{
              background:
                'linear-gradient(135deg, #4A90D9 0%, #7B5FA0 30%, #C0587A 60%, #E05050 85%, #E72629 100%)',
            }}
          />

          {/* Subtle noise / shimmer overlay on hover */}
          <motion.div
            animate={isHovered ? { opacity: 0.12 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-black/20 via-transparent to-white/10"
          />

          {/* Floating sparkle particles on hover */}
          <motion.div
            animate={
              isHovered
                ? { opacity: 1, y: [0, -6, 0], x: [0, 4, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-8 right-8 w-2 h-2 bg-white/30 rounded-full blur-[2px]"
          />
          <motion.div
            animate={
              isHovered
                ? { opacity: 1, y: [0, 5, 0], x: [0, -3, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-16 left-10 w-1.5 h-1.5 bg-white/25 rounded-full blur-[1px]"
          />

          {/* ---- Inner content ---- */}
          <div className="relative flex flex-col items-center text-center px-8 py-12 md:px-10 md:py-14 h-full z-10">
            {/* Icon container */}
            <motion.div
              animate={
                isHovered
                  ? { scale: 1.08, boxShadow: '0 8px 30px rgba(255,255,255,0.15)' }
                  : { scale: 1, boxShadow: '0 0px 0px rgba(255,255,255,0)' }
              }
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-16 h-16 rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] flex items-center justify-center mb-8 text-white/90 group-hover:bg-white/[0.14] group-hover:border-white/25 transition-all duration-500"
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              animate={isHovered ? { color: '#FFD4C4' } : { color: '#FFFFFF' }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-[1.35rem] font-heading font-bold mb-4 leading-snug"
            >
              {card.title}
            </motion.h3>

            {/* Description */}
            <p className="text-sm md:text-[0.935rem] text-blue-100/55 leading-relaxed mb-10 flex-1 group-hover:text-white/75 transition-colors duration-500">
              {card.description}
            </p>

            {/* Continue reading link */}
            <Link
              to={card.link}
              className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-400"
            >
              <span className="relative pb-0.5">
                Continue reading
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white/60 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
              </span>
              <motion.span
                animate={isHovered ? { x: 3, scale: 1.1 } : { x: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-8 h-8 rounded-full bg-white/[0.12] border border-white/[0.12] flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/25 transition-all duration-400"
              >
                <HiArrowRight className="w-3.5 h-3.5" />
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatedReveal>
  );
}

/* ---- Main section ---- */
export default function OurServicesGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Rich dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A3E] via-primary-900 to-[#0D2148]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary-400/5" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.06]" />

      {/* Animated floating orbs */}
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[10%] w-56 h-56 bg-primary-400/[0.04] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-[15%] w-64 h-64 bg-accent/[0.04] rounded-full blur-3xl"
      />

      {/* Morphing decorative shape */}
      <div className="absolute top-1/3 right-[8%] w-[180px] h-[180px] bg-white/[0.015] animate-morph blur-2xl" />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <AnimatedReveal>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 justify-center mb-4"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="h-[2px] rounded-full bg-accent-300/60"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300/80">
                What We Offer
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="h-[2px] rounded-full bg-accent-300/60"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-white leading-tight mb-5 text-balance text-glow"
            >
              Our Services
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-16 h-1 rounded-full mx-auto mb-5 bg-gradient-to-r from-accent to-accent/50"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg leading-relaxed max-w-xl mx-auto text-blue-100/50"
            >
              Comprehensive credentialing solutions tailored to your practice needs.
            </motion.p>
          </div>
        </AnimatedReveal>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-7 md:gap-9 max-w-5xl mx-auto">
          {serviceCards.map((card, i) => (
            <ServiceCard key={i} card={card} index={i} />
          ))}
        </div>
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
