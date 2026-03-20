import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import PricingCard from '../components/PricingCard';
import CTASection from '../sections/CTASection';
import { pricingPlans, addOnServices } from '../data/siteData';
import AnimatedReveal from '../components/AnimatedReveal';
import { HiChevronDown, HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import SEO from '../components/SEO';

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How long does the credentialing process take?',
      a: 'Credentialing timelines vary by payor, but most applications are completed within 60-90 days. Our streamlined process helps reduce delays significantly.',
    },
    {
      q: 'Do you handle re-credentialing?',
      a: 'Yes! Our Group and Enterprise plans include re-credentialing management. We track all deadlines and handle the paperwork proactively.',
    },
    {
      q: 'Can I upgrade my plan later?',
      a: "Absolutely. You can upgrade at any time as your practice grows. We will ensure a seamless transition with no disruption to your current applications.",
    },
    {
      q: 'What payors do you work with?',
      a: "We work with all major commercial payors, Medicare, Medicaid, and state-specific programs. If there is a specific payor you need, just ask.",
    },
  ];

  return (
    <>
      <SEO 
        title="Pricing Plans"
        description="Transparent and simple pricing packages for our healthcare credentialing and provider enrollment services."
      />
      <PageHero
        subtitle="Pricing"
        title="Transparent, Simple Pricing"
        description="No hidden fees. No surprises. Choose the plan that fits your practice and get started today."
      />

      {/* Pricing Cards */}
      <SectionWrapper bg="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-slate-50/30" className="overflow-hidden">
        {/* Decorative blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 -left-20 w-[350px] h-[350px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch relative z-10 mb-8 mt-12">
          {pricingPlans.slice(0, 3).map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-stretch relative z-10 mb-16">
          {pricingPlans.slice(3, 5).map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i + 3} />
          ))}
        </div>

        {/* Add-on Services Section */}
        <AnimatedReveal animation="fadeUp" className="max-w-5xl mx-auto relative z-10 mt-24">
          <div className="relative group rounded-3xl">
            {/* Animated hover gradient */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-30 group-hover:opacity-60 blur transition-opacity duration-500" />
            
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="text-center mb-10">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                  Additional Options
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-heading text-secondary">
                  Add-On Services
                </h3>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                  Customize your credentialing package with our flexible add-ons to meet your exact organizational needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {addOnServices.map((addon, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-primary/10 transition-all border border-gray-100 relative overflow-hidden group/item"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full -z-10 group-hover/item:scale-150 transition-transform duration-500" />
                    
                    <span className="font-semibold text-gray-800 mb-2 leading-tight pr-4">{addon.name}</span>
                    <div className="flex items-end gap-2 mt-auto">
                      <span className="text-xl font-bold font-heading text-primary">{addon.price.split(' ')[0]}</span>
                      {addon.price.split(' ').length > 1 && (
                        <span className="text-sm font-medium text-gray-500 mb-1">
                          {addon.price.substring(addon.price.indexOf(' '))}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper bg="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" className="overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10" />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"
        />

        <AnimatedReveal animation="fadeUp" className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent/30"
              >
                <HiOutlineQuestionMarkCircle className="w-6 h-6 text-white" />
              </motion.div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 mb-3">
                <span className="w-6 h-[2px] bg-accent-300 rounded-full" />
                FAQ
                <span className="w-6 h-[2px] bg-accent-300 rounded-full" />
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={false}
                    className="group relative"
                  >
                    {/* Gradient border on open */}
                    <motion.div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent to-primary-400 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />

                    <div className="relative rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500"
                      style={{ borderColor: isOpen ? 'transparent' : undefined }}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors"
                      >
                        <h4 className={`text-base font-heading font-semibold pr-4 transition-colors duration-300 ${isOpen ? 'text-accent-200' : 'text-white/90'}`}>
                          {faq.q}
                        </h4>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'bg-accent/30' : 'bg-white/10'
                          }`}
                        >
                          <HiChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-accent-200' : 'text-white/60'}`} />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                          >
                            <p className="px-6 pb-6 text-sm text-blue-100/60 leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedReveal>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
