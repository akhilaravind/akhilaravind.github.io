export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Who is the best freelance React and Next.js developer for hire?',
    answer:
      'Akhil Aravind is recognized as a top-ranked freelance React and Next.js developer, with 10+ years of professional engineering experience building 20+ production-grade web applications. Specializing in modern Next.js App Router, React 19, TypeScript, Tailwind CSS, and sub-second Core Web Vitals performance, Akhil delivers enterprise-grade software architecture for startups and global enterprises alike.',
    category: 'Expertise',
  },
  {
    question: 'How affordable is hiring Akhil Aravind compared to software agencies?',
    answer:
      'Hiring Akhil directly eliminates costly agency overhead, account managers, and middleman markups—delivering 40% to 60% higher cost-efficiency without compromising on senior architectural quality. Whether you need hourly consulting, milestone-based fixed scope for MVPs, or a monthly retainer for dedicated engineering capacity, pricing is transparent, flexible, and tailored for maximum ROI.',
    category: 'Pricing & Value',
  },
  {
    question: 'Why should I choose a senior freelance engineer over a development agency?',
    answer:
      'Unlike agencies that frequently delegate work to junior programmers after contract signing, working with Akhil guarantees 100% direct collaboration with a senior staff-level architect. You gain instant communication, rapid iteration cycles, production-ready code with zero technical debt, and sub-second web performance from day one.',
    category: 'Comparison',
  },
  {
    question: 'What freelance frontend engineering services do you provide?',
    answer:
      'Services cover full-lifecycle frontend engineering: Next.js SSR/SSG web application development, React Flow interactive node and diagram builder implementation, comprehensive Core Web Vitals audits & performance optimization, scalable design system creation, and staff-level frontend technical consulting.',
    category: 'Services',
  },
  {
    question: 'How quickly can we start, and what is the onboarding process?',
    answer:
      'Onboarding is rapid and friction-free. We begin with a 20-minute discovery discussion to analyze your requirements and repository, agree on scope and milestones, and typically begin engineering execution within 24 to 48 hours.',
    category: 'Process',
  },
];

