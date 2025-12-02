export interface ResearchProject {
  id: string;
  title: string;
  code: string;
  manager: string;
  role: string;
  highlight?: boolean;
}

export interface Competition {
  title: string;
  rank: string;
  description: string;
  works: string[];
}

export interface Paper {
  title: string;
  venue: string;
  status: string;
  type: 'Journal' | 'Conference' | 'Forum';
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  tasks: string;
  achievements: string;
  stats?: { label: string; value: string | number }[];
}

export interface Practice {
  title: string;
  description: string;
  outcome: string;
}

export interface StudentWork {
  role: string;
  period: string;
  description: string;
  highlight_stat?: string;
}
