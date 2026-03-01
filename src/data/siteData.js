import {
  HiOutlineUserGroup,
  HiOutlineCog6Tooth,
  HiOutlineFaceSmile,
  HiOutlineEye,
  HiOutlineCurrencyDollar,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export const services = [
  {
    id: 'individual',
    title: 'Individual Provider Credentialing',
    description:
      'We handle the entire credentialing process for individual healthcare providers — from initial applications through approval. Our team ensures every form, document, and follow-up is completed accurately and on time so you can start seeing patients sooner.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    bullets: [
      'CAQH profile setup & maintenance',
      'State license verification',
      'DEA & NPI registration support',
      'Primary source verification',
      'Application tracking & follow-up',
    ],
  },
  {
    id: 'group',
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
    id: 'payor',
    title: 'Payor Enrollment & Network Participation',
    description:
      'Getting enrolled with insurance payors is critical to your revenue. We manage payor enrollment from start to finish including Medicare, Medicaid, and all major commercial insurers — ensuring maximum network participation for your practice.',
    image: 'https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=800&q=80',
    bullets: [
      'Medicare & Medicaid enrollment',
      'Commercial payor applications',
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
    title: 'Great Software',
    description: 'Cutting-edge technology to track every application in real time.',
  },
  {
    icon: HiOutlineFaceSmile,
    title: 'Friendly Service',
    description: 'A team that genuinely cares about your success and satisfaction.',
  },
  {
    icon: HiOutlineEye,
    title: 'Visibility',
    description: 'Full transparency into where every application stands at all times.',
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: 'Transparent Pricing',
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
    description:
      'Navigate the complex Medicare enrollment process with confidence. We handle PECOS enrollment, revalidation, and address changes efficiently.',
  },
  {
    title: 'Medicaid Credentialing',
    description:
      "State-specific Medicaid enrollment managed by experts who understand the nuances of each state's requirements and timelines.",
  },
  {
    title: 'Commercial Credentialing',
    description:
      'Get enrolled with major commercial payors like Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield, and more.',
  },
];

export const testimonials = [
  {
    quote:
      'Get Credentialing Done took the headache out of our enrollment process. We were able to start billing patients weeks earlier than expected.',
    name: 'Dr. Sarah Mitchell',
    role: 'Family Medicine, Texas',
  },
  {
    quote:
      'Their team is incredibly responsive and professional. They kept us in the loop every step of the way with their real-time tracking software.',
    name: 'James Harrington',
    role: 'Practice Manager, Florida',
  },
  {
    quote:
      'We credentialed our entire group of 12 providers through them. The process was seamless and their pricing was exactly as quoted.',
    name: 'Dr. Priya Patel',
    role: 'Internal Medicine Group, California',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Insurance Credentialing in 2026',
    category: 'Credentialing',
    excerpt:
      'Everything healthcare providers need to know about the credentialing process, timelines, and how to avoid common pitfalls.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    date: 'Feb 15, 2026',
  },
  {
    id: 2,
    title: 'Medicare Enrollment Changes You Need to Know',
    category: 'Medicare',
    excerpt:
      "Recent updates to Medicare enrollment requirements and what they mean for your practice's revenue cycle.",
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80',
    date: 'Feb 8, 2026',
  },
  {
    id: 3,
    title: 'How Group Practices Can Streamline Credentialing',
    category: 'Practice Management',
    excerpt:
      'Best practices for multi-provider organizations to reduce credentialing timelines and administrative burden.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80',
    date: 'Jan 28, 2026',
  },
];

export const stats = [
  { value: 1450, label: 'Providers', suffix: '+' },
  { value: 77, label: 'Groups', suffix: '+' },
  { value: 41, label: 'Specialties', suffix: '+' },
];

export const pricingPlans = [
  {
    name: 'Professional',
    description: 'For individual providers getting started with credentialing.',
    price: 'Contact Us',
    features: [
      'Individual provider credentialing',
      'CAQH profile management',
      'Up to 5 payor enrollments',
      'Email support',
      'Monthly status reports',
      'Basic application tracking',
    ],
    highlighted: false,
  },
  {
    name: 'Group',
    description: 'For multi-provider practices needing comprehensive support.',
    price: 'Contact Us',
    features: [
      'Everything in Professional',
      'Group NPI enrollment',
      'Up to 15 payor enrollments',
      'Dedicated account manager',
      'Priority phone support',
      'Real-time tracking dashboard',
      'Re-credentialing management',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex credentialing needs.',
    price: 'Contact Us',
    features: [
      'Everything in Group',
      'Unlimited payor enrollments',
      'Multi-location management',
      'Contract negotiation support',
      'Custom reporting & analytics',
      'SLA-backed support',
      'Dedicated credentialing team',
      'API integration support',
    ],
    highlighted: false,
  },
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
