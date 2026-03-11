import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlinePaperAirplane,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiArrowTopRightOnSquare,
} from 'react-icons/hi2';

const contactInfoColors = [
  'from-primary to-primary-600',
  'from-accent to-accent-600',
  'from-blue-500 to-primary-400',
  'from-primary-600 to-accent',
];

const responseFeatures = [
  { icon: HiOutlineBolt, title: 'Fast Response', desc: 'Within 24 hours', color: 'from-accent to-accent-600', shadow: 'shadow-accent/20' },
  { icon: HiOutlineChatBubbleLeftRight, title: 'Free Consultation', desc: 'No obligation call', color: 'from-primary to-primary-600', shadow: 'shadow-primary/20' },
  { icon: HiOutlineShieldCheck, title: 'Confidential', desc: '100% secure data', color: 'from-blue-500 to-primary-400', shadow: 'shadow-blue-500/20' },
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [hoveredInfo, setHoveredInfo] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. We will be in touch shortly.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 hover:border-gray-300 transition-all duration-300 shadow-sm';

  return (
    <>
      <PageHero
        subtitle="Contact Us"
        title="Let's Get Started"
        description="Have questions or ready to begin? Reach out and our team will respond within one business day."
      />

      {/* Response Features — overlapping cards */}
      <div className="relative z-20 -mt-8 mb-0">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {responseFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400 } }}
                className="group relative"
              >
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100/80 group-hover:border-transparent shadow-card group-hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center shadow-lg ${feat.shadow} shrink-0`}>
                    <feat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{feat.title}</p>
                    <p className="text-xs text-gray-500">{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <SectionWrapper bg="bg-gradient-to-br from-white via-blue-50/20 to-slate-50/30" className="overflow-hidden">
        {/* Decorative blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"
        />

        <div className="grid lg:grid-cols-5 gap-16 relative z-10">
          {/* Form */}
          <AnimatedReveal animation="slideLeft" className="lg:col-span-3">
            <motion.div className="group relative">
              {/* Gradient border on hover */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary via-primary-400 to-accent opacity-0 group-hover:opacity-50 transition-opacity duration-700" />

              <div className="relative p-8 md:p-10 rounded-2xl bg-white border border-gray-100/80 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 400, delay: 0.2 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-lg shadow-primary/20"
                  >
                    <HiOutlinePaperAirplane className="w-4 h-4 text-white -rotate-12" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">Send us a message</h3>
                </div>
                <p className="text-sm text-gray-500 mb-8 ml-[52px]">Fill out the form below and we will get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { label: 'First Name *', name: 'firstName', type: 'text', placeholder: 'Jane', required: true },
                      { label: 'Last Name *', name: 'lastName', type: 'text', placeholder: 'Smith', required: true },
                    ].map((field) => (
                      <motion.div
                        key={field.name}
                        animate={focusedInput === field.name ? { scale: 1.01 } : { scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name] || ''}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          onFocus={() => setFocusedInput(field.name)}
                          onBlur={() => setFocusedInput(null)}
                          className={inputClass}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { label: 'Email *', name: 'email', type: 'email', placeholder: 'jane@practice.com', required: true },
                      { label: 'Phone', name: 'phone', type: 'tel', placeholder: '(555) 123-4567' },
                    ].map((field) => (
                      <motion.div
                        key={field.name}
                        animate={focusedInput === field.name ? { scale: 1.01 } : { scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          onFocus={() => setFocusedInput(field.name)}
                          onBlur={() => setFocusedInput(null)}
                          className={inputClass}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div animate={focusedInput === 'message' ? { scale: 1.01 } : { scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your credentialing needs..."
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      className={`${inputClass} resize-none`}
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </AnimatedReveal>

          {/* Contact Info */}
          <AnimatedReveal animation="slideRight" className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: HiOutlinePhone, label: 'Give us a call', value: 'Toll Free# 866-318-3663' },
                    { icon: HiOutlineEnvelope, label: 'Email us', value: 'info@getcredentialingdone.com' },
                    { icon: HiOutlineMapPin, label: 'Address', value: '8 The Green, Suite# 6882\nDover, DE 19901' },
                    { icon: HiOutlineClock, label: 'Business Hours', value: 'Mon \u2013 Fri: 8:00 AM \u2013 6:00 PM EST\nSat \u2013 Sun: Closed' },
                  ].map((item, i) => {
                    const isHovered = hoveredInfo === i;
                    return (
                      <motion.li
                        key={i}
                        whileHover={{ x: 6, transition: { type: 'spring', stiffness: 300 } }}
                        onMouseEnter={() => setHoveredInfo(i)}
                        onMouseLeave={() => setHoveredInfo(null)}
                        className="group/info relative cursor-pointer"
                      >
                        <motion.div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${contactInfoColors[i]} opacity-0 group-hover/info:opacity-100 transition-opacity duration-500`} />
                        <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100/80 group-hover/info:border-transparent shadow-sm group-hover/info:shadow-card transition-all duration-300">
                          <motion.div
                            animate={isHovered ? { rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.5 }}
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${contactInfoColors[i]} flex items-center justify-center shrink-0 shadow-md`}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover/info:text-primary transition-colors duration-300">{item.label}</p>
                            <p className="text-sm text-gray-500 whitespace-pre-line">{item.value}</p>
                          </div>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Quick-connect CTA card */}
              <AnimatedReveal animation="fadeUp" delay={0.3}>
                <motion.div
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
                    <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl"
                    />
                    <div className="relative z-10">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center mb-4 shadow-lg shadow-accent/30"
                      >
                        <HiOutlinePhone className="w-5 h-5 text-white" />
                      </motion.div>
                      <h4 className="text-lg font-heading font-bold text-white mb-1.5">Prefer to talk?</h4>
                      <p className="text-sm text-blue-100/60 mb-4">Schedule a free 15-minute consultation with our credentialing experts.</p>
                      <a href="tel:8663183663" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-300">
                        <HiOutlinePhone className="w-4 h-4" />
                        Call 866-318-3663
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper bg="bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white" className="overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.04]" />

        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            <span className="w-6 h-[2px] bg-accent rounded-full" />
            Our Location
            <span className="w-6 h-[2px] bg-accent rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-balance">
           Our Office
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We are located at 8 The Green, Suite# 6882, Dover, DE 19901.
          </p>
        </div>

        {/* Map card */}
        <AnimatedReveal animation="fadeUp" className="relative z-10">
          <motion.div
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 200 } }}
            className="group relative max-w-5xl mx-auto"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-primary via-primary-400 to-accent opacity-40 group-hover:opacity-80 transition-opacity duration-700 blur-[1px]" />

            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl">
              {/* Map iframe */}
              <div className="relative h-[380px] md:h-[440px]">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.123456789!2d-75.5243572!3d39.156028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c764a6f0e4e1ed%3A0x8c5e6b4e9f1b1234!2s8%20The%20Green%20Ste%206882%2C%20Dover%2C%20DE%2019901!5e0!3m2!1sen!2sus!4v1709136000000!5m2!1sen!2sus"
                  className="w-full h-full border-0 saturate-[0.85] contrast-[1.05] brightness-[1.02]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Subtle overlay vignette */}
                <div className="absolute inset-0 pointer-events-none rounded-t-3xl ring-1 ring-inset ring-black/5" />

                {/* Floating address card */}
                <div className="absolute top-5 left-5 z-10 hidden sm:block">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="group/card relative"
                  >
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary to-accent opacity-70 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl max-w-[280px]">
                      <div className="flex items-start gap-3">
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary/25"
                        >
                          <HiOutlineMapPin className="w-4 h-4 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-heading font-bold text-gray-900 mb-0.5">Get Credentialing Done</h4>
                          <p className="text-[11px] text-gray-500 leading-relaxed">
                            8 The Green, Suite# 6882<br />Dover, DE 19901
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom card info bar */}
              <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 p-5 md:p-6">
                <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent/15 to-transparent rounded-full blur-3xl"
                />
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                        <HiOutlineMapPin className="w-4 h-4 text-accent-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">8 The Green, Suite# 6882</p>
                        <p className="text-xs text-blue-200/50">Dover, DE 19901</p>
                      </div>
                    </div>
                    <span className="hidden md:block w-px h-8 bg-white/10" />
                    <div className="hidden md:flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                        <HiOutlineClock className="w-4 h-4 text-accent-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Mon - Fri</p>
                        <p className="text-xs text-blue-200/50">8:00 AM - 6:00 PM CST</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//8+The+Green+Ste+6882+Dover+DE+19901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white text-sm font-semibold border border-white/10 hover:border-white/25 transition-all duration-300 shrink-0"
                  >
                    <HiArrowTopRightOnSquare className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedReveal>
      </SectionWrapper>
    </>
  );
}
