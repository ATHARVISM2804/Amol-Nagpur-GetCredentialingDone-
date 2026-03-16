import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import { services } from '../data/siteData';
import { HiArrowRight } from 'react-icons/hi2';

function TiltImage({ service, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), { stiffness: 300, damping: 30 });

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const badges = [
    ['Verified', 'bg-emerald-500'],
    ['In Network', 'bg-primary'],
    ['Enrolled', 'bg-accent'],
  ];

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative group cursor-pointer"
    >
      {/* Animated gradient ring */}
      <div className={`absolute -inset-[3px] rounded-3xl bg-gradient-to-br ${
        index === 0 ? 'from-primary via-primary-400 to-accent' :
        index === 1 ? 'from-accent via-accent-400 to-primary' :
        'from-primary-400 via-blue-400 to-accent-400'
      } opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[2px]`} />

      <div className="relative rounded-2xl overflow-hidden shadow-glass ring-1 ring-white/50 bg-white">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: 'translateZ(40px)' }}
        >
          <span className={`px-3 py-1.5 rounded-full text-white text-xs font-bold ${badges[index][1]} shadow-lg backdrop-blur-sm flex items-center gap-1.5`}>
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            {badges[index][0]}
          </span>
        </motion.div>
      </div>

      {/* Reflection glow */}
      <div className={`absolute -bottom-6 left-[10%] right-[10%] h-12 bg-gradient-to-r ${
        index === 0 ? 'from-primary/20 via-primary/10 to-accent/20' :
        index === 1 ? 'from-accent/20 via-accent/10 to-primary/20' :
        'from-primary-400/20 via-blue-400/10 to-accent-400/20'
      } blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    </motion.div>
  );
}

export default function ServicesOverview() {
  const [hoveredBullet, setHoveredBullet] = useState(null);

  return (
    <SectionWrapper id="services-overview" bg="bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/40" className="overflow-hidden">
      {/* Animated mesh gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 -left-20 w-[450px] h-[450px] bg-gradient-to-r from-primary/6 to-accent/4 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-40 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-accent/6 to-primary/4 rounded-full blur-3xl"
      />

      {/* Morphing decorative blob */}
      <div className="absolute top-1/4 right-[5%] w-[200px] h-[200px] bg-gradient-to-br from-primary/[0.04] to-accent/[0.03] animate-morph blur-2xl" />

      <SectionHeading
        subtitle="What We Do"
        title="Credentialing Services Built for You"
        description="We take the complexity out of insurance credentialing so you can focus on what matters most — your patients."
      />

      {/* Step indicator - visual timeline */}
      <div className="hidden lg:flex items-center justify-center gap-0 mb-16 mt-4">
        {services.map((s, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 200 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-bold text-sm shadow-glow">
                {i + 1}
              </div>
              <span className="text-sm font-semibold text-gray-700 max-w-[120px] leading-tight">{s.title.split(' ').slice(0, 2).join(' ')}</span>
            </motion.div>
            {i < services.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                className="w-20 h-[2px] bg-gradient-to-r from-primary/30 to-primary/10 mx-4 origin-left"
              />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-32 mt-8" style={{ perspective: '1000px' }}>
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={service.id}
              className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center"
            >
              {/* Text */}
              <AnimatedReveal
                animation={isReversed ? 'slideRight' : 'slideLeft'}
                className={isReversed ? 'lg:order-2' : ''}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <motion.span
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-heading font-bold text-lg shadow-glow"
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      0{index + 1}
                    </motion.span>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 via-accent/15 to-transparent rounded-full" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.07 }}
                        onMouseEnter={() => setHoveredBullet(`${index}-${i}`)}
                        onMouseLeave={() => setHoveredBullet(null)}
                        className={`flex items-center gap-3 text-sm p-2.5 rounded-xl cursor-default transition-all duration-300 ${
                          hoveredBullet === `${index}-${i}`
                            ? 'bg-primary-50/80 text-primary-700 shadow-sm'
                            : 'text-gray-600'
                        }`}
                      >
                        <motion.span
                          animate={hoveredBullet === `${index}-${i}` ? { scale: 1.3 } : { scale: 1 }}
                          className="shrink-0 flex items-center justify-center w-5 h-5 bg-transparent"
                        >
                          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            hoveredBullet === `${index}-${i}` ? 'bg-primary' : 'bg-accent/60'
                          }`} />
                        </motion.span>
                        <span className="font-medium">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button to="/services" variant="primary" size="sm" icon={<HiArrowRight className="w-4 h-4" />}>
                    Learn More
                  </Button>
                </div>
              </AnimatedReveal>

              {/* Image with 3D tilt */}
              <AnimatedReveal
                animation={isReversed ? 'slideLeft' : 'slideRight'}
                className={isReversed ? 'lg:order-1' : ''}
              >
                <TiltImage service={service} index={index} />
              </AnimatedReveal>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
