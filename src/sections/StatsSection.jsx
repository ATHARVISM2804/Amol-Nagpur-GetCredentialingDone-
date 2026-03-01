import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedReveal from '../components/AnimatedReveal';
import CountUp from '../components/CountUp';
import { stats } from '../data/siteData';
import { HiOutlineUserGroup, HiOutlineBuildingOffice, HiOutlineAcademicCap } from 'react-icons/hi2';

const statIcons = [HiOutlineUserGroup, HiOutlineBuildingOffice, HiOutlineAcademicCap];
const statColors = [
  { ring: 'stroke-accent', glow: 'from-accent/20' },
  { ring: 'stroke-blue-400', glow: 'from-blue-400/20' },
  { ring: 'stroke-emerald-400', glow: 'from-emerald-400/20' },
];

function AnimatedRing({ progress, color, delay }) {
  const circumference = 2 * Math.PI * 42;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg ref={ref} className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
      <motion.circle
        cx="50" cy="50" r="42" fill="none"
        className={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
        animate={isInView ? { strokeDashoffset: circumference * (1 - progress) } : {}}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      />
    </svg>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5" />
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />

      {/* Animated floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[10%] w-40 h-40 bg-white/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-[15%] w-48 h-48 bg-accent/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Section label */}
        <AnimatedReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-blue-100 text-xs font-semibold tracking-wider uppercase">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-glow">
              Trusted by Healthcare Providers{' '}
              <span className="text-accent text-glow-accent">Nationwide</span>
            </h2>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            const color = statColors[i];
            // Proportional ring fill (visual only)
            const maxVal = Math.max(...stats.map(s => s.value));
            const ringProgress = stat.value / maxVal;

            return (
              <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.06, y: -5, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
                  className="group relative text-center px-6 py-10 rounded-3xl bg-white/[0.07] backdrop-blur-md border border-white/10 hover:bg-white/[0.12] hover:border-white/20 hover:shadow-glow-lg transition-all duration-500"
                >
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-t ${color.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    {/* Animated ring around icon */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <AnimatedRing progress={ringProgress} color={color.ring} delay={0.3 + i * 0.2} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10"
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    <p className="text-5xl md:text-6xl font-heading font-bold text-white drop-shadow-sm mb-2 text-glow">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent/50 mx-auto mt-3 mb-3 rounded-full" />
                    <p className="text-blue-100 font-medium text-sm tracking-wide">{stat.label}</p>
                  </div>
                </motion.div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
