import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedReveal from '../components/AnimatedReveal';
import SectionWrapper from '../components/SectionWrapper';

const progressStats = [
  { label: 'Efficiency', value: 98 },
  { label: 'Experience', value: 95 },
  { label: 'Success', value: 99 },
];

function ProgressBar({ label, value, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm md:text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
          {label}
        </span>
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
          className="text-sm md:text-base font-bold text-gray-700"
        >
          {value}%
        </motion.span>
      </div>
      <div className="w-full h-2.5 bg-gray-200/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary-500 to-primary-400 relative"
        >
          {/* Shimmer sweep */}
          <motion.div
            animate={isInView ? { x: ['-100%', '250%'] } : {}}
            transition={{ duration: 1.5, delay: delay + 1, ease: 'easeInOut' }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

const visionBullets = [
  'Reduced cost of provider operations',
  'Net gain in monthly receivables',
  'Comprehensive RCM services under one roof',
  'Focus on quality billing and reimbursements',
  'Tailor made service packages to suit the providers needs',
];

const missionText =
  'To become a one-stop solution for all provider credentialing, re-credentialing, and payer enrollment services by providing quality and time-bound services to our clients. We are on a mission to become the best insurance Credentialing Service provider in the US.';

export default function VisionMission() {
  return (
    <SectionWrapper bg="bg-gradient-to-br from-slate-50 via-white to-blue-50/30" className="overflow-hidden">
      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[10%] right-[5%] w-[280px] h-[280px] bg-gradient-to-br from-primary/[0.04] to-accent/[0.02] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[15%] left-[3%] w-[220px] h-[220px] bg-gradient-to-tr from-accent/[0.03] to-primary/[0.02] rounded-full blur-3xl"
      />
      <div className="absolute top-[40%] left-[8%] w-[120px] h-[120px] bg-primary/[0.02] animate-morph blur-2xl" />

      <div className="relative z-10 space-y-28 md:space-y-36">
        {/* ===================== VISION ===================== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedReveal animation="slideRight">
            <div className="relative group">
              {/* Decorative frame accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-10"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative rounded-2xl overflow-hidden shadow-card-hover"
              >
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt="Healthcare professional - Our Vision"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                animate={{ y: [0, -6, 0] }}
                className="absolute -bottom-5 -right-4 md:-right-6 bg-white rounded-2xl shadow-card-hover px-5 py-3 border border-gray-100/60"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-lg shadow-primary/20">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Our Focus</p>
                    <p className="text-sm font-bold text-gray-800">Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedReveal>

          {/* Content */}
          <AnimatedReveal animation="slideLeft">
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-8 h-[2px] rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
                  What Drives Us
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-bold text-gray-900 leading-tight mb-6"
              >
                Vision
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 leading-relaxed text-[0.95rem] md:text-base mb-8"
              >
                At Get Credentialing Done, we are committed to providing you with the highest
                quality Insurance{' '}
                <span className="font-bold text-primary underline decoration-primary/30 decoration-2 underline-offset-2">
                  Credentialing Services
                </span>{' '}
                to ensure a smooth and organized experience. Our team of dedicated professionals
                works tirelessly on your behalf, acting as your confidential liaison to help you:
              </motion.p>

              {/* Bullet points */}
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3.5"
              >
                {visionBullets.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    className="flex items-start gap-3 group/item"
                  >
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="text-gray-700 text-[0.925rem] leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </AnimatedReveal>
        </div>

        {/* ===================== MISSION ===================== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content (left on desktop) */}
          <AnimatedReveal animation="slideRight">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-8 h-[2px] rounded-full bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent/70">
                  Our Purpose
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-bold text-gray-900 leading-tight mb-6"
              >
                Mission
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 leading-relaxed text-[0.95rem] md:text-base mb-8"
              >
                {missionText}
              </motion.p>

              {/* Decorative accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="w-20 h-1 rounded-full bg-gradient-to-r from-accent to-accent/40 origin-left"
              />

              {/* Stats Progress Bars */}
              <div className="mt-10 space-y-5 bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100/60 shadow-card">
                {progressStats.map((stat, i) => (
                  <ProgressBar
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    delay={i * 0.2}
                  />
                ))}
              </div>
            </div>
          </AnimatedReveal>

          {/* Image (right on desktop) */}
          <AnimatedReveal animation="slideLeft">
            <div className="relative group order-1 lg:order-2">
              {/* Decorative frame accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tl from-accent/10 via-transparent to-primary/10 -z-10"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative rounded-2xl overflow-hidden shadow-card-hover"
              >
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                  alt="Medical team - Our Mission"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                animate={{ y: [0, -6, 0] }}
                className="absolute -bottom-5 -left-4 md:-left-6 bg-white rounded-2xl shadow-card-hover px-5 py-3 border border-gray-100/60"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center shadow-lg shadow-accent/20">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Our Goal</p>
                    <p className="text-sm font-bold text-gray-800">#1 in the US</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
