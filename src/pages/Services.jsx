import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import AnimatedReveal from '../components/AnimatedReveal';
import CTASection from '../sections/CTASection';
import { services } from '../data/siteData';
import {
  HiCheck,
  HiArrowRight,
  HiOutlineArrowPath,
  HiOutlineClipboardDocumentList,
  HiOutlineBell,
  HiOutlineBuildingOffice,
  HiOutlineCircleStack,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineShieldExclamation,
  HiOutlineRocketLaunch,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineHandRaised,
  HiOutlineDocumentCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineArrowTrendingUp,
  HiOutlineExclamationTriangle,
  HiOutlineChatBubbleLeftRight,
  HiOutlineSparkles,
  HiOutlineLockClosed,
  HiOutlineCheckBadge,
  HiOutlineHeart,
} from 'react-icons/hi2';

const additionalIcons = [HiOutlineArrowPath, HiOutlineClipboardDocumentList, HiOutlineBell, HiOutlineBuildingOffice, HiOutlineCircleStack, HiOutlineShieldCheck];
const cardColors = [
  'from-primary to-primary-600',
  'from-accent to-accent-600',
  'from-blue-500 to-primary-400',
  'from-primary-600 to-accent',
  'from-blue-600 to-primary-500',
  'from-accent-500 to-red-500',
];

/* ---- Why You Need Our Experts ---- */
const expertReasons = [
  {
    title: 'Experts You Can Trust',
    description: 'Our team deeply understands the constantly changing credentialing world. We know the exact steps to ensure your process is smooth and quick.',
    icon: HiOutlineCheckBadge,
    gradient: 'from-primary to-primary-600',
  },
  {
    title: 'We Handle Everything',
    description: 'We manage the whole credentialing process, from gathering documents and verifying your licenses to talking with insurance companies and hitting every deadline.',
    icon: HiOutlineClipboardDocumentList,
    gradient: 'from-accent to-accent-600',
  },
  {
    title: 'Fewer Mistakes, Faster Payments',
    description: 'We pay close attention to every detail. This greatly reduces errors and delays, meaning you get approved faster and your claims get processed sooner.',
    icon: HiOutlineRocketLaunch,
    gradient: 'from-blue-500 to-primary-400',
  },
  {
    title: 'Stay Compliant',
    description: 'We keep up with all the latest rules and regulations. This helps protect your practice from penalties and risks.',
    icon: HiOutlineShieldCheck,
    gradient: 'from-primary-600 to-accent',
  },
  {
    title: 'Focus and Peace of Mind',
    description: 'When we manage your credentialing, you gain valuable time back and can relax, knowing this critical task is in expert hands.',
    icon: HiOutlineHeart,
    gradient: 'from-blue-600 to-primary-500',
  },
];

/* ---- Credentialing Process Steps ---- */
const processSteps = [
  {
    title: 'Verify Your Background',
    description: 'We carefully check your education, licenses, and history to make sure all your records are correct and complete.',
    icon: HiOutlineMagnifyingGlass,
  },
  {
    title: 'Insurance Enrollment',
    description: 'We manage the entire application process for all the insurance networks you want to join, helping you reach more patients and boost your revenue potential.',
    icon: HiOutlineDocumentCheck,
  },
  {
    title: 'Keep Your Current Credentialing',
    description: 'Credentialing is ongoing! We stay on top of renewal dates and other requirements, ensuring your practice stays approved and your revenue keeps flowing without interruption.',
    icon: HiOutlineArrowPath,
  },
  {
    title: 'Help with Denials',
    description: 'If an application gets unexpectedly denied, we step in right away to fix the issue quickly and efficiently.',
    icon: HiOutlineExclamationTriangle,
  },
  {
    title: 'Ongoing Support',
    description: 'We provide continuous guidance and support, keeping you informed about any changes in credentialing rules.',
    icon: HiOutlineChatBubbleLeftRight,
  },
];

/* ---- Benefits of Choosing Us ---- */
const benefits = [
  {
    title: 'Boost Your Income',
    description: 'When credentialing is fast and smooth, your claims process faster, boosting your practice&#39;s revenue.',
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: 'Get More Patients',
    description: 'Being approved by more insurance networks brings in a wider patient base, leading to bigger practice growth.',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Free Up Your Staff',
    description: 'By letting us handle the credentialing work, you free up your valuable staff time and resources for your practice&#39;s core operations.',
    icon: HiOutlineHandRaised,
  },
  {
    title: 'Lower Risk',
    description: 'Our expertise means you meet all the necessary rules, lowering the chance of getting penalized.',
    icon: HiOutlineShieldExclamation,
  },
  {
    title: 'Confidence',
    description: 'Knowing your credentialing is taken care of lets you focus on delivering high-quality patient care without distraction.',
    icon: HiOutlineSparkles,
  },
];

/* ---- Why Work With Us ---- */
const workWithUs = [
  {
    title: 'Dedicated Help',
    description: 'You&#39;ll have one main point of contact who can answer your questions and address your concerns throughout the process.',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'We Keep You Updated',
    description: 'We promise open and clear communication, keeping you informed every step of the way.',
    icon: HiOutlineBell,
  },
  {
    title: 'Fair Prices',
    description: 'We offer flexible packages and competitive rates to match your budget and specific requirements.',
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: 'We Get Results',
    description: 'We have a long history of successfully credentialing satisfied clients across many healthcare specialties.',
    icon: HiOutlineArrowTrendingUp,
  },
];

function TiltImage({ src, alt, children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 });

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1000px' }}
      className="relative group cursor-pointer"
    >
      {/* Animated gradient ring */}
      <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-primary via-primary-400 to-accent opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-[2px]" />
      <div className="relative rounded-2xl overflow-hidden shadow-glass ring-1 ring-white/50 bg-white">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      {children}
    </motion.div>
  );
}

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <PageHero
        subtitle="Our Services"
        title="Comprehensive Credentialing Solutions"
        description="From individual providers to large groups, we handle every aspect of insurance credentialing so you don't have to."
      />

      {/* Services Detail */}
      <SectionWrapper bg="bg-gradient-to-br from-slate-50/70 via-blue-50/40 to-indigo-50/25" className="overflow-hidden">
        {/* Decorative blob */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
        />

        <div className="space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.id}
                className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                {/* Text */}
                <AnimatedReveal
                  animation={isReversed ? 'slideRight' : 'slideLeft'}
                  className={isReversed ? 'lg:order-2' : ''}
                >
                  <div>
                    {/* Animated step number */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 400, delay: 0.2 }}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center shadow-lg shadow-accent/30"
                      >
                        <span className="text-sm font-bold text-white">0{index + 1}</span>
                      </motion.div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {service.title.split(' ')[0]}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-balance">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3.5">
                      {service.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                          className="flex items-start gap-3 text-gray-600 group/bullet"
                        >
                          <motion.span
                            whileHover={{ scale: 1.3, rotate: 10 }}
                            className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center mt-0.5 shrink-0 shadow-sm"
                          >
                            <HiCheck className="w-3.5 h-3.5 text-white" />
                          </motion.span>
                          <span className="text-sm leading-relaxed group-hover/bullet:text-gray-900 transition-colors duration-200">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ x: 8 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 bg-primary-50 text-primary font-semibold text-sm rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Learn More <HiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </AnimatedReveal>

                {/* Image */}
                <AnimatedReveal
                  animation={isReversed ? 'slideLeft' : 'slideRight'}
                  className={isReversed ? 'lg:order-1' : ''}
                >
                  <TiltImage src={service.image} alt={service.title}>
                    {/* Floating step badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-3 -right-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-xl"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <span className="text-lg font-heading font-bold text-white">0{index + 1}</span>
                    </motion.div>
                  </TiltImage>
                </AnimatedReveal>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ==================== CREDENTIALING INTRO ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20" className="overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[5%] w-[350px] h-[350px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute bottom-1/4 left-[3%] w-[180px] h-[180px] bg-accent/[0.03] animate-morph blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedReveal animation="fadeUp">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100/50 shadow-card overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/[0.06] to-transparent rounded-br-[4rem]" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/[0.04] to-transparent rounded-tl-[3rem]" />

              <div className="relative flex items-start gap-5 md:gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/20"
                >
                  <HiOutlineDocumentCheck className="w-6 h-6 text-white" />
                </motion.div>
                <div className="space-y-4 text-gray-500 text-[0.93rem] md:text-base leading-[1.8]">
                  <p>
                    In healthcare, you can&#39;t treat patients or get reimbursed until you&#39;re approved by insurance companies. This approval process, called{' '}
                    <span className="font-semibold text-primary">credentialing</span>, is the necessary bridge that connects you to your revenue. If it&#39;s not done right, it causes long delays and financial headaches.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* ==================== WHY YOU NEED OUR CREDENTIALING EXPERTS ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-primary-900 via-[#0a3d7c] to-primary-800" className="overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.07]" />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-accent/12 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-gradient-to-tl from-primary-400/10 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-[40%] right-[12%] w-[160px] h-[160px] bg-white/[0.015] animate-morph blur-2xl" />

        <div className="relative z-10">
          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              light
              subtitle="Expert Guidance"
              title="Why You Need Our Credentialing Experts"
              description="Dealing with the endless forms and confusing rules of credentialing can feel impossible when you're busy running a practice. Our services take that huge burden off your team, leaving you free to focus on what you do best — taking care of patients."
            />
          </AnimatedReveal>

          {/* Intro line */}
          <AnimatedReveal animation="fadeUp" delay={0.1}>
            <p className="text-center text-accent-200/80 text-sm font-semibold uppercase tracking-widest mb-10">
              Here&#39;s why working with us is the smart choice:
            </p>
          </AnimatedReveal>

          {/* Expert reason cards — 2+3 or 3+2 grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-6">
            {expertReasons.slice(0, 3).map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    className="group relative h-full"
                  >
                    <motion.div className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${item.gradient} blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="relative p-7 rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] group-hover:bg-white/[0.12] group-hover:border-white/[0.2] h-full transition-all duration-500 overflow-hidden">
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.gradient} opacity-[0.06] group-hover:opacity-[0.12] rounded-bl-[3rem] transition-opacity duration-500`} />
                      <div className="relative">
                        <motion.div
                          whileHover={{ rotate: 6, scale: 1.1 }}
                          className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg shadow-black/20 ring-1 ring-white/[0.15]`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h4 className="text-[1.05rem] font-heading font-bold text-white mb-2 group-hover:text-accent-200 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                          className={`w-10 h-[2px] rounded-full bg-gradient-to-r ${item.gradient} mb-3 origin-left`}
                        />
                        <p className="text-[0.82rem] text-blue-100/50 leading-relaxed group-hover:text-blue-100/75 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
            {expertReasons.slice(3).map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={i + 3} animation="fadeUp" delay={(i + 3) * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    className="group relative h-full"
                  >
                    <motion.div className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${item.gradient} blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="relative p-7 rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] group-hover:bg-white/[0.12] group-hover:border-white/[0.2] h-full transition-all duration-500 overflow-hidden">
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.gradient} opacity-[0.06] group-hover:opacity-[0.12] rounded-bl-[3rem] transition-opacity duration-500`} />
                      <div className="relative">
                        <motion.div
                          whileHover={{ rotate: 6, scale: 1.1 }}
                          className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg shadow-black/20 ring-1 ring-white/[0.15]`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h4 className="text-[1.05rem] font-heading font-bold text-white mb-2 group-hover:text-accent-200 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (i + 3) * 0.1, duration: 0.5 }}
                          className={`w-10 h-[2px] rounded-full bg-gradient-to-r ${item.gradient} mb-3 origin-left`}
                        />
                        <p className="text-[0.82rem] text-blue-100/50 leading-relaxed group-hover:text-blue-100/75 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ==================== OUR CREDENTIALING PROCESS ==================== */}
      <SectionWrapper bg="bg-gradient-to-tl from-slate-50/60 via-white to-blue-50/30" className="overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] bg-gradient-to-br from-accent/[0.04] to-transparent animate-morph blur-2xl" />

        <div className="relative z-10">
          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              subtitle="Step by Step"
              title="Our Credentialing Process"
              description="We offer a complete set of services to guide you through the maze of approval, from verifying your first license to getting you enrolled in new insurance networks."
            />
          </AnimatedReveal>

          {/* Timeline-style process steps */}
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <AnimatedReveal key={i} animation={isEven ? 'slideLeft' : 'slideRight'} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: isEven ? 6 : -6, transition: { type: 'spring', stiffness: 300 } }}
                    className="group relative flex items-start gap-5 md:gap-7 mb-6 last:mb-0"
                  >
                    {/* Step connector line */}
                    {i < processSteps.length - 1 && (
                      <div className="absolute left-[23px] md:left-[27px] top-14 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 to-primary/5 -mb-6" />
                    )}

                    {/* Step number circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, delay: 0.2 + i * 0.1 }}
                      className="relative flex-shrink-0"
                    >
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-md group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-500" />
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-lg shadow-primary/20 ring-4 ring-white group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                        <span className="text-sm font-bold text-white">0{i + 1}</span>
                      </div>
                    </motion.div>

                    {/* Content card */}
                    <div className="flex-1 pb-6">
                      <motion.div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ left: '50px', right: 0, top: 0, bottom: '24px' }} />
                      <div className="relative p-5 md:p-6 rounded-2xl bg-white border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500">
                        <div className="absolute inset-0 rounded-2xl bg-primary-50/0 group-hover:bg-primary-50/20 transition-all duration-500" />
                        <div className="relative flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary-600 transition-all duration-500"
                          >
                            <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                          </motion.div>
                          <div>
                            <h4 className="text-[1rem] md:text-[1.05rem] font-heading font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors duration-300">
                              {step.title}
                            </h4>
                            <p className="text-[0.85rem] md:text-[0.9rem] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ==================== BENEFITS OF CHOOSING US ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-blue-50/50 via-indigo-50/20 to-slate-50/40" className="overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute bottom-[15%] left-[3%] w-[200px] h-[200px] bg-accent/[0.03] animate-morph blur-2xl" />

        <div className="relative z-10">
          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              subtitle="Your Advantage"
              title="Benefits of Choosing Us"
              description="Partner with the best to unlock the full potential of your healthcare practice."
            />
          </AnimatedReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-5">
            {benefits.slice(0, 3).map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    className="group relative h-full cursor-default"
                  >
                    <motion.div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6 md:p-7 rounded-2xl bg-white border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl bg-primary-50/0 group-hover:bg-primary-50/30 transition-all duration-500" />
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-[3rem] group-hover:from-primary/[0.08] transition-all duration-500" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary-600 transition-all duration-500"
                          >
                            <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                          </motion.div>
                          <h4 className="text-[1rem] font-heading font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-[0.85rem] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.description }} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
            {benefits.slice(3).map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={i + 3} animation="fadeUp" delay={(i + 3) * 0.08}>
                  <motion.div
                    whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    className="group relative h-full cursor-default"
                  >
                    <motion.div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6 md:p-7 rounded-2xl bg-white border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl bg-primary-50/0 group-hover:bg-primary-50/30 transition-all duration-500" />
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-[3rem] group-hover:from-primary/[0.08] transition-all duration-500" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary-600 transition-all duration-500"
                          >
                            <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                          </motion.div>
                          <h4 className="text-[1rem] font-heading font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-[0.85rem] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.description }} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ==================== WHY WORK WITH US ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-gray-50 via-white to-blue-50/20" className="overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-[10%] w-[300px] h-[300px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
        />

        <div className="relative z-10">
          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              subtitle="Partner With Us"
              title="Why Work With Us"
              description="At Get Credentialing Done LLC, we believe in working with you as a true partner. We take the time to understand exactly what you need and customize our services to fit."
            />
          </AnimatedReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
            {workWithUs.map((item, i) => {
              const Icon = item.icon;
              const gradients = ['from-primary to-primary-600', 'from-accent to-accent-600', 'from-blue-500 to-primary-400', 'from-primary-600 to-accent'];
              const gradient = gradients[i];
              return (
                <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -12, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    className="group relative h-full cursor-default"
                  >
                    <motion.div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative text-center p-7 rounded-2xl bg-white border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl bg-primary-50/0 group-hover:bg-primary-50/30 transition-all duration-500" />
                      <div className="relative">
                        {/* Step number */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 400, delay: 0.2 + i * 0.1 }}
                          className="absolute -top-1 -right-1 w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300"
                        >
                          <span className="text-[0.65rem] font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">0{i + 1}</span>
                        </motion.div>

                        <motion.div
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <h4 className="text-[1.05rem] font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-[0.82rem] text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Additional Services Grid */}
      <SectionWrapper bg="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" className="overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"
        />

        <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 mb-4">
            <span className="w-6 h-[2px] bg-accent-300 rounded-full" />
            Additional Support
            <span className="w-6 h-[2px] bg-accent-300 rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-balance">
            Beyond Credentialing
          </h2>
          <p className="text-blue-100/60 leading-relaxed max-w-xl mx-auto">
            We provide ongoing support to keep your practice running smoothly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {[
            {
              title: 'Re-Credentialing',
              description: 'We track and manage all your re-credentialing deadlines so nothing ever lapses.',
            },
            {
              title: 'CAQH Management',
              description: 'Complete CAQH profile setup, attestation, and ongoing maintenance.',
            },
            {
              title: 'License Monitoring',
              description: 'Proactive monitoring and alerts for license expirations and renewals.',
            },
            {
              title: 'Privilege Delineation',
              description: 'Assistance with hospital privilege applications and renewals.',
            },
            {
              title: 'Provider Data Management',
              description: 'Centralized management of all provider data, documents, and credentials.',
            },
            {
              title: 'Compliance Support',
              description: 'Ensure your practice meets all regulatory and payor compliance requirements.',
            },
          ].map((item, i) => {
            const Icon = additionalIcons[i];
            const isHovered = hoveredCard === i;
            return (
              <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative cursor-pointer h-full"
                >
                  {/* Gradient border on hover */}
                  <motion.div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${cardColors[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative p-8 bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/[0.12] group-hover:border-transparent h-full transition-all duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <motion.div
                        animate={isHovered ? { rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cardColors[i]} flex items-center justify-center mb-5 shadow-lg`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h4 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-accent-200 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-blue-100/50 leading-relaxed group-hover:text-blue-100/70 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            );
          })}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
