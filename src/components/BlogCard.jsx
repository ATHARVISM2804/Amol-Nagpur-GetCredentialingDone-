import { motion } from 'framer-motion';
import AnimatedReveal from './AnimatedReveal';
import { HiOutlineClock, HiArrowUpRight } from 'react-icons/hi2';

const categoryColors = {
  Credentialing: 'bg-primary text-white',
  Medicare: 'bg-accent text-white',
  'Practice Management': 'bg-blue-500 text-white',
};

export default function BlogCard({ post, index }) {
  return (
    <AnimatedReveal animation="fadeUp" delay={index * 0.12}>
      <motion.article
        className="group cursor-pointer h-full"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      >
        {/* Animated gradient border on hover */}
        <div className="relative h-full rounded-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-500 border border-gray-100/50 group-hover:border-transparent">
          {/* Image section */}
          <div className="relative overflow-hidden aspect-[16/10]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Multi-layer overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Category badge */}
            <span className={`absolute top-4 left-4 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ${
              categoryColors[post.category] || 'bg-primary text-white'
            }`}>
              {post.category}
            </span>

            {/* Reading time badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-sm"
            >
              <HiOutlineClock className="w-3.5 h-3.5" />
              5 min read
            </motion.div>

            {/* Hover arrow button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg"
            >
              <HiArrowUpRight className="w-4 h-4 text-primary" />
            </motion.div>
          </div>

          {/* Content section */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-accent/40 rounded-full" />
              <span className="text-xs text-gray-400 font-medium tracking-wide">{post.date}</span>
            </div>
            <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>

            {/* Animated read more */}
            <motion.div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="relative">
                Read more
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
              </span>
              <motion.svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.div>
          </div>
          </div>
        </div>
      </motion.article>
    </AnimatedReveal>
  );
}
