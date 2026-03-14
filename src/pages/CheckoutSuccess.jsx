import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { HiOutlineCheckCircle } from 'react-icons/hi2';

export default function CheckoutSuccess() {
  return (
    <>
      <PageHero
        subtitle="Payment Successful"
        title="Thank You!"
        description="Your payment has been processed successfully."
      />

      <SectionWrapper bg="bg-white">
        <div className="max-w-2xl mx-auto text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8"
          >
            <HiOutlineCheckCircle className="w-14 h-14 text-green-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Payment Confirmed
            </h2>
            <p className="text-gray-600 mb-4">
              We have received your payment. Our team will reach out to you shortly to begin the credentialing process.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              A confirmation email has been sent to your email address.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/" variant="primary" size="lg">
                Back to Home
              </Button>
              <Button to="/contact" variant="outlineBlue" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
