export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  icon: string;
  link?: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'leadership' | 'education';
  color: 'cyan' | 'green' | 'purple' | 'gold';
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export interface EducationItem {
  degree: string;
  institute: string;
  score: string;
  year: string;
  color: 'cyan' | 'purple' | 'green' | 'gold';
}

export interface NavItem {
  label: string;
  href: string;
  number: string;
}
