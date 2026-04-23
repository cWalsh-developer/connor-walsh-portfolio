import { useTranslation } from 'react-i18next'

const educationIds = [
  'msc_ai',
  'bsc_cs',
  'ocr_it_l3',
  'ncfe_employability',
  'ocr_it_l2',
  'customer_service',
  'gcses',
] as const
type EducationId = (typeof educationIds)[number]

const experienceIds = [
  'software_engineer',
  'peer_mentor',
  'dementia_presenter',
  'computer_builder',
  'technology_advisor',
] as const
type ExperienceId = (typeof experienceIds)[number]

const asStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []

export const useCvContent = () => {
  const { t } = useTranslation()

  const education = educationIds.map((educationId: EducationId) => ({
    qualification: t(`cv.education.${educationId}.qualification`),
    institution: t(`cv.education.${educationId}.institution`),
    period: t(`cv.education.${educationId}.period`),
    notes: asStringArray(
      t(`cv.education.${educationId}.notes`, {
        returnObjects: true,
      }),
    ),
  }))

  const experience = experienceIds.map((experienceId: ExperienceId) => ({
    role: t(`cv.experience.${experienceId}.role`),
    organisation: t(`cv.experience.${experienceId}.organisation`),
    period: t(`cv.experience.${experienceId}.period`),
    summary: t(`cv.experience.${experienceId}.summary`),
  }))

  return {
    name: 'Connor Walsh',
    title: t('cv.title'),
    email: 'connor_w_98@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/connorwalsh98/',
    summary: t('cv.summary'),
    profile: t('cv.profile'),
    education,
    experience,
    technicalSkills: asStringArray(
      t('cv.technicalSkills', {
        returnObjects: true,
      }),
    ),
    transferableSkills: asStringArray(
      t('cv.transferableSkills', {
        returnObjects: true,
      }),
    ),
    interests: t('cv.interests'),
  } as const
}
