import { motion } from 'framer-motion';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineCheckBadge } from 'react-icons/hi2';

const trustBadges = [
  { icon: HiOutlineShieldCheck, label: 'HIPAA Compliant' },
  { icon: HiOutlineClock, label: 'Fast Turnaround' },
  { icon: HiOutlineCheckBadge, label: 'Guaranteed Results' },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V40C180 10 360 0 540 20C720 40 900 60 1080 40C1260 20 1380 10 1440 30V80H0Z"
            fill="#064591"
          />
        </svg>
      </div>

      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 pt-20 pb-28 md:pb-32">
        {/* Layered color effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-5" />

        {/* Animated geometric shapes */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[5%] w-20 h-20 border-2 border-white/10 rounded-2xl blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0], rotate: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] right-[8%] w-16 h-16 border-2 border-accent/15 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[40%] right-[20%] w-12 h-12 border border-white/8 rounded-lg"
        />

        {/* Large floating orbs */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-[10%] w-56 h-56 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-[15%] w-64 h-64 bg-accent/8 rounded-full blur-3xl"
        />

        <div className="container-custom text-center relative z-10">
          <AnimatedReveal>
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8 cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-blue-100 text-xs font-semibold tracking-wider uppercase">Limited Availability</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-heading font-bold text-white leading-tight mb-6 text-glow">
              Ready to Simplify Your{' '}
              <br className="hidden sm:block" />
              <span className="relative">
                <span className="text-accent">Credentialing Process?</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </span>
            </h2>
            <p className="text-blue-100/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let our team of experts handle the paperwork so you can focus on
              providing exceptional patient care.
            </p>

            {/* Buttons with enhanced hover */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button to="/contact" variant="accent" size="lg">
                Start Credentialing Today
              </Button>
              <Button to="/pricing" variant="white" size="lg">
                View Pricing
              </Button>
            </div>

            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
            >
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.07] backdrop-blur-sm border border-white/10 cursor-default"
                  >
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-sm text-blue-100 font-medium">{badge.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
