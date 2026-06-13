export interface Program {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  syllabus: string[]; // Week-by-week layout
  duration: string;   // e.g. "6 Weeks"
  capacity: number;   // e.g. 15
  nextCohortStart: string;
  price: string;
  imageSrc: string;   // Cloudinary ID or absolute path
  outcomes: string[];
}

export interface Application {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  programSlug: string;
  goals: string;
  experience: string;
  status?: 'pending' | 'reviewed' | 'accepted' | 'declined';
  createdAt?: string;
}

export interface Lead {
  id?: string;
  phone: string;
  programSlug?: string;
  optInNewsletter: boolean;
  createdAt?: string;
}

export interface Graduate {
  id: string;
  name: string;
  cohort: string;
  beforeImageSrc: string;
  afterImageSrc: string;
  quote: string;
  placement?: string; // Agency or Pageant details
}
