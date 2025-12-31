
import React from 'react';
import { NavItem, Package, ServiceItem, PainPoint } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'What We Fix', path: '/what-we-fix' },
  { label: 'How We Work', path: '/how-we-work' },
  { label: 'Packages & Services', path: '/packages' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const PROBLEM_GRID = [
  { title: 'Ops & SOPs', icon: 'fa-clipboard-list', desc: 'Standardizing workflows to eliminate variance and clinician burnout.' },
  { title: 'HIPAA & Compliance', icon: 'fa-shield-medical', desc: 'Rigorous audit-readiness and technical safeguard implementation.' },
  { title: 'Revenue Cycle', icon: 'fa-chart-line', desc: 'Capturing every dollar through better coding and billing governance.' },
  { title: 'EHR Optimization', icon: 'fa-laptop-medical', desc: 'Aligning technology with clinical reality, not against it.' },
  { title: 'VBC & MIPS', icon: 'fa-award', desc: 'Maximizing quality scores and navigating Value-Based Care contracts.' },
  { title: 'Vendor Governance', icon: 'fa-handshake', desc: 'Ensuring your 3rd-party partners deliver the value promised.' },
];

export const HOW_WE_WORK_STEPS = [
  { step: '01', title: 'Discover', desc: 'Rapid data-driven scan of existing systems and culture.' },
  { step: '02', title: 'Assess', desc: 'Gap analysis against regulatory and industry benchmarks.' },
  { step: '03', title: 'Remediate', desc: 'Hands-on correction of compliance and revenue leaks.' },
  { step: '04', title: 'Govern', desc: 'Sustainable monitoring to prevent future regression.' },
];

export const PAIN_POINTS: PainPoint[] = [
  { 
    title: 'Revenue Integrity', 
    symptom: 'High claim denial rates and "missing" charges.', 
    rootCause: 'Lack of front-end eligibility verification SOPs and RCM audit discipline.', 
    solution: 'Revenue Governance Framework' 
  },
  { 
    title: 'Operational Continuity', 
    symptom: 'Staff turnover leading to chaotic training cycles.', 
    rootCause: 'Missing "Clinic Playbook" and standardized onboarding/offboarding workflows.', 
    solution: 'Standardized Clinic Playbook' 
  },
  { 
    title: 'Clinical Workflow', 
    symptom: 'EHR feels like a "data entry burden" rather than a tool.', 
    rootCause: 'System misalignment; templates and reporting aren\'t optimized for clinical flow.', 
    solution: 'EHR Alignment Strategy' 
  },
  { 
    title: 'Compliance Risk', 
    symptom: 'Anxiety over an upcoming HIPAA audit or breach.', 
    rootCause: 'Lack of evidence-based governance and "breach-prone" manual habits.', 
    solution: 'HIPAA Evidence Packs' 
  },
  { 
    title: 'Cyber Governance', 
    symptom: '"IT" only fixes printers but doesn\'t protect the business.', 
    rootCause: 'Misunderstanding of IT as "utility" rather than "risk management and governance."', 
    solution: 'Cyber Risk Oversight' 
  },
  { 
    title: 'Admin Overload', 
    symptom: 'Physician owners working 60+ hours on administrative tasks.', 
    rootCause: 'Lack of vendor control and delegated governance structures.', 
    solution: 'Fractional Admin Leadership' 
  },
];

export const PACKAGES: Package[] = [
  {
    id: 'stabilize',
    name: 'STABILIZE',
    level: 'Stabilize',
    bestFor: 'Clinics in "firefighting" mode with high staff turnover or immediate compliance gaps.',
    outcome: 'Established "Clinic Playbook" (SOPs), fixed immediate HIPAA vulnerabilities, and stabilized clinical workflows.',
    timeline: '4–6 weeks for assessment and initial remediation.',
    description: 'Rapid health check and foundational risk mitigation.',
    pricing: 'Projects starting at $5,000',
    deliverables: ['Rapid Health Check Report', '3-5 core SOPs', 'Audit-Readiness Checklist'],
  },
  {
    id: 'optimize',
    name: 'OPTIMIZE',
    level: 'Optimize',
    bestFor: 'Established clinics seeing "revenue leaks" or documentation burnout.',
    outcome: 'Targeted -15% reduction in initial claim denials and increased provider productivity.',
    timeline: '8–12 weeks of EHR optimization and RCM audit discipline.',
    description: 'Operational efficiency and revenue cycle performance tuning.',
    pricing: 'Engagements starting at $10,000',
    deliverables: ['PowerBI Revenue Dashboard', 'EMR Template Optimization', 'Payer Contract Review'],
  },
  {
    id: 'scale',
    name: 'SCALE',
    level: 'Scale',
    bestFor: 'Multi-provider groups or those preparing for sale/acquisition in the Tampa Bay market.',
    outcome: 'Full 2025 MIPS/VBC readiness, vendor consolidation, and sustainable owner-independent governance.',
    timeline: 'Ongoing (6+ month engagement).',
    description: 'Enterprise-grade governance and strategic oversight.',
    pricing: 'Retainers starting at $2,500/month',
    deliverables: ['Monthly Governance Oversight', 'Vendor SLA Management', 'Quarterly Financial Modeling'],
  },
];

export const SERVICE_LIBRARY: ServiceItem[] = [
  { code: 'A', category: 'Assess', title: 'Compliance Gap Audit', description: 'Technical and administrative HIPAA assessment.' },
  { code: 'A', category: 'Assess', title: 'Revenue Integrity Scan', description: 'Deep dive into coding, billing, and credentialing status.' },
  { code: 'B', category: 'Implement', title: 'Workflow Remediation', description: 'On-site process improvement for front and back-office.' },
  { code: 'B', category: 'Implement', title: 'EHR Re-Configuration', description: 'Adjusting templates and logic for better UX and data.' },
  { code: 'C', category: 'Govern', title: 'Fractional Admin Services', description: 'Ongoing executive support for operations and RCM.' },
  { code: 'C', category: 'Govern', title: 'Managed Compliance Service', description: 'Annual SRA updates, training, and policy management.' },
];
