import HeroSection from '../sections/HeroSection';
import ServicesOverview from '../sections/ServicesOverview';
import OurServicesGrid from '../sections/OurServicesGrid';
import WhyChooseUs from '../sections/WhyChooseUs';
import ExpertiseSection from '../sections/ExpertiseSection';
import VisionMission from '../sections/VisionMission';
import TestimonialsSection from '../sections/TestimonialsSection';
import BlogPreview from '../sections/BlogPreview';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Get Credentialing Done | Healthcare Credentialing Services" 
        description="Get Credentialing Done - Fast & Easy Insurance Credentialing Services for healthcare providers. We handle Medicare, Medicaid, and Commercial credentialing."
      />
      <HeroSection />
      <ServicesOverview />
      <OurServicesGrid />
      <WhyChooseUs />
      <ExpertiseSection />
      <VisionMission />
      <TestimonialsSection />
      <BlogPreview />
      <StatsSection />
      <CTASection />
    </>
  );
}
