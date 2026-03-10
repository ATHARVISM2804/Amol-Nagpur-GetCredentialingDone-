import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  HiCheck, HiArrowRight, HiArrowLeft,
  HiOutlineCheckBadge, HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck, HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import CTASection from '../sections/CTASection';
import { servicePages, serviceDropdownLinks } from '../data/siteData';

const whyChooseGradients = [
  'from-primary to-primary-600',
  'from-accent to-accent-600',
  'from-blue-500 to-primary-400',
  'from-primary-600 to-accent',
];

const whyChooseIcons = [
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineCheckBadge,
  HiOutlineClipboardDocumentList,
];

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

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicePages.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = servicePages.findIndex((s) => s.slug === slug);
  const prev = servicePages[currentIndex - 1] || null;
  const next = servicePages[currentIndex + 1] || null;

  return (
    <>
      <PageHero
        badge="Our Services"
        title={service.title}
        subtitle={service.tagline}
      />

      {/* ===== INTRO + IMAGE ===== */}
      <SectionWrapper bg="bg-gradient-to-br from-blue-50/60 via-indigo-50/30 to-sky-50/20" className="overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"
        />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
          {/* Image side with TiltCard */}
          <AnimatedReveal animation="slideRight">
            <TiltCard className="relative group cursor-pointer">
              <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-primary via-primary-400 to-accent opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-[2px]" />
              <div className="relative rounded-2xl overflow-hidden shadow-glass-lg ring-1 ring-white/50 bg-white">
                <img
                  src={service.image}
                  alt={service.title}
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
                  <p className="text-sm font-bold text-gray-900">Expert Team</p>
                  <p className="text-[11px] text-gray-500">Trusted Partner</p>
                </div>
              </motion.div>
            </TiltCard>
          </AnimatedReveal>

          {/* Text side */}
          <AnimatedReveal animation="slideLeft">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              <span className="w-8 h-[2px] bg-accent rounded-full" />
              {service.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              {service.tagline}
            </h2>

            {service.intro ? (
              <div className="space-y-4 text-gray-500 text-[0.935rem] md:text-base leading-relaxed mb-8">
                {service.intro.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-[0.935rem] md:text-base leading-relaxed mb-8">{service.description}</p>
            )}

            <Button to="/contact" variant="primary" size="lg">
              Get Started <HiArrowRight className="w-4 h-4" />
            </Button>
          </AnimatedReveal>
        </div>

        {/* What's Included — full-width card below */}
        <AnimatedReveal animation="fadeUp" delay={0.15}>
          <div className="relative z-10 max-w-5xl mx-auto mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-100/50 shadow-card">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/15">
                <HiOutlineClipboardDocumentList className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-5">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0 mt-0.5">
                        <HiCheck className="w-3 h-3 text-accent" />
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </SectionWrapper>

      {/* ===== SPECIALIZED SERVICES (Medical Billing etc.) ===== */}
      {service.specializedServices && (
        <SectionWrapper bg="bg-gradient-to-tl from-slate-50/60 via-white to-blue-50/30" className="overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
          />
          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              subtitle="What We Offer"
              title="Our Specialized Services"
              description="A complete solution that handles every step, ensuring you meet all requirements and get paid faster."
            />
          </AnimatedReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto relative z-10">
            {service.specializedServices.map((svc, i) => (
              <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative h-full cursor-default"
                >
                  <motion.div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${whyChooseGradients[i % whyChooseGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative text-center p-8 rounded-2xl bg-white border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-primary-50/0 group-hover:bg-primary-50/20 transition-all duration-500" />
                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: 6, scale: 1.1 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${whyChooseGradients[i % whyChooseGradients.length]} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                      >
                        {(() => { const Icon = whyChooseIcons[i % whyChooseIcons.length]; return <Icon className="w-7 h-7 text-white" />; })()}
                      </motion.div>
                      <h4 className="text-lg font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {svc.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ===== WHY CHOOSE US ===== */}
      {service.whyChoose && (
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

          <div className="relative z-10">
            <AnimatedReveal animation="fadeUp">
              <SectionHeading
                light
                subtitle="Our Advantage"
                title={`Why Choose Our ${service.title} Services?`}
                description="By partnering with us, you're not just completing a procedural requirement — you're making a strategic investment in your practice's future."
              />
            </AnimatedReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
              {service.whyChoose.map((item, i) => {
                const Icon = whyChooseIcons[i % whyChooseIcons.length];
                return (
                  <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
                      className="group relative h-full"
                    >
                      <motion.div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${whyChooseGradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative text-center p-7 md:p-8 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] group-hover:bg-white/[0.1] group-hover:border-transparent h-full transition-all duration-500">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="relative">
                          <motion.div
                            whileHover={{ rotate: 6, scale: 1.1 }}
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${whyChooseGradients[i]} flex items-center justify-center mx-auto mb-5 shadow-lg shadow-black/20`}
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
          </div>
        </SectionWrapper>
      )}

      {/* ===== PROCESS STEPS ===== */}
      {service.process && (
        <SectionWrapper bg="bg-gradient-to-tl from-slate-50/60 via-white to-blue-50/30" className="overflow-hidden">
          <div className="absolute top-[15%] right-[5%] w-[200px] h-[200px] bg-gradient-to-br from-primary/[0.04] to-accent/[0.03] blur-2xl" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"
          />

          <AnimatedReveal animation="fadeUp">
            <SectionHeading
              subtitle="Step by Step"
              title="Our Collaborative Credentialing Process"
              description="We take a comprehensive, step-by-step approach to ensure a smooth and efficient experience for your entire team."
            />
          </AnimatedReveal>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-7 max-w-5xl mx-auto relative z-10">
            {service.process.map((step, i) => (
              <AnimatedReveal key={i} animation="fadeUp" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative h-full cursor-default"
                >
                  <motion.div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-7 rounded-2xl bg-white border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-500 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-primary-50/0 group-hover:bg-primary-50/30 transition-all duration-500" />
                    <div className="relative flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center font-bold text-white text-base shrink-0 shadow-lg shadow-accent/20"
                      >
                        {i + 1}
                      </motion.div>
                      <div className="pt-1">
                        <h4 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ===== EXPLORE OTHER SERVICES ===== */}
      <SectionWrapper bg="bg-gradient-to-br from-primary-900 via-[#0a3d7c] to-primary-800" className="overflow-hidden">
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

        <AnimatedReveal animation="fadeUp" className="relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 mb-3">
              <span className="w-6 h-[2px] bg-accent-300 rounded-full" />
              Navigate
              <span className="w-6 h-[2px] bg-accent-300 rounded-full" />
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Explore Other Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {serviceDropdownLinks
              .filter((s) => s.path !== `/services/${slug}`)
              .map((s, i) => (
                <AnimatedReveal key={s.path} animation="fadeUp" delay={i * 0.07}>
                  <motion.div whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}>
                    <Link
                      to={s.path}
                      className="flex items-center justify-between gap-3 p-5 bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/[0.1] hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 group"
                    >
                      <span className="font-semibold text-blue-100/80 group-hover:text-white transition-colors text-sm leading-snug">
                        {s.label}
                      </span>
                      <HiArrowRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  </motion.div>
                </AnimatedReveal>
              ))}
          </div>

          {/* Prev / Next Navigation */}
          <div className="flex justify-between items-center max-w-5xl mx-auto mt-12 pt-8 border-t border-white/10">
            {prev ? (
              <Link
                to={`/services/${prev.slug}`}
                className="flex items-center gap-2 text-sm font-semibold text-blue-100/60 hover:text-white transition-colors"
              >
                <HiArrowLeft className="w-4 h-4" />
                {prev.title}
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/services/${next.slug}`}
                className="flex items-center gap-2 text-sm font-semibold text-blue-100/60 hover:text-white transition-colors"
              >
                {next.title}
                <HiArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </AnimatedReveal>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
