export enum SectionId {
  HERO = 'hero',
  MISSION = 'mission',
  WHY = 'why',
  TECH = 'tech',
  DEMO = 'demo',
  TRY = 'try',
  TEAM = 'team'
}

export interface NavItem {
  label: string;
  id: SectionId;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
  isError?: boolean;
}

export interface CareerPathData {
  major: string;
  careers: {
    title: string;
    futures: string[];
  }[];
}
