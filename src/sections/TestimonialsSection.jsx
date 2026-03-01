import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import TestimonialSlider from '../components/TestimonialSlider';
import AnimatedReveal from '../components/AnimatedReveal';
import { testimonials } from '../data/siteData';
import { HiOutlineShieldCheck, HiOutlineHandThumbUp, HiOutlineHeart } from 'react-icons/hi2';

const floatingBadges = [
  { icon: HiOutlineShieldCheck, label: 'Verified Reviews', position: 'top-24 left-[5%]', delay: 0 },
  { icon: HiOutlineHandThumbUp, label: '99% Satisfaction', position: 'top-32 right-[3%]', delay: 0.3 },
  { icon: HiOutlineHeart, label: 'Trusted Partner', position: 'bottom-28 left-[8%]', delay: 0.6 },
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper bg="bg-gradient-to-b from-slate-100/70 via-gray-50 to-blue-50/40" className="overflow-hidden">
      {/* Animated decorative orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-[10%] w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-[5%] w-48 h-48 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"
      />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />

      {/* Morphing decorative shape */}
      <div className="absolute top-[20%] left-[3%] w-[160px] h-[160px] bg-gradient-to-br from-primary/[0.04] to-transparent animate-morph blur-xl" />

      {/* Floating trust badges (desktop only) */}
      {floatingBadges.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + badge.delay, type: 'spring' }}
            className={`absolute ${badge.position} hidden xl:flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-card border border-white/60 z-0`}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-semibold text-gray-700">{badge.label}</span>
            </motion.div>
          </motion.div>
        );
      })}

      <SectionHeading
        subtitle="Testimonials"
        title="What Our Clients Say"
        description="Trusted by healthcare providers across the country."
      />

      <AnimatedReveal animation="scale">
        <TestimonialSlider testimonials={testimonials} />
      </AnimatedReveal>

      {/* Trust metrics row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-8 mt-14"
      >
        {[
          { value: '4.9/5', label: 'Average Rating' },
          { value: '500+', label: 'Happy Clients' },
          { value: '99%', label: 'Satisfaction Rate' },
        ].map((metric, i) => (
          <div key={i} className="flex items-center gap-3 text-center">
            <span className="text-2xl font-heading font-bold text-primary">{metric.value}</span>
            <span className="text-xs text-gray-500 font-medium">{metric.label}</span>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
