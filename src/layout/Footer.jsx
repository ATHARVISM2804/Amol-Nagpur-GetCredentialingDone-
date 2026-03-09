import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../data/siteData';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiArrowUpRight,
  HiOutlineShieldCheck,
  HiOutlineCheckBadge,
  HiOutlineClock,
  HiArrowUp,
} from 'react-icons/hi2';

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  )},
  { label: 'Facebook', href: '#', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
  )},
  { label: 'Twitter', href: '#', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
];

const trustBadges = [
  { icon: HiOutlineShieldCheck, label: 'HIPAA Compliant' },
  { icon: HiOutlineCheckBadge, label: 'Verified Provider' },
  { icon: HiOutlineClock, label: '24/7 Support' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-300">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-primary/[0.04] to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[5%] w-[350px] h-[350px] bg-gradient-to-tr from-accent/[0.03] to-transparent rounded-full blur-3xl"
      />

      {/* Newsletter / CTA strip */}
      <div className="container-custom relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 bg-gradient-to-r from-primary-800 via-primary to-primary-700 rounded-2xl p-8 md:p-10 shadow-2xl shadow-primary/20 border border-white/10 overflow-hidden group"
        >
          {/* Inner decorative blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl" />
          {/* Morphing accent shape */}
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-32 h-32 bg-accent/10 animate-morph blur-2xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 text-glow">
                Stay Updated on Credentialing
              </h3>
              <p className="text-blue-100/80 text-sm max-w-md">
                Get the latest updates, tips, and industry insights delivered straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <HiOutlineEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-72 pl-11 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white placeholder:text-blue-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-gradient-to-r from-accent to-accent-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 whitespace-nowrap btn-shine"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-custom relative z-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          {/* Brand — wider column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center mb-5 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1772874370/logo-transparent_jzzdlr.png"
                  alt="Get Credentialing Done"
                  className="h-20 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-xs">
              Empowering healthcare providers to focus on patient care while we
              handle credentialing with speed, accuracy, and transparency.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] text-gray-400 font-medium"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent/80" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-semibold text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-accent/40 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group/link text-sm text-gray-400 hover:text-white inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="w-0 group-hover/link:w-2 h-[2px] bg-accent rounded-full transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-semibold text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-accent/40 rounded-full" />
              Services
            </h4>
            <ul className="space-y-3.5">
              {['Individual Credentialing', 'Group Credentialing', 'Payor Enrollment', 'Medicare & Medicaid', 'CAQH Management', 'Re-Credentialing'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group/link text-sm text-gray-400 hover:text-white inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="w-0 group-hover/link:w-2 h-[2px] bg-accent rounded-full transition-all duration-300" />
                    {service}
                    <HiArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-semibold text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-accent/40 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: HiOutlinePhone, text: 'Toll Free# 866-318-3663', href: 'tel:8663183663' },
                { icon: HiOutlineEnvelope, text: 'info@getcredentialingdone.com', href: 'mailto:info@getcredentialingdone.com' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="group/contact flex items-center gap-3 hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover/contact:from-accent/20 group-hover/contact:to-accent/10 group-hover/contact:border-accent/20 transition-all duration-300">
                        <Icon className="w-4 h-4 text-accent/80 group-hover/contact:text-accent transition-colors duration-300" />
                      </div>
                      <span className="text-sm text-gray-400 group-hover/contact:text-white transition-colors duration-300">{item.text}</span>
                    </a>
                  </li>
                );
              })}
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <HiOutlineMapPin className="w-4 h-4 text-accent/80" />
                </div>
                <span className="text-sm text-gray-400">
                  8 The Green Suite 6882
                  <br />
                  Dover, DE 19901
                </span>
              </li>
            </ul>

            {/* Office hours */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <p className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1.5">
                <HiOutlineClock className="w-3.5 h-3.5 text-accent/80" />
                Office Hours
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Mon - Fri: 8:00 AM - 6:00 PM CST<br />
                Sat - Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Get Credentialing Done. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-white transition-colors duration-300 relative group/legal">
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover/legal:w-full h-[1px] bg-accent/50 transition-all duration-300 rounded-full" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300 relative group/legal">
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover/legal:w-full h-[1px] bg-accent/50 transition-all duration-300 rounded-full" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300 relative group/legal">
                HIPAA Compliance
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover/legal:w-full h-[1px] bg-accent/50 transition-all duration-300 rounded-full" />
              </a>
            </div>
            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <HiArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
