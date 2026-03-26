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
      {/* Animated glows — CSS only */}
      <div
        className="absolute -top-20 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl animate-pulse-soft"
        style={{willChange:'opacity'}}
      />
      <div
        className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl animate-pulse-soft"
        style={{animationDelay:'3s',willChange:'opacity'}}
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
    </SectionWrapper>
  );
}
