import { motion } from 'framer-motion';
import { HiOutlineCheckCircle, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';

export default function PaymentSuccess() {
  return (
    <>
      <PageHero
        subtitle="Payment Confirmed"
        title="Payment Successful!"
        description="Thank you for choosing Get Credentialing Done. Your payment has been received and our team is ready to get started."
      />

      <SectionWrapper bg="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-slate-50/30">
        <AnimatedReveal animation="fadeUp" className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-400/30"
          >
            <HiOutlineCheckCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            Your Order is Confirmed
          </h2>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">
            A confirmation receipt has been sent to your email. Our credentialing team will reach out to you within <strong className="text-primary">24 hours</strong> to begin the onboarding process.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <HiOutlineEnvelope className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Check Your Email</h4>
                <p className="text-sm text-gray-500">A payment receipt and next-steps guide has been sent to your inbox.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <HiOutlineClock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">What Happens Next?</h4>
                <p className="text-sm text-gray-500">Our team will contact you within 24 hours to collect required documents and begin credentialing.</p>
              </div>
            </div>
          </div>

          <Button to="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </AnimatedReveal>
      </SectionWrapper>
    </>
  );
}
