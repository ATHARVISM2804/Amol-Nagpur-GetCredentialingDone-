import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import AnimatedReveal from '../components/AnimatedReveal';
import { whyChooseUs } from '../data/siteData';

const cardColors = [
  { from: 'from-primary', to: 'to-primary-600', bg: 'from-primary-50', ring: 'ring-primary/20' },
  { from: 'from-accent', to: 'to-accent-600', bg: 'from-accent-50', ring: 'ring-accent/20' },
  { from: 'from-blue-500', to: 'to-primary', bg: 'from-blue-50', ring: 'ring-blue-500/20' },
  { from: 'from-primary-600', to: 'to-accent', bg: 'from-primary-50', ring: 'ring-primary-600/20' },
  { from: 'from-accent-500', to: 'to-primary-400', bg: 'from-accent-50', ring: 'ring-accent-500/20' },
  { from: 'from-primary-400', to: 'to-blue-600', bg: 'from-blue-50', ring: 'ring-primary-400/20' },
];

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <SectionWrapper bg="bg-gradient-to-br from-primary-50/40 via-white to-accent-50/20" className="overflow-hidden">
      {/* Animated mesh gradient background */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 via-transparent to-transparent rounded-full blur-3xl"
      />
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-20" />

      {/* Morphing decorative blob */}
      <div className="absolute bottom-[10%] right-[8%] w-[180px] h-[180px] bg-gradient-to-tl from-accent/[0.05] to-primary/[0.03] animate-morph blur-2xl" />

      <SectionHeading
        subtitle="Why Choose Us"
        title="The Get Credentialing Done Advantage"
        description="What sets us apart from every other credentialing service."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {whyChooseUs.map((item, i) => {
          const Icon = item.icon;
          const color = cardColors[i];
          const isActive = activeCard === i;
          return (
            <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative rounded-2xl cursor-pointer h-full"
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${color.from} ${color.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={isActive ? { opacity: [0.5, 0.8, 0.5] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative p-7 md:p-9 rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full">
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color.bg} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                  <div className="relative">
                    {/* Icon container with animated ring */}
                    <div className="relative w-16 h-16 mb-6">
                      <motion.div
                        animate={isActive ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] } : {}}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 flex items-center justify-center group-hover:from-primary group-hover:to-primary-600 transition-all duration-500 shadow-sm group-hover:shadow-glow`}
                      >
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                      </motion.div>
                      {/* Pulsing ring on hover */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.4, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className={`absolute inset-0 rounded-2xl ring-2 ${color.ring}`}
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    <h4 className="text-lg font-heading font-bold text-gray-900 mb-2.5 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Animated arrow indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 flex items-center gap-1.5 text-primary text-sm font-semibold"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
