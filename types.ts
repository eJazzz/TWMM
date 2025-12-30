
export interface NavItem {
  label: string;
  path: string;
}

export interface Package {
  id: string;
  name: string;
  bestFor: string;
  outcome: string;
  timeline: string;
  deliverables: string[];
  description: string;
  pricing: string;
  level: 'Stabilize' | 'Optimize' | 'Scale';
}

export interface ServiceItem {
  code: 'A' | 'B' | 'C';
  category: 'Assess' | 'Implement' | 'Govern';
  title: string;
  description: string;
}

export interface PainPoint {
  title: string;
  symptom: string;
  rootCause: string;
  solution: string;
}
