export interface Winner {
  id: string;
  slug: string;
  name: string;
  role: string;
  organization: string;
  award: string;
  category: string;
  year: number;
  image: string;
  heroImage?: string;
  quote: string;
  bio: string[];
  achievements: string[];
  impactStatement: string;
  isFeatured?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  isCoverStory?: boolean;
  content: string[];
  pullQuote?: string;
}

export interface AwardCategory {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  criteria: string[];
  icon: string;
  slug: string;
}

export interface GalaEvent {
  id: string;
  title: string;
  theme: string;
  date: string;
  location: string;
  venue: string;
  image: string;
  description: string;
  schedule: { time: string; activity: string }[];
  isUpcoming?: boolean;
}
