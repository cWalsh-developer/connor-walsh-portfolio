import { useTranslation } from 'react-i18next'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/cWalsh-developer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/connorwalsh98/' },
  { label: 'Instagram', href: 'https://www.instagram.com/connorwalsh_98/' },
] as const

const skillIds = ['backend', 'frontend', 'mobile', 'ai', 'workflow'] as const
type SkillId = (typeof skillIds)[number]

const projectConfig = {
  cvbuilder: {
    gradient: 'from-purple-500 to-pink-500',
    image: '/projects/Edit_Referee.png',
    liveHref: 'https://github.com/cWalsh-developer/CV_Builder',
    sourceHref: 'https://github.com/cWalsh-developer/CV_Builder',
  },
  employeeaccess: {
    gradient: 'from-emerald-500 to-cyan-500',
    image: '/projects/cv-recognition.png',
    liveHref: 'https://github.com/CV-Recognition',
    sourceHref: 'https://github.com/CV-Recognition',
  },
  pacbloke: {
    gradient: 'from-blue-500 to-violet-500',
    image: '/projects/Screenshot 2026-04-06 021654.png',
    liveHref: 'https://cwalsh-developer.github.io/ModernPacMan/',
    sourceHref: 'https://github.com/cWalsh-developer/ModernPacMan',
  },
  phunparty: {
    gradient: 'from-cyan-500 to-blue-500',
    image: '/projects/Screenshot 2026-04-06 030949.png',
    liveHref: 'https://phun.party',
    mobileImage: '/projects/PhunParty_Mobile_App.jpg',
    sourceHref: 'https://github.com/cWalsh-developer/PhunParty',
  },
} as const

const projectIds = ['phunparty', 'cvbuilder', 'pacbloke', 'employeeaccess'] as const
type ProjectId = (typeof projectIds)[number]

const asStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []

export const usePortfolioContent = () => {
  const { t } = useTranslation()

  const skills = skillIds.map((skillId: SkillId) => ({
    id: skillId,
    category: t(`portfolio.skills.${skillId}.category`),
    items: asStringArray(
      t(`portfolio.skills.${skillId}.items`, {
        returnObjects: true,
      }),
    ),
  }))

  const projects = projectIds.map((projectId: ProjectId) => ({
    ...projectConfig[projectId],
    description: t(`portfolio.projects.${projectId}.description`),
    tags: asStringArray(
      t(`portfolio.projects.${projectId}.tags`, {
        returnObjects: true,
      }),
    ),
    title: t(`portfolio.projects.${projectId}.title`),
  }))

  return {
    name: 'Connor Walsh',
    role: t('portfolio.role'),
    badge: t('portfolio.badge'),
    brandStatement: t('portfolio.brandStatement'),
    intro: t('portfolio.intro'),
    summary: t('portfolio.summary'),
    primaryCta: {
      label: t('portfolio.primaryCta'),
      href: '#projects',
    },
    secondaryCta: {
      label: t('portfolio.secondaryCta'),
      href: '#contact',
    },
    resume: {
      label: t('navigation.resume'),
      href: '#/cv',
    },
    contact: {
      email: 'connor_w_98@hotmail.com',
      note: t('portfolio.contactNote'),
      availability: t('portfolio.availability'),
    },
    socialLinks,
    skills,
    projects,
  } as const
}
