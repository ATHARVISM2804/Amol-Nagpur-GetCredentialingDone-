import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import AnimatedReveal from '../components/AnimatedReveal';
import { expertise } from '../data/siteData';
import { HiOutlineShieldCheck, HiOutlineBuildingOffice2, HiOutlineBriefcase } from 'react-icons/hi2';

const expertiseIcons = [HiOutlineShieldCheck, HiOutlineBuildingOffice2, HiOutlineBriefcase];
const expertiseColors = [
  { gradient: 'from-primary to-primary-600', light: 'from-primary-50/80 to-primary-100/40', accent: 'text-primary', border: 'border-primary/20' },
  { gradient: 'from-accent to-accent-600', light: 'from-accent-50/80 to-accent-100/40', accent: 'text-accent', border: 'border-accent/20' },
  { gradient: 'from-blue-500 to-primary-400', light: 'from-blue-50/80 to-primary-50/40', accent: 'text-blue-600', border: 'border-blue-500/20' },
];

export default function ExpertiseSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <SectionWrapper bg="bg-gradient-to-br from-amber-50/50 via-orange-50/20 to-yellow-50/15" className="overflow-hidden">
      {/* Animated diagonal blobs */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-1/2 -right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-accent/4 to-transparent rounded-full blur-[80px]"
      />

      {/* Morphing decorative accent blob */}
      <div className="absolute top-[30%] right-[10%] w-[150px] h-[150px] bg-gradient-to-bl from-orange-200/20 to-amber-200/10 animate-morph blur-xl" />

      <SectionHeading
        subtitle="Our Expertise"
        title="Credentialing Across Every Payor Type"
        description="From government programs to commercial insurers, we know the process inside and out."
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {expertise.map((item, i) => {
          const Icon = expertiseIcons[i];
          const color = expertiseColors[i];
          const isActive = activeCard === i;

          return (
            <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative h-full cursor-pointer"
              >
                {/* Gradient border effect */}
                <motion.div
                  className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-8 md:p-10 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full flex flex-col">
                  {/* Top accent bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                    className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${color.gradient} origin-left`}
                  />

                  {/* Background glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color.light} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                  <div className="relative flex flex-col flex-1">
                    {/* Icon + Number row */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        animate={isActive ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color.light} flex items-center justify-center group-hover:bg-gradient-to-br group-hover:${color.gradient} transition-all duration-500 shadow-sm`}
                      >
                        <Icon className={`w-7 h-7 ${color.accent} group-hover:text-white transition-colors duration-500`} />
                      </motion.div>
                      <span className="text-5xl font-heading font-bold bg-gradient-to-b from-gray-200 to-gray-100 bg-clip-text text-transparent group-hover:from-primary/20 group-hover:to-primary/5 transition-all duration-500">
                        0{i + 1}
                      </span>
                    </div>

                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-3 relative">
                      {item.title}
                      <motion.span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${color.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isActive ? { width: '3.5rem' } : { width: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed mt-2 flex-1">
                      {item.description}
                    </p>

                    {/* Interactive "Explore" link */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-6 flex items-center gap-2 text-sm font-semibold ${color.accent}`}
                    >
                      <span>Explore</span>
                      <motion.svg
                        animate={isActive ? { x: [0, 4, 0] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedReveal>
          );
        })}
      </div>

      {/* Connecting line between cards (desktop) */}
      <div className="hidden md:flex items-center justify-center mt-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-2/3 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full origin-center"
        />
      </div>
    </SectionWrapper>
  );
}
