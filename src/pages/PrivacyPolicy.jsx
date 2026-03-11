import PageHero from '../components/PageHero';
import AnimatedReveal from '../components/AnimatedReveal';

export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHero
                title="Privacy Policy"
                subtitle="Legal"
                description="Last updated: October 2023"
            />

            <section className="py-20">
                <div className="container-custom max-w-4xl">
                    <AnimatedReveal>
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-primary max-w-none">

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">1. Information We Collect</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We collect information that you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include your name, email address, phone number, medical license details, and other information you choose to provide.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We may use the information we collect from you to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>Provide, maintain, and improve our credentialing services.</li>
                                <li>Process transactions and send related information.</li>
                                <li>Send you technical notices, updates, security alerts, and support messages.</li>
                                <li>Respond to your comments, questions, and requests, and provide customer service.</li>
                            </ul>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">3. Sharing of Information</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We do not share your personal information with third parties except as described in this privacy policy or as necessary to provide our credentialing services (e.g., submitting applications to insurance networks on your behalf).
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">4. Security</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. As a partner to healthcare providers, we adhere to high standards of data protection, similar to HIPAA compliance requirements.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">5. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:<br />
                                <a href="mailto:info@getcredentialingdone.com" className="text-primary hover:text-primary-700 underline transition-colors">info@getcredentialingdone.com</a>
                            </p>

                        </div>
                    </AnimatedReveal>
                </div>
            </section>
        </div>
    );
}
