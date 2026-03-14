import { useState } from 'react';
import { HiCheck } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import Button from './Button';
import AnimatedReveal from './AnimatedReveal';
import { redirectToCheckout } from '../utils/stripe';

export default function PricingCard({ plan, index }) {
  const { name, description, price, features, highlighted, priceId } = plan;
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    if (!priceId) return;
    setLoading(true);
    try {
      await redirectToCheckout(priceId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedReveal animation="fadeUp" delay={index * 0.15}>
      <motion.div
        whileHover={{ y: highlighted ? -12 : -8, transition: { type: 'spring', stiffness: 300 } }}
        className={`group relative rounded-3xl h-full flex flex-col transition-all duration-500 cursor-pointer ${
          highlighted ? 'z-10' : ''
        }`}
      >
        {/* Animated gradient border */}
        <motion.div
          className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${
            highlighted
              ? 'from-accent via-accent-400 to-primary opacity-100'
              : 'from-primary via-primary-400 to-accent opacity-0 group-hover:opacity-100'
          } transition-opacity duration-500`}
        />

        {/* Animated glow on hover */}
        <div className={`absolute -inset-3 rounded-[2rem] blur-xl transition-opacity duration-700 ${
          highlighted
            ? 'bg-accent/30 opacity-100 group-hover:opacity-80'
            : 'bg-primary/10 opacity-0 group-hover:opacity-100'
        }`} />

        <div className={`relative rounded-3xl p-8 md:p-10 flex-1 flex flex-col shadow-2xl ${
          highlighted
            ? 'bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white border border-primary-500/30'
            : 'bg-white/95 backdrop-blur-sm text-gray-800 border border-gray-100/50 hover:border-primary/20'
        }`}>
          {highlighted && (
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-600 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-glow-accent"
            >
              Most Popular
            </motion.span>
          )}

          {/* Decorative gradient orbs */}
          {highlighted && (
            <>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
              />
            </>
          )}

          <div className="mb-8 relative">
            <h3 className={`text-xl font-heading font-bold mb-2.5 ${
              highlighted ? 'text-white' : 'text-gray-900 group-hover:text-primary transition-colors duration-300'
            }`}>
              {name}
            </h3>
            <p className={`text-sm leading-relaxed ${
              highlighted ? 'text-blue-100/80' : 'text-gray-500'
            }`}>
              {description}
            </p>
          </div>

          <div className={`mb-8 pb-8 border-b ${highlighted ? 'border-white/10' : 'border-gray-100'}`}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
              className="flex items-baseline gap-1"
            >
              {price.includes(' ') ? (
                <>
                  <span className={`text-4xl lg:text-5xl font-heading font-extrabold tracking-tight ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {price.split(' ')[0]}
                  </span>
                  <span className={`text-sm font-medium ml-1 ${highlighted ? 'text-blue-100/80' : 'text-gray-500'}`}>
                    {price.substring(price.indexOf(' '))}
                  </span>
                </>
              ) : (
                <span className={`text-3xl lg:text-4xl font-heading font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {price}
                </span>
              )}
            </motion.div>
            {plan.pertext && (
               <div className={`text-sm mt-2 ${highlighted ? 'text-blue-100/80' : 'text-gray-500'}`}>
                 {plan.pertext}
               </div>
            )}
            <div className="mt-6">
              {priceId ? (
                <Button
                  variant={highlighted ? 'white' : 'primary'}
                  size="lg"
                  className="w-full"
                  onClick={handleBuyNow}
                  disabled={loading}
                >
                  {loading ? 'Redirecting...' : 'Buy Now'}
                </Button>
              ) : (
                <Button
                  to="/contact"
                  variant={highlighted ? 'white' : 'primary'}
                  size="lg"
                  className="w-full"
                >
                  Contact Us
                </Button>
              )}
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex items-start gap-3"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 shrink-0 ${
                    highlighted ? 'bg-white/15' : 'bg-gradient-to-br from-accent/15 to-accent/5'
                  }`}
                >
                  <HiCheck className={`w-3 h-3 ${highlighted ? 'text-accent-200' : 'text-accent'}`} />
                </motion.span>
                <span className={`text-sm leading-relaxed ${
                  highlighted ? 'text-blue-50' : 'text-gray-600'
                }`}>
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatedReveal>
  );
}
