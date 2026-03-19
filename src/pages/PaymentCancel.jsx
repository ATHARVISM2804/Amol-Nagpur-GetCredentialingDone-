import { motion } from 'framer-motion';
import { HiOutlineXCircle } from 'react-icons/hi2';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';

export default function PaymentCancel() {
  return (
    <>
      <PageHero
        subtitle="Payment Cancelled"
        title="Payment Not Completed"
        description="Your payment was not processed. No charges have been made to your account."
      />

      <SectionWrapper bg="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-slate-50/30">
        <AnimatedReveal animation="fadeUp" className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-gray-300/30"
          >
            <HiOutlineXCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            No Worries — You Can Try Again
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Your payment was cancelled and nothing was charged. Head back to our pricing page to choose a plan, or contact us if you have any questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/pricing" variant="primary" size="lg">
              Back to Pricing
            </Button>
            <Button to="/contact" variant="outlineBlue" size="lg">
              Contact Us
            </Button>
          </div>
        </AnimatedReveal>
      </SectionWrapper>
    </>
  );
}
