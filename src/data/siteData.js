import {
  HiOutlineUserGroup,
  HiOutlineCog6Tooth,
  HiOutlineFaceSmile,
  HiOutlineEye,
  HiOutlineCurrencyDollar,
  HiOutlineWrenchScrewdriver,
  HiOutlineIdentification,
  HiOutlineClipboardDocument,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineBuildingOffice2,
  HiOutlineCalculator,
  HiOutlineLink,
} from 'react-icons/hi2';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: true,
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export const serviceDropdownLinks = [
  { label: 'Group Credentialing', path: '/services/group-credentialing', icon: 'HiOutlineUserGroup' },
  { label: 'Individual Provider Credentialing', path: '/services/individual-provider-credentialing', icon: 'HiOutlineIdentification' },
  { label: 'Individual & Group Affiliation', path: '/services/individual-group-affiliation', icon: 'HiOutlineLink' },
  { label: 'Medicare Credentialing', path: '/services/medicare-credentialing', icon: 'HiOutlineHeart' },
  { label: 'Medicaid Credentialing', path: '/services/medicaid-credentialing', icon: 'HiOutlineShieldCheck' },
  { label: 'Commercial Credentialing', path: '/services/commercial-credentialing', icon: 'HiOutlineBuildingOffice2' },
  { label: 'Medical Billing and Coding', path: '/services/medical-billing-coding', icon: 'HiOutlineCalculator' },
];

export const servicePages = [
  {
    slug: 'group-credentialing',
    title: 'Group Credentialing',
    tagline: 'Streamlined credentialing for your entire Practice Group.',
    description: 'Our group credentialing service handles the complete enrollment process for multi-provider practices and healthcare organizations. We manage every payer, every provider, and every document — so your group can see patients and get reimbursed faster.',
    intro: [
      "Group credentialing can be a huge headache, taking up time and pulling you away from patient care. But it doesn't have to be. At Get Credentialing Done, we make it simple, giving you back precious hours in your day.",
      "Our service takes the burden off your shoulders by handling the process from start to finish. We ensure your entire team is credentialed quickly and correctly, which helps you get paid faster and avoid billing delays. By choosing us, you're building a strong and reliable practice, as our service ensures your team's qualifications are fully recognized by both insurance companies and patients.",
    ],
    features: [
      'Credentialing for multiple providers under one group NPI',
      'Payer enrollment for commercial, Medicare & Medicaid',
      'Group NPI registration and maintenance',
      'CAQH profile management for all providers',
      'Primary source verification for each provider',
      'Ongoing re-credentialing and roster updates',
      'Real-time status updates and dedicated support',
    ],
    whyChoose: [
      {
        title: "Boost Your Practice's Revenue",
        description: 'Eliminate delays and missed revenue opportunities from uncredentialed providers. Our efficient process ensures your team gets approved faster, allowing you to submit claims and get reimbursed on time.',
      },
      {
        title: 'Save Time and Reduce Stress',
        description: 'Delegate the intricate paperwork and follow-ups to our dedicated specialists. We handle the details so you and your team can focus on providing exceptional care without administrative burden.',
      },
      {
        title: 'Improve Your Reputation and Credibility',
        description: 'Present a united front of qualified professionals. A fully credentialed team not only meets regulatory standards but also instills confidence and trust in your patients and partners.',
      },
      {
        title: 'Ensure Accuracy and Compliance',
        description: 'Our expert team stays ahead of evolving healthcare regulations. We ensure your documentation is meticulously reviewed and aligns with all regulatory standards, providing you with peace of mind.',
      },
    ],
    process: [
      {
        title: 'Comprehensive Documentation Review',
        description: "We begin with a meticulous review of each team member's credentials, including educational certifications, licensures, and professional references, ensuring every detail is accurate and compliant.",
      },
      {
        title: 'Primary Source Verification',
        description: 'Our team verifies all information directly with the original sources to ensure the highest level of accuracy and integrity.',
      },
      {
        title: 'Application Management',
        description: 'We meticulously complete and submit all necessary applications and follow up proactively to track the status with regulatory boards and insurance payers.',
      },
      {
        title: 'Continuous Updates & Maintenance',
        description: "We don't stop after approval. We work to maintain your credentials and manage updates, ensuring your practice remains compliant and active in all networks.",
      },
    ],
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=900&q=80',
  },
  {
    slug: 'individual-provider-credentialing',
    title: 'Individual Provider Credentialing',
    tagline: 'Get credentialed quickly and start seeing patients sooner.',
    description: 'We handle the entire credentialing process for individual healthcare providers — from initial applications through approval. Our team ensures every form, document, and follow-up is completed accurately and on time.',
    intro: [
      "As an individual healthcare provider in the USA, you know that the path to practice is filled with more than just patient care—it's also packed with complex paperwork. The credentialing and enrollment process can be overwhelming, delaying your ability to see patients and get paid for your services.",
      "At Get Credentialing Done, we specialize in making this process as simple as possible for you. We are your dedicated partner for a reliable credentialing service, handling the time-consuming administrative work so you can focus on building your practice and serving your patients.",
    ],
    features: [
      'CAQH profile setup and quarterly attestation',
      'State medical license verification',
      'DEA and NPI registration support',
      'Primary source verification',
      'Application submission to all requested payers',
      'Follow-up and escalation with payers',
      'Approval confirmation and effective date tracking',
    ],
    whyChoose: [
      {
        title: 'Faster Reimbursement',
        description: 'Time is money. We work efficiently to get your applications approved so you can start receiving payments sooner. Our proactive follow-ups with insurance payers minimize delays and keep your revenue flowing.',
      },
      {
        title: 'Reduced Administrative Burden',
        description: 'Say goodbye to endless paperwork and confusing forms. We manage the entire application process, including initial submissions, renewals, and ongoing maintenance — your single point of contact, saving you hours of frustration.',
      },
      {
        title: 'Maximized Payer Network Participation',
        description: 'We help you get credentialed with the insurance networks that matter most to your practice, ensuring you can serve the patients you want and get reimbursed. We also assist with Medicare, Medicaid, and other government programs.',
      },
      {
        title: 'Guaranteed Accuracy & Compliance',
        description: 'Our experts ensure your applications are completed with meticulous detail to meet the strict standards of all regulatory bodies, including CMS and NCQA, reducing the risk of costly denials and delays.',
      },
      {
        title: 'Proactive Management',
        description: "Credentialing isn't a one-time task. We provide ongoing support, including re-credentialing, re-validation, and CAQH profile maintenance, to make sure your information is always current and compliant.",
      },
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We start with a comprehensive discussion to understand your specific needs, practice goals, and the insurance networks you want to join.',
      },
      {
        title: 'Document Collection',
        description: 'We guide you through the process of gathering all necessary documents and information, from your CV and licenses to malpractice insurance.',
      },
      {
        title: 'Application Preparation & Submission',
        description: 'Our team prepares and submits all applications on your behalf, ensuring they are accurate and complete.',
      },
      {
        title: 'Proactive Follow-up',
        description: 'We handle all communication and follow-up with insurance companies to track your application status and resolve any issues that arise.',
      },
      {
        title: 'Ongoing Maintenance',
        description: 'Once you are credentialed, we continue to manage your profile and ensure you stay compliant, handling re-credentialing and updates as needed.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900&q=80',
  },
  {
    slug: 'individual-group-affiliation',
    title: 'Individual & Group Affiliation',
    tagline: 'Seamlessly link providers to your practice or health system.',
    description: 'We manage the affiliation process that links individual providers to a group, hospital, or health system. Whether adding a new provider to an existing group or establishing a brand new affiliation, we handle every step.',
    intro: [
      "Dealing with all the paperwork for credentialing can be a real pain. It's confusing, takes up a ton of your time, and can stop you from seeing patients and getting paid.",
      "At Get Credentialing Done, we take all that hassle off your plate. We handle everything from start to finish, whether you're working on your own or with a whole team. Our job is to make sure you get approved quickly and correctly so you can focus on what really matters — taking care of people.",
    ],
    features: [
      'Affiliation applications for new and existing providers',
      'Linking individual NPI to group NPI',
      'Hospital and health system privileging support',
      'Payer notification and roster updates',
      'Documentation management for affiliation records',
      'Coordination with billing departments',
      'Follow-up until affiliation is confirmed',
    ],
    whyChoose: [
      {
        title: 'We Fit Your Needs',
        description: "Whether it's just you or a big group, we create a plan that works for you. No one-size-fits-all solutions — every practice is unique and deserves a tailored approach.",
      },
      {
        title: 'Get Paid Faster',
        description: "We know you need to get paid for your work. We push to get your applications approved fast so you can start billing and getting paid without long delays.",
      },
      {
        title: 'No More Paperwork Headaches',
        description: 'Imagine not having to fill out endless forms or spend hours on the phone. We take care of all the boring administrative stuff for you.',
      },
      {
        title: 'Expert Help',
        description: 'We know all the rules and details, so we make sure your application is perfect. This prevents simple mistakes from holding you up.',
      },
    ],
    process: [
      {
        title: 'Quick Chat',
        description: 'We start with a simple talk to figure out exactly what you need.',
      },
      {
        title: 'Gather Your Stuff',
        description: 'We tell you exactly what papers and info we need from you.',
      },
      {
        title: 'We Do the Work',
        description: 'We fill out all the forms and submit them on your behalf.',
      },
      {
        title: 'We Stay on It',
        description: "We'll keep checking in and following up until you're approved.",
      },
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
  },
  {
    slug: 'medicare-credentialing',
    title: 'Medicare Credentialing',
    tagline: 'Navigate Medicare enrollment with expert guidance.',
    description: 'Medicare enrollment involves complex CMS requirements. Our team specializes in Medicare Part A and Part B enrollment, PECOS submissions, and revalidations — ensuring your practice is fully compliant and approved to bill Medicare.',
    intro: [
      "Credentialing with Medicare is a crucial step for any healthcare provider. It's the key that allows you to treat millions of patients and get paid for your services. But we know the process can be confusing and overwhelming, filled with complicated forms and long waiting periods.",
      "At Get Credentialing Done, we make Medicare credentialing simple. We're your dedicated partner, handling all the complex details so you can focus on providing great care without the stress of paperwork. Whether you're a single provider or a large group, we have the expertise to get you approved quickly and correctly.",
    ],
    features: [
      'Medicare Part A and Part B enrollment',
      'PECOS application submission and management',
      'Medicare revalidation (every 5 years)',
      'Opt-out affidavit assistance',
      'Medicare Advantage plan enrollment',
      'CMS compliance review prior to submission',
      'Follow-up with Medicare Administrative Contractors (MACs)',
    ],
    whyChoose: [
      {
        title: "We're Medicare Experts",
        description: "Medicare has its own set of rules and requirements, and we know them inside and out. Our experienced team understands exactly what Medicare wants, which helps us get your application approved without unnecessary delays.",
      },
      {
        title: 'A Perfect Fit for Your Practice',
        description: "We don't use a one-size-fits-all approach. We create a customized plan just for you, whether you're a single provider just starting out or a large group looking to get all your new hires credentialed.",
      },
      {
        title: 'Guaranteed Compliance',
        description: "You can rest easy knowing your application is perfect. We ensure every detail meets Medicare's strict standards. This attention to detail prevents costly mistakes that could lead to denials and audits down the road.",
      },
      {
        title: 'Open Doors to a Huge Patient Base',
        description: 'Becoming a Medicare-credentialed provider allows you to treat a massive population of patients. This is a huge opportunity to grow your practice and help more people in your community.',
      },
      {
        title: 'Look More Trustworthy',
        description: 'Patients often look for providers who accept Medicare. Having this credential shows that you are a reliable, professional, and established provider, which helps build trust and attract new patients.',
      },
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: "We start with a quick chat to understand your practice and figure out exactly what you need. We'll identify any missing information and create a clear plan.",
      },
      {
        title: 'Document Collection',
        description: 'Our team assists you in gathering all the necessary documents for credentialing, including your licenses, certifications, and other professional information.',
      },
      {
        title: 'Application Submission',
        description: 'We prepare and submit a perfect application to Medicare on your behalf. We ensure every form is filled out correctly and completely to avoid any holdups.',
      },
      {
        title: 'Follow-up and Follow-Through',
        description: "We don't just submit and wait. We actively follow up with Medicare to check the status of your application and handle any requests for more information. This proactive approach helps speed up the process.",
      },
      {
        title: 'Final Approval and Enrollment',
        description: 'Once Medicare approves your application, we make sure everything is in place for you to start billing for your services immediately.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80',
  },
  {
    slug: 'medicaid-credentialing',
    title: 'Medicaid Credentialing',
    tagline: 'Enroll with your state Medicaid program — done right.',
    description: 'State Medicaid programs each have unique requirements and timelines. We have extensive experience enrolling providers across multiple states, managing the entire process from application to approval.',
    intro: [
      "Credentialing with Medicaid is a crucial step for any healthcare provider. It opens your doors to a massive patient population and allows you to get paid for your services. But getting through the process can be complex and confusing.",
      "At Get Credentialing Done, we make Medicaid credentialing services simple. We're your dedicated partner, handling all the confusing paperwork and details so you can focus on providing great care to the patients who need it most.",
    ],
    features: [
      'State-specific Medicaid enrollment applications',
      'Managed Medicaid plan enrollment',
      'Provider portal setup and management',
      'Medicaid revalidation management',
      'Multi-state Medicaid enrollment',
      'Coordination with state Medicaid agencies',
      'Compliance checks and document preparation',
    ],
    whyChoose: [
      {
        title: "We're Medicaid Specialists",
        description: "Medicaid has its own unique rules and requirements for credentialing. Our team of specialists knows the system inside and out, which helps us get your application approved without unnecessary delays.",
      },
      {
        title: 'Worry-Free Compliance',
        description: "We handle all the details to make sure your application is perfect and meets all of Medicaid's strict standards. This attention to detail prevents costly mistakes that could lead to denials or delays.",
      },
      {
        title: 'Open the Door to New Patients',
        description: "Being a Medicaid provider allows you to treat a huge population of patients who otherwise couldn't access your services. It's a great way to grow your practice and serve your community.",
      },
      {
        title: 'Get Paid Smoothly',
        description: "Once you're approved, we help ensure your reimbursement process is streamlined. This means you can get paid for the services you provide to Medicaid beneficiaries quickly and efficiently.",
      },
    ],
    process: [
      {
        title: 'Initial Chat',
        description: "We start with a quick conversation to understand your needs and goals. We'll figure out what paperwork is needed and create a plan just for you.",
      },
      {
        title: 'Document Collection',
        description: "We'll guide you in gathering all the necessary documents, such as your licenses and certifications.",
      },
      {
        title: 'Application Submission',
        description: 'We handle the entire application process, making sure every form is filled out correctly before we submit it to Medicaid.',
      },
      {
        title: 'Follow-Up and Approval',
        description: "We don't just submit and wait. We actively follow up with Medicaid to check your application's status and handle any questions that come up until you're approved.",
      },
    ],
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=80',
  },
  {
    slug: 'commercial-credentialing',
    title: 'Commercial Credentialing',
    tagline: 'Enroll with every commercial payer your patients use.',
    description: "Commercial insurance credentialing can be time-consuming and complex. We manage enrollment with all major commercial payers — including BCBS, Aetna, Cigna, UnitedHealthcare, and more — so you don't miss a single reimbursement opportunity.",
    intro: [
      "Being credentialed with commercial insurance companies is a huge step for any healthcare provider. It opens the door to a wider patient base and helps you grow your practice. But we know the process can be complicated and full of paperwork.",
      "At Get Credentialing Done, we make commercial credentialing simple. We're your dedicated partner, handling all the confusing details so you can focus on providing great care and building your business. We help providers — from solo practitioners to large groups — get approved quickly and correctly.",
    ],
    features: [
      'Enrollment with all major commercial insurers',
      'BCBS, Aetna, Cigna, UHC, Humana, and more',
      'Contract review and rate negotiation support',
      'CAQH profile management',
      'Payer portal management and follow-up',
      'Commercial re-credentialing reminders and management',
      'Direct payer calling and escalation handling',
    ],
    whyChoose: [
      {
        title: "We're Commercial Experts",
        description: "We specialize in commercial credentialing, so we know what major insurance companies are looking for. Our team is up-to-date on all the latest rules and requirements, which helps us get your applications approved without unnecessary delays.",
      },
      {
        title: 'A Perfect Fit for Your Practice',
        description: "We don't use a one-size-fits-all approach. We create a custom plan just for you, whether you're a new provider building your network or an established group looking to add new team members.",
      },
      {
        title: 'Guaranteed Accuracy & Compliance',
        description: 'We make sure your application is perfect. Our attention to detail prevents costly mistakes that could lead to denials and long delays.',
      },
      {
        title: 'Open Doors to a Huge Patient Base',
        description: 'Becoming a commercially credentialed provider allows you to treat a massive population of patients who use private insurance. This is a huge opportunity to grow your practice and bring in more revenue.',
      },
      {
        title: 'Look More Trustworthy',
        description: "Patients often look for providers who accept private insurance. Having this credential shows you're a professional and established provider, which helps build trust and attract new clients.",
      },
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: "We begin with a quick talk to understand your needs. We'll find out your current status and create a clear plan.",
      },
      {
        title: 'Document Collection',
        description: 'Our team helps you gather all the required documents for credentialing like your licenses and certifications.',
      },
      {
        title: 'Application Submission',
        description: 'We prepare and submit a perfect application to commercial entities on your behalf. We ensure every form is filled out correctly to avoid any holdups.',
      },
      {
        title: 'Follow-up and Follow-Through',
        description: 'We actively follow up with insurance companies to check the status of your application and handle any requests for more information. This helps speed up the process.',
      },
      {
        title: 'Final Approval and Enrollment',
        description: 'Once your application is approved, we make sure everything is in place for you to start billing for your services immediately.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80',
  },
  {
    slug: 'medical-billing-coding',
    title: 'Medical Billing and Coding',
    tagline: 'Maximize reimbursements with accurate billing and coding.',
    description: 'Our medical billing and coding services ensure your claims are submitted correctly the first time. We reduce denials, speed up reimbursements, and keep your revenue cycle running smoothly.',
    intro: [
      "Dealing with medical billing and coding can be a major headache for any practice. It's a complex, time-consuming process filled with confusing rules and forms. Every mistake can lead to a denied claim, costing your practice time, money, and valuable revenue.",
      "At Get Credentialing Done, we specialize in taking that burden off your shoulders. We're your expert partners in medical billing and coding, helping you get paid quickly and correctly. Our services are designed to simplify your entire business operation, making sure every claim is accurate, compliant, and processed without delay.",
    ],
    features: [
      'Medical coding (ICD-10, CPT, HCPCS)',
      'Claim submission and management',
      'Denial management and appeals',
      'Payment posting and reconciliation',
      'Accounts receivable follow-up',
      'Eligibility verification',
      'Monthly reporting and analytics',
    ],
    specializedServices: [
      {
        title: 'Medical Billing Management',
        description: "Medical billing can be complicated, and small mistakes can lead to big delays. Our experienced team makes sure your billing process is precise and efficient. We handle everything from sending claims to managing any denials, so your practice's finances run smoothly.",
      },
      {
        title: 'Medical Coding Services',
        description: 'Accurate coding is essential for getting paid correctly and following the rules. Our certified coders meticulously assign the correct codes for your medical procedures and diagnoses, ensuring your claims are processed without issues and you get the full reimbursement you deserve.',
      },
      {
        title: 'Revenue Cycle Management',
        description: "We manage your revenue cycle, from a patient's first visit to the final payment. Our team handles everything in between, including claim submissions and payment posting. We prioritize clear communication so you'll always know the status of your claims.",
      },
    ],
    whyChoose: [
      {
        title: 'Expertise and Experience',
        description: 'With years of experience in the healthcare industry, we bring unparalleled expertise to medical billing and coding. Our team is well-versed in the latest coding guidelines and billing practices.',
      },
      {
        title: 'Compliance Assurance',
        description: 'We prioritize compliance with industry regulations, ensuring that your practice adheres to the latest healthcare coding and billing standards. This commitment minimizes the risk of audits and penalties.',
      },
      {
        title: 'Timely Reimbursement',
        description: 'Efficient billing and coding translate to faster reimbursement for your services. Our streamlined processes aim to reduce billing errors and ensure that you receive payments promptly.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80',
  },
];

export const services = [
  {
    id: 'individual',
    link: '/services/individual-provider-credentialing',
    title: 'Individual Provider Credentialing',
    description:
      'We handle the entire credentialing process for individual healthcare providers — from initial applications through approval. Our team ensures every form, document, and follow-up is completed accurately and on time so you can start seeing patients sooner.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    bullets: [
      'CAQH profile setup & maintenance',
      'State license verification',
      'NPI registration support',
      'Primary source verification',
      'Application tracking & follow-up',
    ],
  },
  {
    id: 'group',
    link: '/services/group-credentialing',
    title: 'Group Credentialing',
    description:
      'Our group credentialing services help multi-provider practices and organizations get credentialed efficiently. We coordinate across all providers, manage documentation centrally, and ensure every member of your group is enrolled with the payors you need.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    bullets: [
      'Group NPI & tax ID enrollment',
      'Multi-provider coordination',
      'Practice location management',
      'Centralized documentation',
      'Ongoing re-credentialing support',
    ],
  },
  {
    id: 'payer',
    link: '/services/commercial-credentialing',
    title: 'Insurance Enrollment & Network Participation',
    description:
      'Getting enrolled with insurance payers is critical to your revenue. We manage payer enrollment from start to finish including Medicare, Medicaid, and all major commercial insurers — ensuring maximum network participation for your practice.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    bullets: [
      'Medicare & Medicaid enrollment',
      'Commercial payer applications',
      'Network participation agreements',
      'Contract negotiation support',
      'Re-validation & re-enrollment',
    ],
  },
];

export const whyChooseUs = [
  {
    icon: HiOutlineUserGroup,
    title: 'Dedicated Account Manager',
    description: 'A single point of contact who knows your practice inside and out.',
  },
  {
    icon: HiOutlineCog6Tooth,
    title: 'Great Credentialing Process',
    description: 'Cutting-edge technology to track every application in real time.',
  },
  {
    icon: HiOutlineFaceSmile,
    title: 'High Success Rate',
    description: 'A team that genuinely cares about your success and satisfaction.',
  },
  {
    icon: HiOutlineEye,
    title: 'Transparent Process',
    description: 'Full transparency into where every application stands at all times.',
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: 'Fair Pricing',
    description: 'No hidden fees. You know exactly what you pay and what you get.',
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: 'Ongoing Maintenance',
    description: 'We handle re-credentialing and updates so nothing ever lapses.',
  },
];

export const expertise = [
  {
    title: 'Medicare Credentialing',
    path: '/services/medicare-credentialing',
    description:
      'Navigate the complex Medicare enrollment process with confidence. We handle PECOS enrollment, revalidation, and address changes efficiently.',
  },
  {
    title: 'Medicaid Credentialing',
    path: '/services/medicaid-credentialing',
    description:
      "State-specific Medicaid enrollment managed by experts who understand the nuances of each state's requirements and timelines.",
  },
  {
    title: 'Commercial Credentialing',
    path: '/services/commercial-credentialing',
    description:
      'Get enrolled with major commercial payors like Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield, and more.',
  },
];

export const testimonials = [
  {
    quote:
      'They had great response time. Always respond quickly to emails. I had a bad experience with another company, but Get... View full review',
    name: 'Sheila L.',
    role: '',
    rating: 3
  },
  {
    quote:
      'They have experts and responsive team who knows in and out of credentialing process. Best people to work with for all credentialing and billing related needs.',
    name: 'Rutuja k.',
    role: '',
    rating: 3
  },
  {
    quote:
      "Thank you, Ifeoma! We're thrilled to hear you appreciated our diligent and knowledgeable service. We look forward to continuing to meet your expectations at Get Credentialing Done LLC.",
    name: 'Ifeoma A.',
    role: '',
    rating: 3
  },
  {
    quote:
      "Thank you so much for the positive review, Psychehope! We're glad to hear you found our team knowledgeable and responsive. Your support means a lot to us, and we're here whenever you need us.",
    name: 'Psychehope LLC',
    role: '',
    rating: 3
  },
  {
    quote:
      'My growing private practice has been using Get Credentialing Done for several years now. They are professional, responsive and easy to work with. I cannot recommend them enough!',
    name: 'Hillary W.',
    role: '',
    rating: 3
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'How to Get Credentialed with Medicaid as a Mental Health Provider',
    category: 'Credentialing',
    author: 'Get Credentialing Done',
    comments: 0,
    excerpt: 'Learn the essential steps and requirements for mental health providers to successfully enroll and get credentialed with Medicaid.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    date: '13/03/2026',
  },
  {
    id: 2,
    title: 'Medicare Credentialing Guide for New Providers',
    category: 'Medicare',
    author: 'Get Credentialing Done',
    comments: 0,
    excerpt: 'Detailed guide on Medicare credentialing for new healthcare providers to ensure a smooth enrollment process.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    date: '06/03/2026',
  },
  {
    id: 3,
    title: 'Credentialing Requirements for Physical Therapists & Rehab Clinics',
    category: 'Practice Management',
    author: 'Get Credentialing Done',
    comments: 0,
    excerpt: 'Discover what physical therapists and rehab clinics need to know about the credentialing requirements and compliance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    date: '26/02/2026',
  },
];

export const stats = [
  { value: 2132, label: 'Providers', suffix: '+' },
  { value: 113, label: 'Groups', suffix: '+' },
  { value: 60, label: 'Specialties', suffix: '+' },
];

export const pricingPlans = [
  {
    name: 'Basic Plan',
    description: 'Initial credentialing application submission (includes 3 providers)',
    price: '$300 per payer',
    stripePaymentLink: 'https://buy.stripe.com/test_14AaEXgX3gr2cHab4W5Vu00',
    features: [
      'Initial credentialing application submission',
      'Follow up on application',
      'Approval confirmation',
    ],
    highlighted: false,
  },
  {
    name: 'Professional Plan',
    description: 'Most Popular - Comprehensive support',
    price: '$450 per payer',
    stripePaymentLink: 'https://buy.stripe.com/test_14AaEXgX3gr2cHab4W5Vu00',
    features: [
      'Everything in Basic',
      'Initial credentialing application submission (Includes 1 group, 5 providers)',
      'CAQH management',
      'Weekly status updates',
      'Direct payer calling',
      'Escalation handling',
    ],
    highlighted: true,
  },
  {
    name: 'Premium Plan',
    description: 'Advanced credentialing with priority support',
    price: '$800 per payer',
    stripePaymentLink: 'https://buy.stripe.com/test_14AaEXgX3gr2cHab4W5Vu00',
    features: [
      'Everything in Professional (up to 10 providers)',
      'Credentialing for multiple locations',
      'Contract negotiation support',
      'Retro effective date handling',
      '60-day post-approval monitoring',
      'Priority support and dedicated account manager',
      'Assistance with EDI, EFT, ERA enrollments',
      '3 months Free Billing Services',
    ],
    highlighted: false,
  },
  {
    name: 'Enterprise Package',
    description: 'For Healthcare Groups',
    price: 'Custom pricing',
    pertext: 'based on the number of providers and insurances',
    stripePaymentLink: null,
    features: [
      'Credentialing for healthcare groups or organizations with 10+ providers',
      'Bulk processing of initial and re-credentialing applications',
      'Comprehensive verification of provider information',
      'Enrollment with CAQH and NPI registration',
      'Rate negotiation with insurances',
      'Preparation, submission, and follow-up on all applications',
      'Assistance with enrollment and ongoing compliance',
      'Regular progress reports, audits, and compliance management',
      'Dedicated team support and custom service level agreements (SLAs)',
    ],
    highlighted: false,
  },
  {
    name: 'Monthly Fee',
    description: 'Ongoing maintenance & tracking',
    price: '$200 per provider',
    pertext: 'per payer',
    stripePaymentLink: 'https://buy.stripe.com/test_14AaEXgX3gr2cHab4W5Vu00',
    features: [
      'Credentialing tracking',
      'Re-cred calendar management',
      'CAQH quarterly attestation',
      'New payer additions (3 payers included)',
    ],
    highlighted: false,
  },
];

export const addOnServices = [
  { name: 'Expedited/Urgent Credentialing', price: '$500 per payer' },
  { name: 'Medicare Revalidation', price: '$500' },
  { name: 'Medicaid Revalidation', price: '$500' },
  { name: 'EFT/ERA Enrollment', price: '$200' },
  { name: 'Re-Credentialing Services', price: '$300 per payer' },
  { name: 'Payer Add On', price: '$200 per payer' },
  { name: 'Provider Add On', price: '$200 per provider' },
];

export const coreValues = [
  {
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in everything we do.',
  },
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards of accuracy and quality.',
  },
  {
    title: 'Reliability',
    description: 'We deliver on our promises, every time, without exception.',
  },
  {
    title: 'Innovation',
    description: 'We continuously improve our processes and technology to serve you better.',
  },
];
