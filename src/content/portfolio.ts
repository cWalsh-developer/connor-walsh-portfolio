export const portfolio = {
  name: 'Connor Walsh',
  role: 'Frontend Developer',
  badge: 'React / TypeScript / UI Engineering',
  brandStatement: 'Designing and building futuristic web experiences that feel sharp, fast, and intentional.',
  intro:
    'I turn product ideas and interface concepts into polished React builds with strong visual identity, clean structure, and thoughtful motion.',
  summary:
    'My work sits at the intersection of frontend engineering, product thinking, and design implementation, with a focus on experiences that look distinctive without sacrificing clarity or performance.',
  primaryCta: {
    label: 'View Projects',
    href: '#projects',
  },
  secondaryCta: {
    label: 'Get In Touch',
    href: '#contact',
  },
  resume: {
    label: 'Resume',
    href: '#contact',
  },
  contact: {
    email: 'hello@yourdomain.com',
    note: 'Replace the email and social links in src/content/portfolio.ts with your real details before launch.',
    availability: 'Available for freelance work, contract roles, and selected full-time opportunities.',
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/yourusername' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { label: 'X', href: 'https://x.com/yourusername' },
  ],
  skills: [
    {
      category: 'Frontend Systems',
      items: ['React', 'TypeScript', 'Reusable component architecture', 'Responsive UI implementation'],
    },
    {
      category: 'UI Engineering',
      items: ['Design system thinking', 'Animation and interaction polish', 'Accessible interfaces', 'Figma-to-code execution'],
    },
    {
      category: 'Product Delivery',
      items: ['Feature planning', 'Incremental shipping', 'Cross-functional collaboration', 'Performance-minded development'],
    },
    {
      category: 'Backend Familiarity',
      items: ['Node.js', 'REST APIs', 'Auth flows', 'Data integration'],
    },
    {
      category: 'Visual Interests',
      items: ['Futuristic UI direction', 'Editorial layout structure', 'Creative portfolio design', 'Interface storytelling'],
    },
    {
      category: 'Working Style',
      items: ['Clear communication', 'Pragmatic decisions', 'Fast iteration', 'High attention to detail'],
    },
  ],
  projects: [
    {
      title: 'Futuristic Portfolio Experience',
      description:
        'A cinematic personal site concept focused on visual identity, layered gradients, clear navigation, and high-end frontend presentation.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Tailwind', 'Motion'],
      gradient: 'from-cyan-500 to-blue-500',
      liveHref: '#',
      sourceHref: '#',
    },
    {
      title: 'Product Dashboard Concept',
      description:
        'A dashboard interface built around dense information, clear hierarchy, and reusable UI patterns for a modern SaaS workflow.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'Charts', 'Design Systems', 'UX'],
      gradient: 'from-purple-500 to-pink-500',
      liveHref: '#',
      sourceHref: '#',
    },
    {
      title: 'Launch Campaign Microsite',
      description:
        'A marketing-led build designed to communicate a product launch with bold typography, strong pacing, and responsive presentation.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['Frontend', 'Storytelling', 'Responsive Design', 'Performance'],
      gradient: 'from-blue-500 to-violet-500',
      liveHref: '#',
      sourceHref: '#',
    },
  ],
} as const
