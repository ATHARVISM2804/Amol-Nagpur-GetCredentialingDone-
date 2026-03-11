import PageHero from '../components/PageHero';
import AnimatedReveal from '../components/AnimatedReveal';

export default function TermsOfService() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHero
                title="Terms of Service"
                subtitle="Legal"
                description="Last updated: October 2023"
            />

            <section className="py-20">
                <div className="container-custom max-w-4xl">
                    <AnimatedReveal>
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-primary max-w-none">

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                By accessing or using the services provided by Get Credentialing Done ("we", "our", or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">2. Description of Services</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Get Credentialing Done provides healthcare credentialing services, including but not limited to provider enrollment, insurance panel credentialing, re-credentialing, and CAQH profile management. We act as your authorized representative to facilitate the credentialing process with insurance companies and other entities.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">3. User Responsibilities</h2>
                            <p className="text-gray-600 mb-2 leading-relaxed">
                                As a user of our services, you agree to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>Provide accurate, current, and complete information as required for credentialing applications.</li>
                                <li>Promptly update any information that changes during the credentialing process.</li>
                                <li>Respond to requests for additional documentation or information in a timely manner.</li>
                                <li>Not use our services for any unlawful purpose or in violation of any applicable regulations.</li>
                            </ul>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">4. Fees and Payment</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our fees are as outlined on our pricing page or as agreed upon in a separate written agreement. Payment is due as specified in your service agreement. We reserve the right to modify our fees with prior notice.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">5. Limitation of Liability</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Get Credentialing Done shall not be held liable for any delays in credentialing caused by third-party organizations, including insurance companies, hospitals, or government agencies. While we strive for accuracy and efficiency, we cannot guarantee specific outcomes or timelines for credentialing approvals.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">6. Confidentiality</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We are committed to maintaining the confidentiality of all information you provide to us. We will handle your data in accordance with our Privacy Policy and applicable laws, including HIPAA regulations where applicable.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">7. Termination</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Either party may terminate this agreement with written notice. Upon termination, any outstanding fees remain payable. We will provide you with copies of all documentation related to your credentialing applications upon request.
                            </p>

                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">8. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at:<br />
                                <a href="mailto:info@getcredentialingdone.com" className="text-primary hover:text-primary-700 underline transition-colors">info@getcredentialingdone.com</a>
                            </p>

                        </div>
                    </AnimatedReveal>
                </div>
            </section>
        </div>
    );
}
