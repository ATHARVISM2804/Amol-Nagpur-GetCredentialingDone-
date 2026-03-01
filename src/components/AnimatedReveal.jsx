import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  fadeIn: {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85, filter: 'blur(6px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -3, y: 30 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
};

export default function AnimatedReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });
  const variant = presets[animation] || presets.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
