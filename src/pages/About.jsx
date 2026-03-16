import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import CTASection from '../sections/CTASection';
import {
  HiOutlineBolt,
  HiOutlineEye,
  HiOutlineCheckCircle,
  HiOutlineCheckBadge,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineLockClosed,
  HiOutlineSparkles,
  HiOutlineDocumentCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentList,
  HiOutlineCloudArrowUp,
  HiOutlineArrowPath,
  HiOutlineBellAlert,
  HiOutlineDocumentText,
  HiOutlineCalendarDays,
} from 'react-icons/hi2';

/* ---- Data ---- */
const comprehensiveServices = [
  { text: 'Application preparation and submission to Insurance carriers and networks', icon: HiOutlineDocumentCheck },
  { text: 'Ongoing application status tracking until you are loaded into the carriers databases', icon: HiOutlineArrowTrendingUp },
  { text: 'Regular updates to you and your staff throughout the process', icon: HiOutlineBellAlert },
  { text: 'Secure document management', icon: HiOutlineLockClosed },
  { text: 'Obtaining fee schedules from contracted carriers', icon: HiOutlineDocumentText },
  { text: 'Ongoing Credentialing, Privileging, and Contract Maintenance program (optional)', icon: HiOutlineArrowPath },
];

const leverageBenefits = [
  {
    title: 'Focus on Patient Care',
    description: 'We handle the administrative burden of credentialing, allowing you to focus on what matters most - your patients.',
    icon: HiOutlineUserGroup,
    gradient: 'from-primary to-primary-600',
  },
  {
    title: 'Get In-Network Faster',
    description: 'Our experienced team ensures accurate and complete applications, leading to faster processing and network participation.',
    icon: HiOutlineRocketLaunch,
    gradient: 'from-accent to-accent-600',
  },
  {
    title: 'Maximize Your Revenue',
    description: 'By securing participation in various insurance networks, you can increase your patient base and revenue potential.',
    icon: HiOutlineArrowTrendingUp,
    gradient: 'from-blue-500 to-primary-400',
  },
  {
    title: 'Reduce Administrative Costs',
    description: 'We handle the entire credentialing process, saving you time and valuable resources.',
    icon: HiOutlineCurrencyDollar,
    gradient: 'from-primary-600 to-accent',
  },
];

const whyTrustUs = [
  {
    title: 'Get Credentialed Faster',
    description: 'Our streamlined process ensures rapid enrollment with insurance networks, cutting typical timelines in half.',
    icon: HiOutlineRocketLaunch,
    gradient: 'from-primary to-primary-600',
    highlight: 'bg-primary',
    stat: '2x',
    statLabel: 'Faster',
  },
  {
    title: 'Flat & Fair Pricing',
    description: 'Transparent pricing with no hidden fees or surprise charges. What you see is what you pay.',
    icon: HiOutlineCurrencyDollar,
    gradient: 'from-accent to-accent-600',
    highlight: 'bg-accent',
    stat: '$0',
    statLabel: 'Hidden Fees',
  },
  {
    title: 'Full Transparency',
    description: 'Real-time updates and complete visibility into your credentialing status at every stage.',
    icon: HiOutlineSparkles,
    gradient: 'from-blue-500 to-primary-400',
    highlight: 'bg-blue-500',
    stat: '24/7',
    statLabel: 'Visibility',
  },
  {
    title: 'Keep Records Safe',
    description: 'Enterprise-grade security and encryption to protect all your sensitive documents and data.',
    icon: HiOutlineLockClosed,
    gradient: 'from-primary-600 to-accent',
    highlight: 'bg-primary-600',
    stat: '100%',
    statLabel: 'Secure',
  },
];

const trustBullets = [
  'Knowing the requirements and advising you on how to avoid mistakes and delays.',
  'Referring you to experienced team, credentialing specialist or other help when needed.',
  'Reviewing your documents to make sure they will work the first time.',
  'Letting you know when it makes sense to have your documents expedited.',
  'Avoiding non compliance problems.',
  'Taking care of needs you did not know you had - procedures that must be followed but are not well documented.',
  'Every state has its own laws, requirements and time frames. This means that either you or your provider needs to know how things work in the state where you will be doing practice, and the proper way to proceed.',
];

const testimonial = {
  quote: 'What can I say, I have been in private practice as a Clinical Psychologist for 38 years and have had several billing companies handle my accounts during that time. I wish that I had been working with Amol and John from MedAce Healthcare Solutions for all of those years I would be much wealthier. I have been with them since the beginning of 2019 and my revenue collections have increased dramatically...best they have ever been. Insurance that my previous biller had no idea how to handle, MedAce figured out quickly! They are efficient, thorough, professional, timely, intelligent and simply amazing. They are absolutely the best. Amol and John are awesome, give them a try.',
  author: 'Dr. James',
  role: 'Clinical Psychologist, Virginia',
};

function TiltCard({ children, className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 300, damping: 30 });

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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <PageHero
        subtitle="About Us"
        title="Simplify Your Practice with Our Credentialing Services"
        description="Expert credentialing services to help you navigate the complex process efficiently and effectively."
      />

      {/* ==================== INTRO WITH IMAGE ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-blue-50/60 via-indigo-50/30 to-sky-50/20" className="overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-1/3 left-[5%] w-[150px] h-[150px] bg-accent/[0.03] animate-morph blur-2xl" />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
          {/* Image side */}
          <AnimatedReveal animation="slideRight">
            <TiltCard className="relative group cursor-pointer">
              <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-primary via-primary-400 to-accent opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-[2px]" />
              <div className="relative rounded-2xl overflow-hidden shadow-glass-lg ring-1 ring-white/50 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Healthcare credentialing services"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, -5, 0] }}
                className="absolute -bottom-4 -right-4 px-5 py-3 bg-white rounded-2xl shadow-card-hover border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-lg shadow-primary/20">
                  <HiOutlineCheckBadge className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Since 2018</p>
                  <p className="text-[11px] text-gray-500">Trusted Partner</p>
                </div>
              </motion.div>
            </TiltCard>
          </AnimatedReveal>

          {/* Text side */}
          <AnimatedReveal animation="slideLeft">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                <span className="w-8 h-[2px] bg-accent rounded-full" />
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight text-balance">
                Expert Credentialing Services You Can Rely On
              </h2>
              <div className="space-y-4 text-gray-500 text-[0.935rem] md:text-base leading-relaxed">
                <p>
                 Credentialing services involve credentialing, a process by which insurance carriers, facilities, and hospitals verify that a medical provider meets various quality and regulatory standards. This can be complex and time-consuming, as it entails review of education, medical licenses, state and federal registrations and certifications, professional liability coverage, and other documents.
                </p>
                <p>
                  Our expert{' '}
                  <span className="font-semibold text-primary">Credentailing Service </span>{' '}
                   can help you navigate this complex process efficiently and effectively. We work closely with you to understand your needs and determine which insurance carriers and networks you want to participate with, including{' '}
                  <Link to="/services/medicare-credentialing" className="font-semibold text-primary underline decoration-primary/30 decoration-2 underline-offset-2 hover:decoration-primary/80 transition-all duration-300">Medicare</Link>,{' '}
                  <Link to="/services/medicaid-credentialing" className="font-semibold text-primary underline decoration-primary/30 decoration-2 underline-offset-2 hover:decoration-primary/80 transition-all duration-300">Medicaid</Link>,{' '}
                  <Link to="/services/commercial-credentialing" className="font-semibold text-primary underline decoration-primary/30 decoration-2 underline-offset-2 hover:decoration-primary/80 transition-all duration-300">commercial</Link>{' '}
                  carriers, and workman&#39;s compensation carriers.
                </p>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200/60">
                {[
                  { value: '7+', label: 'Years Experience' },
                  { value: '1450+', label: 'Providers Served' },
                  { value: '99%', label: 'Success Rate' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-heading font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* Second paragraph - full width below  */}
        <AnimatedReveal animation="fadeUp" delay={0.15}>
          <div className="relative z-10 max-w-4xl mx-auto mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-100/50 shadow-card">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/15">
                <HiOutlineClipboardDocumentList className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-4 text-gray-500 text-[0.935rem] md:text-base leading-relaxed">
                <p>
                  By managing the entire credentialing process, we ensure that your applications are submitted accurately and on time, reducing delays and rejections. Additionally, our team stays updated with changing regulations and requirements, giving you peace of mind that your credentialing process is in expert hands.
                </p>
                <p>
                  Through our comprehensive credentialing services, we also help you maintain compliance with ongoing credentialing updates, revalidations, and renewals. This allows you to focus on patient care while we handle the administrative burdens. Our services are designed to <span className="font-medium text-gray-700">streamline operations</span>, <span className="font-medium text-gray-700">increase revenue</span>, and <span className="font-medium text-gray-700">improve your overall practice efficiency</span> by ensuring you are credentialed with the right payers promptly.
                </p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </SectionWrapper>

      {/* ==================== COMPREHENSIVE SERVICES — CARD GRID ==================== */}
      <SectionWrapper bg="bg-gradient-to-tl from-slate-50/60 via-white to-blue-50/30" className="overflow-hidden">
        <div className="absolute top-[15%] right-[5%] w-[200px] h-[200px] bg-gradient-to-br from-primary/[0.04] to-accent/[0.03] animate-morph blur-2xl" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"
        />

        <AnimatedReveal animation="fadeUp">
          <SectionHeading
            subtitle="What We Cover"
            title="Our Comprehensive Credentialing Services Include"
            description="End-to-end support from application to enrollment."
          />
        </AnimatedReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 relative z-10">
          {comprehensiveServices.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative h-full cursor-default"
                >
                  <motion.div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 md:p-7 rounded-2xl bg-white border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-primary-50/0 group-hover:bg-primary-50/30 transition-all duration-500" />
                    <div className="relative flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary-600 transition-all duration-500"
                      >
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                      </motion.div>
                      <p className="text-gray-600 text-[0.9rem] md:text-[0.925rem] leading-relaxed group-hover:text-gray-800 transition-colors duration-300 pt-2.5">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ==================== LEVERAGE BENEFITS — ICON CARDS ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" className="overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary-400/10 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-1/3 right-[8%] w-[160px] h-[160px] bg-white/[0.015] animate-morph blur-2xl" />

        <div className="relative z-10">
          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              light
              subtitle="Your Advantage"
              title="By Leveraging Our Services, You Can"
              description="Unlock the full potential of your practice with our expert support."
            />
          </AnimatedReveal>

          {/* 4-card grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 mb-14">
            {leverageBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
                    className="group relative h-full"
                  >
                    <motion.div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative text-center p-7 md:p-8 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] group-hover:bg-white/[0.1] group-hover:border-transparent h-full transition-all duration-500">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="relative">
                        <motion.div
                          whileHover={{ rotate: 6, scale: 1.1 }}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg shadow-black/20`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h4 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-accent-200 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-sm text-blue-100/55 leading-relaxed group-hover:text-blue-100/80 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              );
            })}
          </div>

          <AnimatedReveal animation="fadeUp" delay={0.4}>
            <p className="text-center text-blue-100/50 text-sm md:text-base max-w-2xl mx-auto">
              Let us help you streamline your practice and maximize your success with our comprehensive{' '}
              <Link
                to="/services"
                className="font-bold text-white underline decoration-accent/50 decoration-2 underline-offset-2 hover:decoration-accent transition-all duration-300"
              >
                Credentialing services
              </Link>.
            </p>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* ==================== TESTIMONIAL ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-gray-50 via-white to-slate-50/40" className="overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-[10%] w-[300px] h-[300px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-[8%] w-[200px] h-[200px] bg-accent/[0.03] rounded-full blur-3xl"
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <AnimatedReveal animation="scale">
            <div className="relative">
              {/* Outer decorative glow */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 blur-xl" />

              <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-100/60 shadow-card-hover">
                {/* Gradient accent top line */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-primary via-primary-400 to-accent" />

                {/* Decorative quote mark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6"
                >
                  <span className="text-3xl font-heading text-primary/60 leading-none mt-1">&#8220;</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-600 text-[0.9rem] md:text-[0.95rem] leading-[1.8] italic mb-8"
                >
                  {testimonial.quote}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-4 pt-6 border-t border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20 ring-4 ring-primary/10">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  {/* Star rating */}
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <motion.svg
                        key={s}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + s * 0.08, type: 'spring', stiffness: 400 }}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* ==================== WHY TRUST US ==================== */}
      <SectionWrapper bg="bg-gradient-to-br from-primary-900 via-[#0a3d7c] to-primary-800" className="overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.07]" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-gradient-to-tl from-primary-400/10 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/[0.02] to-transparent rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[180px] h-[180px] bg-white/[0.015] animate-morph blur-2xl" />

        <div className="relative z-10">
          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              light
              subtitle="Our Promise"
              title="Why Trust Us?"
              description="We stand behind our commitment to excellence with these core principles that set us apart."
            />
          </AnimatedReveal>

          {/* ---- Premium Feature Cards ---- */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-20 relative z-10">
            {whyTrustUs.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeCard === i;
              return (
                <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -12, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    onMouseEnter={() => setActiveCard(i)}
                    onMouseLeave={() => setActiveCard(null)}
                    className="group relative cursor-pointer h-full"
                  >
                    {/* Gradient glow on hover */}
                    <motion.div
                      className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${item.gradient} blur-sm`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 0.6 : 0 }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="relative p-6 md:p-7 rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] group-hover:bg-white/[0.12] group-hover:border-white/[0.2] transition-all duration-500 h-full overflow-hidden">
                      {/* Shimmer sweep */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      </div>

                      {/* Corner accent */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.gradient} opacity-[0.06] group-hover:opacity-[0.12] rounded-bl-[3rem] transition-opacity duration-500`} />

                      <div className="relative">
                        {/* Stat badge */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 300 }}
                          className="absolute -top-1 -right-1 px-2.5 py-1 rounded-lg bg-white/[0.1] border border-white/[0.15] backdrop-blur-sm"
                        >
                          <span className="text-xs font-bold text-white/90">{item.stat}</span>
                          <span className="text-[9px] text-white/50 block leading-tight">{item.statLabel}</span>
                        </motion.div>

                        {/* Icon with ring */}
                        <motion.div
                          animate={isActive ? { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] } : {}}
                          transition={{ duration: 0.6 }}
                          className="relative mb-5"
                        >
                          <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500`} />
                          <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg shadow-black/20 ring-1 ring-white/[0.15]`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </motion.div>

                        <h4 className="text-[1.05rem] font-heading font-bold text-white mb-2 group-hover:text-accent-200 transition-colors duration-300">
                          {item.title}
                        </h4>

                        {/* Accent line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
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

          {/* ---- Numbered Trust Commitments ---- */}
          <AnimatedReveal animation="fadeUp" delay={0.15}>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300/80">
                  <span className="w-8 h-[2px] bg-accent-400/40 rounded-full" />
                  Our Commitments
                  <span className="w-8 h-[2px] bg-accent-400/40 rounded-full" />
                </span>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                {trustBullets.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ scale: 1.02, x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    className="group relative cursor-default"
                  >
                    {/* Hover glow */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary-400/0 via-accent/0 to-primary-400/0 group-hover:from-primary-400/30 group-hover:via-accent/20 group-hover:to-primary-400/30 blur-[1px] transition-all duration-500" />

                    <div className="relative flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] group-hover:bg-white/[0.08] group-hover:border-white/[0.12] transition-all duration-500">
                      {/* Step number */}
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/15 group-hover:border-accent/25 transition-all duration-400">
                        <span className="text-[0.7rem] font-bold text-accent-300/90 group-hover:text-accent-200 transition-colors duration-300">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <span className="text-blue-100/50 text-[0.85rem] md:text-[0.88rem] leading-relaxed group-hover:text-blue-100/80 transition-colors duration-300 pt-1.5">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* ==================== CTA ==================== */}
      <CTASection />
    </>
  );
}
