import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import { blogPosts } from '../data/siteData';
import { HiArrowRight } from 'react-icons/hi2';

export default function BlogPreview() {
  return (
    <SectionWrapper bg="bg-gradient-to-b from-white via-blue-50/30 to-primary-50/20" className="overflow-hidden">
      {/* Animated glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"
      />

      {/* Morphing decorative shape */}
      <div className="absolute bottom-[15%] right-[5%] w-[140px] h-[140px] bg-gradient-to-tl from-blue-200/15 to-primary-200/10 animate-morph blur-xl" />

      <SectionHeading
        subtitle="From Our Blog"
        title="Insights & Resources"
        description="Stay informed with the latest credentialing news, tips, and best practices."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <BlogCard key={post.id} post={post} index={i} />
        ))}
      </div>

      {/* View all link */}
      <AnimatedReveal animation="fadeUp" delay={0.4}>
        <div className="text-center mt-14">
          <Button to="/blog" variant="ghost" size="md" icon={<HiArrowRight className="w-4 h-4" />}>
            View All Articles
          </Button>
        </div>
      </AnimatedReveal>
    </SectionWrapper>
  );
}
