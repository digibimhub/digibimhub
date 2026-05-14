export type CourseSummary = {
  slug: string
  level: number
  title: string
  duration: string
  tagline: string
}

export type CourseDetail = CourseSummary & {
  levelLabel: string
  placement: string
  focus: string
  stack: string
  idealFor: string
  overview: string
  topics: string[]
  outcomes: string[]
  timeline: { phase: string; title: string; items: string[] }[]
}

export const COURSES: CourseDetail[] = [
  {
    slug: 'bim-foundations-beginner',
    level: 1,
    title: 'BIM Foundations – Beginner Course',
    tagline: 'Fundamentals of BIM, construction workflows, and digital collaboration for newcomers to the industry.',
    duration: 'Flexible duration',
    levelLabel: 'Course 1 · Foundations',
    placement: 'Placement and career guidance available',
    focus: 'Beginner',
    stack: 'Revit · collaboration basics',
    idealFor:
      'Students, freshers, civil engineers, architects, diploma holders, and professionals entering the BIM industry.',
    overview:
      'This course introduces the fundamentals of Building Information Modeling (BIM), construction workflows, and digital project collaboration. Learners will understand how BIM is transforming architecture, engineering, and construction industries.',
    topics: [
      'Introduction to BIM concepts and workflows',
      'Understanding construction drawings',
      'BIM Levels and project lifecycle',
      'Introduction to architectural, structural, and MEP disciplines',
      'BIM standards and coordination basics',
      'Basics of Autodesk Revit interface and modeling',
      'Introduction to project documentation',
      'BIM collaboration concepts',
    ],
    outcomes: [
      'Understand BIM fundamentals and industry practices',
      'Create basic BIM models and documentation',
      'Read and interpret construction drawings',
      'Prepare for advanced BIM specialization courses',
    ],
    timeline: [
      {
        phase: 'Phase 1',
        title: 'BIM context & drawings',
        items: [
          'Introduction to BIM concepts and workflows',
          'Understanding construction drawings',
          'BIM Levels and project lifecycle',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Disciplines & standards',
        items: [
          'Introduction to architectural, structural, and MEP disciplines',
          'BIM standards and coordination basics',
          'Basics of Autodesk Revit interface and modeling',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Documentation & collaboration',
        items: ['Introduction to project documentation', 'BIM collaboration concepts'],
      },
    ],
  },
  {
    slug: 'bim-architectural-modeling',
    level: 2,
    title: 'BIM Architectural Modeling',
    tagline: 'Architectural BIM modeling, layouts, sheets, schedules, and presentation-ready outputs.',
    duration: 'Flexible duration',
    levelLabel: 'Course 2 · Architectural',
    placement: 'Placement and career guidance available',
    focus: 'Intermediate',
    stack: 'Revit · documentation',
    idealFor: 'Architects, interior designers, architectural students, and drafting professionals.',
    overview:
      'This course focuses on architectural BIM modeling using industry-standard tools. Learners will create intelligent building models, architectural layouts, sheets, schedules, and presentation-ready outputs.',
    topics: [
      'Architectural modeling workflows',
      'Walls, doors, windows, floors, ceilings, and roofs',
      'Families and components creation',
      'Room and area management',
      'Annotation and detailing',
      'Sheet creation and documentation',
      'Rendering and visualization basics',
      'Quantity takeoff and schedules',
      'Project templates and standards',
    ],
    outcomes: [
      'Create complete architectural BIM models',
      'Generate drawings and documentation efficiently',
      'Improve design coordination and project visualization',
      'Work on real-world architectural BIM projects',
    ],
    timeline: [
      {
        phase: 'Phase 1',
        title: 'Core architectural modeling',
        items: [
          'Architectural modeling workflows',
          'Walls, doors, windows, floors, ceilings, and roofs',
          'Families and components creation',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Rooms, sheets & detailing',
        items: [
          'Room and area management',
          'Annotation and detailing',
          'Sheet creation and documentation',
          'Rendering and visualization basics',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Outputs & standards',
        items: ['Quantity takeoff and schedules', 'Project templates and standards'],
      },
    ],
  },
  {
    slug: 'bim-structural-modeling',
    level: 3,
    title: 'BIM Structural Modeling',
    tagline: 'Structural BIM workflows for concrete and steel, documentation, and multidisciplinary coordination.',
    duration: 'Flexible duration',
    levelLabel: 'Course 3 · Structural',
    placement: 'Placement and career guidance available',
    focus: 'Intermediate',
    stack: 'Revit · structural',
    idealFor: 'Civil engineers, structural engineers, structural detailers, and construction professionals.',
    overview:
      'This course teaches structural BIM workflows including modeling of concrete and steel structures, reinforcement detailing, and coordination with other disciplines.',
    topics: [
      'Structural BIM fundamentals',
      'Concrete and steel structural modeling',
      'Foundations, beams, columns, slabs, and trusses',
      'Reinforcement detailing basics',
      'Structural documentation and schedules',
      'Clash coordination with architecture and MEP',
      'Structural templates and standards',
      'Model-based quantity estimation',
    ],
    outcomes: [
      'Develop accurate structural BIM models',
      'Produce structural documentation and schedules',
      'Coordinate effectively with multidisciplinary teams',
      'Improve project accuracy and reduce construction errors',
    ],
    timeline: [
      {
        phase: 'Phase 1',
        title: 'Structural fundamentals',
        items: [
          'Structural BIM fundamentals',
          'Concrete and steel structural modeling',
          'Foundations, beams, columns, slabs, and trusses',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Detailing & documentation',
        items: [
          'Reinforcement detailing basics',
          'Structural documentation and schedules',
          'Model-based quantity estimation',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Coordination & standards',
        items: ['Clash coordination with architecture and MEP', 'Structural templates and standards'],
      },
    ],
  },
  {
    slug: 'bim-mep-modeling',
    level: 4,
    title: 'BIM MEP Modeling',
    tagline: 'MEP systems in BIM — HVAC, electrical, plumbing, fire protection, routing, and coordination.',
    duration: 'Flexible duration',
    levelLabel: 'Course 4 · MEP',
    placement: 'Placement and career guidance available',
    focus: 'Intermediate',
    stack: 'Revit MEP · coordination',
    idealFor: 'Mechanical, electrical, plumbing engineers, HVAC professionals, and MEP coordinators.',
    overview:
      'This course covers BIM workflows for MEP systems including HVAC, electrical, plumbing, and fire protection systems. Learners will understand coordination and clash-free system design.',
    topics: [
      'MEP BIM concepts and workflows',
      'HVAC system modeling',
      'Electrical system modeling',
      'Plumbing and fire-fighting systems',
      'Routing and system connections',
      'Clash detection and coordination',
      'MEP documentation and schedules',
      'BIM collaboration for construction projects',
    ],
    outcomes: [
      'Create coordinated MEP BIM models',
      'Perform clash detection and coordination',
      'Generate accurate MEP documentation',
      'Improve construction and installation workflows',
    ],
    timeline: [
      {
        phase: 'Phase 1',
        title: 'MEP concepts & systems',
        items: [
          'MEP BIM concepts and workflows',
          'HVAC system modeling',
          'Electrical system modeling',
          'Plumbing and fire-fighting systems',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Routing & coordination',
        items: ['Routing and system connections', 'Clash detection and coordination'],
      },
      {
        phase: 'Phase 3',
        title: 'Documentation & collaboration',
        items: ['MEP documentation and schedules', 'BIM collaboration for construction projects'],
      },
    ],
  },
  {
    slug: 'bim-coordination-project-management',
    level: 5,
    title: 'BIM Coordination & Project Management',
    tagline: 'Coordination, federation, BEP, CDE, clash management, 4D/5D basics, and delivery workflows.',
    duration: 'Flexible duration',
    levelLabel: 'Course 5 · Coordination',
    placement: 'Placement and career guidance available',
    focus: 'Advanced',
    stack: 'Revit · Navisworks · CDE',
    idealFor: 'Experienced BIM professionals, project managers, coordinators, and construction managers.',
    overview:
      'This advanced course focuses on BIM coordination, project collaboration, clash management, standards implementation, and project delivery workflows.',
    topics: [
      'BIM coordination workflows',
      'Clash detection using Navisworks',
      'Model federation and collaboration',
      'Common Data Environment (CDE)',
      'BIM Execution Plan (BEP)',
      'BIM standards and compliance',
      'Quantity estimation and project tracking',
      'Construction sequencing (4D BIM)',
      'Cost integration basics (5D BIM)',
    ],
    outcomes: [
      'Manage BIM projects effectively',
      'Coordinate multidisciplinary models',
      'Reduce project conflicts and delays',
      'Lead BIM implementation in organizations',
    ],
    timeline: [
      {
        phase: 'Phase 1',
        title: 'Coordination core',
        items: [
          'BIM coordination workflows',
          'Clash detection using Navisworks',
          'Model federation and collaboration',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Standards & environment',
        items: [
          'Common Data Environment (CDE)',
          'BIM Execution Plan (BEP)',
          'BIM standards and compliance',
          'Quantity estimation and project tracking',
        ],
      },
      {
        phase: 'Phase 3',
        title: '4D / 5D & delivery',
        items: ['Construction sequencing (4D BIM)', 'Cost integration basics (5D BIM)'],
      },
    ],
  },
  {
    slug: 'advanced-bim-industry-specialization',
    level: 6,
    title: 'Advanced BIM & Industry Specialization',
    tagline: 'Automation, infrastructure BIM, digital twins, cloud collaboration, and enterprise-level workflows.',
    duration: 'Flexible duration',
    levelLabel: 'Course 6 · Advanced',
    placement: 'Placement and career guidance available',
    focus: 'Advanced',
    stack: 'Revit · Dynamo · cloud',
    idealFor: 'Senior BIM professionals, consultants, and professionals looking for industry specialization.',
    overview:
      'This course provides advanced BIM implementation knowledge including automation, BIM for infrastructure, digital construction technologies, and industry-specific workflows.',
    topics: [
      'Advanced BIM workflows',
      'Dynamo and BIM automation basics',
      'BIM for infrastructure projects',
      'BIM for facility management',
      'Scan to BIM concepts',
      'Digital twins and smart buildings',
      'Cloud collaboration platforms',
      'BIM standards implementation',
      'Real-time project collaboration',
    ],
    outcomes: [
      'Implement advanced BIM solutions',
      'Automate repetitive BIM workflows',
      'Work on infrastructure and enterprise BIM projects',
      'Build expertise for leadership and consulting roles',
    ],
    timeline: [
      {
        phase: 'Phase 1',
        title: 'Advanced workflows & automation',
        items: ['Advanced BIM workflows', 'Dynamo and BIM automation basics', 'BIM standards implementation'],
      },
      {
        phase: 'Phase 2',
        title: 'Infrastructure & lifecycle',
        items: [
          'BIM for infrastructure projects',
          'BIM for facility management',
          'Scan to BIM concepts',
          'Digital twins and smart buildings',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Collaboration at scale',
        items: ['Cloud collaboration platforms', 'Real-time project collaboration'],
      },
    ],
  },
]

export function getCourse(slug: string): CourseDetail | undefined {
  return COURSES.find((c) => c.slug === slug)
}

export function courseSummaries(): CourseSummary[] {
  return COURSES.map(({ slug, level, title, duration, tagline }) => ({
    slug,
    level,
    title,
    duration,
    tagline,
  }))
}
