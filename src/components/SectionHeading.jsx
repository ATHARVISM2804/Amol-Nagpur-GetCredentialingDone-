import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className={`max-w-2xl mb-16 ${alignment}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 32 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`h-[2px] rounded-full ${light ? 'bg-accent-300' : 'bg-accent'}`}
          />
          <span
            className={`inline-block text-xs font-bold uppercase tracking-[0.2em] ${
              light ? 'text-accent-300' : 'text-accent'
            }`}
          >
            {subtitle}
          </span>
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 32 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`h-[2px] rounded-full ${light ? 'bg-accent-300' : 'bg-accent'}`}
          />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight mb-5 text-balance ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </motion.h2>

      {/* Decorative animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`w-16 h-1 rounded-full mx-auto mb-5 ${
          align === 'center' ? '' : 'ml-0'
        } bg-gradient-to-r ${light ? 'from-accent to-accent/50' : 'from-primary via-accent to-primary'}`}
        style={{ originX: align === 'center' ? 0.5 : 0 }}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto ${
            light ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
