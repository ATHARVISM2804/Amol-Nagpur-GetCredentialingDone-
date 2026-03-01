import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-primary-600 text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:from-primary-600 hover:to-primary-700 btn-shine',
  accent:
    'bg-gradient-to-r from-accent to-accent-600 text-white shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:from-accent-600 hover:to-accent-700 btn-shine',
  outlineRed:
    'border-2 border-accent/80 text-accent hover:bg-accent hover:text-white hover:border-accent hover:shadow-md hover:shadow-accent/20',
  outlineBlue:
    'border-2 border-primary/80 text-primary hover:bg-primary hover:text-white hover:border-primary hover:shadow-md hover:shadow-primary/20',
  white:
    'bg-white text-primary shadow-md hover:shadow-lg hover:bg-gray-50',
  ghost:
    'text-primary hover:bg-primary-50',
};

const sizes = {
  sm: 'px-5 py-2 text-sm gap-1.5',
  md: 'px-7 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2';
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  );

  const MotionLink = motion(Link);

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {inner}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {inner}
    </motion.button>
  );
}
