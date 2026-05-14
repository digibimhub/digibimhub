export type RevitAddon = {
  title: string
  overview: string
  features: string[]
  benefits: string[]
}

export const revitAddons: RevitAddon[] = [
  {
    title: 'Smart Sheet & Drawing Automation Add-on',
    overview:
      'Automates sheet creation, view placement, annotations, title blocks, and drawing exports within Autodesk Revit.',
    features: [
      'Bulk sheet creation',
      'Automatic view alignment',
      'Naming standard automation',
      'PDF and DWG export automation',
      'Revision management support',
    ],
    benefits: [
      'Reduces manual drafting time',
      'Maintains project standards',
      'Improves documentation accuracy',
    ],
  },
  {
    title: 'BIM Quantity Takeoff & Estimation Tool',
    overview:
      'A custom Revit add-on that extracts quantities directly from BIM models for faster estimation and BOQ generation.',
    features: [
      'Automatic quantity extraction',
      'Material-wise cost estimation',
      'Excel export integration',
      'Live quantity updates',
      'Custom BOQ templates',
    ],
    benefits: [
      'Saves estimation time',
      'Minimizes manual calculation errors',
      'Improves project budgeting accuracy',
    ],
  },
  {
    title: 'Clash Detection & Coordination Assistant',
    overview:
      'Enhances BIM coordination workflows by identifying model clashes and generating coordination reports.',
    features: [
      'Model validation checks',
      'Clash identification support',
      'Coordination issue tracking',
      'Color-based issue highlighting',
      'Automated coordination reports',
    ],
    benefits: [
      'Reduces construction conflicts',
      'Improves multidisciplinary collaboration',
      'Speeds up coordination reviews',
    ],
  },
  {
    title: 'Revit Family Creation & Library Manager',
    overview: 'Custom solution for managing Revit families, standards, and reusable BIM components.',
    features: [
      'Family parameter standardization',
      'Centralized family library',
      'Version control support',
      'Batch family updates',
      'Search and classification system',
    ],
    benefits: [
      'Maintains BIM standards',
      'Improves modeling consistency',
      'Reduces repetitive work',
    ],
  },
  {
    title: 'BIM Project Health & Audit Tool',
    overview: 'Analyzes Revit project performance, detects modeling issues, and improves file optimization.',
    features: [
      'File performance analysis',
      'Duplicate element detection',
      'Unused family cleanup',
      'Warning analysis dashboard',
      'BIM standard compliance checks',
    ],
    benefits: [
      'Improves Revit model performance',
      'Reduces file corruption risks',
      'Enhances project quality control',
    ],
  },
  {
    title: 'Construction Progress & 4D BIM Add-on',
    overview: 'Connects project schedules with BIM models for visual construction tracking and planning.',
    features: [
      'Construction phase visualization',
      'Schedule integration',
      'Progress tracking dashboard',
      'Task-wise model filtering',
      'Project milestone monitoring',
    ],
    benefits: [
      'Improves construction planning',
      'Enhances project monitoring',
      'Supports better stakeholder communication',
    ],
  },
]

export const customDevelopmentIntro =
  'We also provide custom Autodesk Revit add-on development tailored to your organization workflows and project requirements.'

export const customDevelopmentServices = [
  'Revit API Development',
  'BIM Workflow Automation',
  'Custom Ribbon Tools',
  'Data Extraction & Reporting',
  'ERP / Excel / Cloud Integration',
  'BIM Standards Automation',
  'Revit Plugin Maintenance & Support',
] as const

export const customDevelopmentIdealFor = [
  'Architecture Firms',
  'Construction Companies',
  'BIM Consultants',
  'MEP Contractors',
  'Structural Engineering Teams',
  'Infrastructure Projects',
] as const
