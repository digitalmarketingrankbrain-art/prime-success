export interface Winner {
  id: string;
  slug: string;
  titlePrefix?: string;
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
    titlePrefix?: string;
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

export interface Interview {
  id: string;
  slug: string;
  title: string;
  guestName: string;
  titlePrefix?: string;
  guestRole: string;
  organization: string;
  badgeTag: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
  category: string;
  videoUrl: string;
  summary: string;
  isFeatured?: boolean;
}

export interface SurveyOption {
  id: string;
  label: string;
  votes: number;
}

export interface SurveyPoll {
  id: string;
  title: string;
  category: string;
  totalVotes: number;
  options: SurveyOption[];
  status?: "upcoming" | "live" | "closed";
}

export interface MagazineIssue {
  id: string;
  slug: string;
  issueNumber: string;
  title: string;
  subtitle: string;
  monthYear: string;
  category: string;
  coverImage: string;
  coverPerson?: string;
  pagesCount: number;
  prgiRegNo: string;
  description: string;
  tableOfContents: {
    page: number;
    title: string;
    category: string;
  }[];
  editorNote?: string;
  isCurrentIssue?: boolean;
  isFeatured?: boolean;
  pdfUrl?: string;
}
