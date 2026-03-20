import PageHero from '../components/PageHero';
import AnimatedReveal from '../components/AnimatedReveal';
import SEO from '../components/SEO';

const tocItems = [
    { id: 'personal-info', label: 'Personal Information We Collect' },
    { id: 'how-we-use', label: 'How Do We Use Your Personal Information?' },
    { id: 'sharing', label: 'Sharing Your Personal Information' },
    { id: 'behavioural', label: 'Behavioural Advertising' },
    { id: 'do-not-track', label: 'Do Not Track' },
    { id: 'your-rights', label: 'Your Rights' },
    { id: 'data-retention', label: 'Data Retention' },
    { id: 'minors', label: 'Minors' },
    { id: 'changes', label: 'Changes' },
    { id: 'contact', label: 'Contact Us' },
];

function SectionCard({ id, number, title, children }) {
    return (
        <div id={id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 px-7 py-4 bg-gray-50/80 border-b border-gray-100">
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-sm">
                    {number}
                </span>
                <h2 className="text-base md:text-lg font-bold font-heading text-gray-900 uppercase tracking-wide">
                    {title}
                </h2>
            </div>
            <div className="px-7 py-6 text-gray-600 leading-relaxed">
                {children}
            </div>
        </div>
    );
}

export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <SEO title="Privacy Policy" description="Privacy Policy and data collection guidelines for Get Credentialing Done LLC." />
            <PageHero
                title="Privacy Policy"
                subtitle="Legal"
                description="Last updated: March 2026"
            />

            <section className="py-20">
                <div className="container-custom max-w-5xl">

                    {/* Intro */}
                    <AnimatedReveal>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-7 py-6 mb-6">
                            <p className="text-gray-600 leading-relaxed">
                                This <span className="font-semibold text-gray-900">Get Credentialing Done LLC</span> Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from{' '}
                                <a href="https://www.getcredentialingdone.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline hover:text-primary-700 transition-colors">
                                    www.getcredentialingdone.com
                                </a>{' '}
                                (Website).
                            </p>
                        </div>
                    </AnimatedReveal>

                    {/* Table of Contents */}
                    <AnimatedReveal delay={0.05}>
                        <div className="bg-primary-900 rounded-2xl px-7 py-6 mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Table of Contents</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                {tocItems.map((item, i) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors group py-0.5"
                                    >
                                        <span className="shrink-0 w-5 h-5 rounded-full bg-white/10 group-hover:bg-primary flex items-center justify-center text-[10px] font-bold text-white transition-colors">
                                            {i + 1}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimatedReveal>

                    {/* Policy Sections */}
                    <div className="space-y-5">

                        <AnimatedReveal delay={0.07}>
                            <SectionCard id="personal-info" number={1} title="Personal Information We Collect">
                                <p className="mb-4">
                                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as{' '}
                                    <span className="font-semibold text-gray-800">"Device Information."</span>
                                </p>

                                <div className="bg-primary-50 border-l-4 border-primary rounded-r-xl p-5 mb-4">
                                    <p className="font-semibold text-primary-900 mb-3 text-sm">We collect Device Information using the following technologies:</p>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-2.5">
                                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            <span><span className="font-semibold text-gray-800">"Log files"</span> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            <span><span className="font-semibold text-gray-800">"Web beacons," "tags," and "pixels"</span> are electronic files used to record information about how you browse the Site.</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="mb-4">
                                    Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, paypal details), email address, and phone number. We refer to this information as{' '}
                                    <span className="font-semibold text-gray-800">"Order Information."</span>
                                </p>
                                <p>
                                    When we talk about <span className="font-semibold text-gray-800">"Personal Information"</span> in this Privacy Policy, we are talking both about Device Information and Order Information.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.09}>
                            <SectionCard id="how-we-use" number={2} title="How Do We Use Your Personal Information?">
                                <p className="mb-4">
                                    We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
                                </p>
                                <ul className="space-y-2.5 mb-4">
                                    {[
                                        'Communicate with you;',
                                        'Screen our orders for potential risk or fraud; and',
                                        'When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm">
                                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>
                                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.11}>
                            <SectionCard id="sharing" number={3} title="Sharing Your Personal Information">
                                <p className="mb-4">
                                    We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the Site — you can read more about how Google uses your Personal Information here:{' '}
                                    <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-700 transition-colors break-all">
                                        https://www.google.com/intl/en/policies/privacy/
                                    </a>. You can also opt-out of Google Analytics.
                                </p>
                                <p>
                                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.13}>
                            <SectionCard id="behavioural" number={4} title="Behavioural Advertising">
                                <p>
                                    As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative's ("NAI") educational page at{' '}
                                    <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-700 transition-colors break-all">
                                        http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
                                    </a>.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.15}>
                            <SectionCard id="do-not-track" number={5} title="Do Not Track">
                                <p>
                                    Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.17}>
                            <SectionCard id="your-rights" number={6} title="Your Rights">
                                <p className="mb-4">
                                    If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                                </p>
                                <p>
                                    Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.19}>
                            <SectionCard id="data-retention" number={7} title="Data Retention">
                                <p>
                                    When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.21}>
                            <SectionCard id="minors" number={8} title="Minors">
                                <p>
                                    The Site is not intended for individuals under the age of 18.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.23}>
                            <SectionCard id="changes" number={9} title="Changes">
                                <p>
                                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                                </p>
                            </SectionCard>
                        </AnimatedReveal>

                        {/* Contact — styled separately */}
                        <AnimatedReveal delay={0.25}>
                            <div id="contact" className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl shadow-md overflow-hidden">
                                <div className="flex items-center gap-4 px-7 py-4 border-b border-white/10">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-sm font-bold">
                                        10
                                    </span>
                                    <h2 className="text-base md:text-lg font-bold font-heading text-white uppercase tracking-wide">
                                        Contact Us
                                    </h2>
                                </div>
                                <div className="px-7 py-6">
                                    <p className="text-white/75 leading-relaxed mb-5">
                                        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please{' '}
                                        <span className="font-semibold text-white">contact us</span> by e-mail at{' '}
                                        <a href="mailto:info@getcredentialingdone.com" className="text-accent underline hover:text-white transition-colors">
                                            info@getcredentialingdone.com
                                        </a>{' '}
                                        or by mail using the details provided below:
                                    </p>
                                    <div className="bg-white/10 border border-white/10 rounded-xl px-5 py-4 flex flex-col sm:flex-row gap-4 text-white/85">
                                        <div className="flex items-start gap-2.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-sm">8 The Green, Suite A, Dover, DE, 19901, United States</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <a href="mailto:info@getcredentialingdone.com" className="text-sm text-accent underline hover:text-white transition-colors">
                                                info@getcredentialingdone.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedReveal>

                    </div>
                </div>
            </section>
        </div>
    );
}
