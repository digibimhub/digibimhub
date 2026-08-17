export type RevitAddon = {
  slug: string
  title: string
  tagline: string
  features: string[]
}

export const productName = 'BIM Soft Solutions' as const
export const suiteTagline = 'Automate. Protect. Coordinate.' as const
export const bundleHeadline =
  `One company-wide ${productName} license — unlimited users, all add-ins included` as const
export const supportedRevitVersions = 'R2022–R2026' as const
export const revitUpgradeNote = 'Free upgrade to R2027 included' as const

export const licensingSummary = {
  model: `Company-wide ${productName} license — unlimited users, all add-ins included`,
  revitVersions: `${supportedRevitVersions} · ${revitUpgradeNote}`,
  perUserCostNote: '~$0.25 or 1 AED per user per day (50 users)',
  fees: { AED: 20_000, USD: 5_000, INR: 450_000 } as const,
} as const

export const revitAddons: RevitAddon[] = [
  {
    slug: 'element-protection',
    title: 'Element Protection',
    tagline: 'Password-protected element locking with scope options',
    features: [
      'Password protection — secure elements against unauthorised deletion or modification',
      'Role-based access — control which users can view or edit protected content',
      'Selection-based scope — protect any manually selected group of elements instantly',
      'Sheet-based scope — apply protection to all elements on chosen drawing sheets',
      'Publishing-set scope — lock elements included in a defined publishing set',
    ],
  },
  {
    slug: 'ultimate-protection',
    title: 'Ultimate Protection',
    tagline: 'Role-based model control matrix for BIM teams',
    features: [
      'Role-based control matrix — BIM Manager · Coordinator · Modeler permission tiers',
      'Link & family controls — manage RVT/DWG links and family loading by role',
      'Category & parameter lock — restrict categories and shared parameters per role',
    ],
  },
  {
    slug: 'parameter-transfer',
    title: 'Parameter Transfer',
    tagline: 'Mass-to-MEP parameter automation for QTO',
    features: [
      'WBS-aligned mass model — structure the mass model to reflect work breakdown',
      'MEP discipline integration — link with mechanical, electrical, and plumbing models',
      'Automatic parameter transfer — push values from mass elements to linked MEP components',
      'Consistent QTO — repeatable take-offs across every design revision',
      'Faster workflow — significantly faster than manual parameter entry',
    ],
  },
  {
    slug: 'batch-model-linking',
    title: 'Batch Model Linking',
    tagline: 'Folder-based bulk Revit model linking',
    features: [
      'Folder-based linking — link all Revit models from a folder in one operation',
      '~90% time savings — compared to manual one-by-one linking via Manage Links',
      'Multi-discipline ready — handles large projects with many arch and MEP models',
      'Single batch operation — link an entire model set (arch, structure, MEP) in one click',
      'Fewer setup errors — eliminates manual path entry and naming inconsistencies',
    ],
  },
  {
    slug: 'excel-integration',
    title: 'Excel Integration',
    tagline: 'Export/import model data via Excel & Power BI',
    features: [
      'Flexible export scope — selected elements, whole project, or all linked models',
      'All parameter types — Built-In, Family, and Shared parameters in one export',
      'Power Query ready — clean and transform data directly within Excel',
      'Pivot Tables & Power BI — build live dashboards and project analytics',
      'Revision comparison — compare Tender vs IFC vs WIP quantities',
    ],
  },
  {
    slug: 'mep-hangers',
    title: 'MEP Hangers',
    tagline: 'Automated hanger placement on all MEP services',
    features: [
      'Automated placement — hangers on ducts, pipes, conduits, and cable trays',
      'Family selection — choose family by system type and project requirements',
      'Rod top elevation — align hanger rod tops with structural slab geometry',
      'Size-based spacing — spacing adapts dynamically to MEP element size',
      'Sloped pipe support — automatic adjustment along sloped pipe runs',
    ],
  },
  {
    slug: 'mep-openings',
    title: 'MEP Openings',
    tagline: 'Builderswork void coordination across disciplines',
    features: [
      'Arch/struct openings — detect openings required by linked MEP routing',
      'Builderswork coordination — coordinate voids across arch and structural models',
      'Insert void families — place parametric void families in the host model',
      'Share void model — return the opening model to arch and structural teams',
    ],
  },
]

export const suiteHighlights = [
  `${revitAddons.length} enterprise Revit add-ins in ${productName}`,
  'All add-ins included — no per-seat fees',
  `Autodesk Revit ${supportedRevitVersions}`,
  revitUpgradeNote,
] as const

export const futureDevelopments = [
  'Enhanced protection — more controls for Element & Ultimate Protection',
  'Duplicates removal — detect and delete duplicate system families (cable trays, conduits, ducts, pipes)',
  '3D connectivity analysis — trace MEP connectivity from equipment layout',
  'Sync queue management — queue and prioritise model synchronisation',
  'Bind RVT links — bind links while preserving system connectivity',
  'Levels for families — assign host levels for loadable families in bulk',
  'Connect MEP to systems — auto-connect unassigned elements to correct systems',
] as const

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

export const demoFocusOptions = [
  { value: 'full-suite', label: `${productName} (all ${revitAddons.length} add-ins)` },
  ...revitAddons.map((a) => ({ value: a.slug, label: a.title })),
] as const

/** @deprecated Use demoFocusOptions — kept for any legacy imports */
export const addinOptions = demoFocusOptions

export const interestOptions = [
  { value: 'demo', label: 'Request a demo' },
  { value: 'licensing', label: 'Licensing enquiry' },
  { value: 'custom-dev', label: 'Custom development' },
  { value: 'training', label: 'Training' },
  { value: 'general', label: 'General enquiry' },
] as const

export type InterestValue = (typeof interestOptions)[number]['value']

export function getAddonBySlug(slug: string): RevitAddon | undefined {
  return revitAddons.find((a) => a.slug === slug)
}

export function getProductLabel(product: string): string {
  if (product === 'full-suite') {
    return `${productName} (all ${revitAddons.length} add-ins)`
  }
  return getAddonBySlug(product)?.title ?? product
}

export function formatLicenseFee(amount: number, currency: string): string {
  return currency === 'INR' ? `₹${amount.toLocaleString('en-IN')}` : `${currency} ${amount.toLocaleString('en-US')}`
}
