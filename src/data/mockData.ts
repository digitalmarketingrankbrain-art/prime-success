import { Winner, Article, AwardCategory, GalaEvent } from "@/types";

export const winnersData: Winner[] = [
  {
    id: "01",
    slug: "aarav-mehra",
    name: "Aarav Mehra",
    role: "Founder & Executive Chairman",
    organization: "Aether Global Energies",
    award: "Prime Icon of the Year",
    category: "Entrepreneurship",
    year: 2026,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1800&auto=format&fit=crop",
    quote: "True leadership is not about building empire for oneself, but lighting the path for generations that follow.",
    bio: [
      "Aarav Mehra has spent over two decades pioneering clean tech industrial infrastructure across Asia, Europe, and North America. Under his stewardship, Aether Global Energies has deployed over $14 Billion in renewable grid architecture.",
      "Recognised universally as a vanguard of responsible capitalism, Aarav has balanced unprecedented commercial returns with radical environmental preservation initiatives."
    ],
    achievements: [
      "Orchestrated Asia's largest zero-emission hydrogen grid investment project",
      "Named Global Clean Tech Pioneer by World Economic Forum",
      "Pledged $500M endowment to clean technology research institutes"
    ],
    impactStatement: "Pioneered sustainable energy solutions powering over 45 million households across three continents.",
    isFeatured: true,
  },
  {
    id: "02",
    slug: "dr-elena-vance",
    name: "Dr. Elena Vance",
    role: "Chief Scientist & Founder",
    organization: "Neuronix Diagnostics",
    award: "Global Innovator Award",
    category: "Innovation",
    year: 2026,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1800&auto=format&fit=crop",
    quote: "Science is the ultimate equalizer. When we cure disease early, we unleash human potential at scale.",
    bio: [
      "Dr. Elena Vance's revolutionary work in non-invasive early neurological oncology detection has transformed modern preventive healthcare.",
      "Holding 34 international patents, her diagnostic framework has reduced early detection latency by 80 percent globally."
    ],
    achievements: [
      "Invented non-invasive early-stage neuro-biomarker scanner",
      "Published over 90 peer-reviewed papers in Lancet and Nature",
      "Recipient of the European Science Vanguard Gold Medal"
    ],
    impactStatement: "Developed early detection technology saving an estimated 1.2 million lives to date.",
    isFeatured: true,
  },
  {
    id: "03",
    slug: "vikramaditya-singh",
    name: "Vikramaditya Singh",
    role: "Group Managing Director",
    organization: "Royal Heritage Holdings",
    award: "Lifetime Achievement Honor",
    category: "Business Excellence",
    year: 2026,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1800&auto=format&fit=crop",
    quote: "Excellence is never an accident; it is the result of high intention, sincere effort, and intelligent execution.",
    bio: [
      "Over a legendary 40-year career, Vikramaditya Singh built Royal Heritage Holdings into a multi-national conglomerate spanning luxury hospitality, infrastructure, and financial capital.",
      "His philanthropic foundation has built over 200 healthcare centers and technical institutes."
    ],
    achievements: [
      "Built $22B enterprise across 18 countries",
      "Pioneered sustainable heritage tourism restoration models",
      "Awarded Highest Civilian Distinction for Industrial Vision"
    ],
    impactStatement: "Transformed global luxury hospitality while establishing India's largest private heritage conservation trust.",
    isFeatured: true,
  },
  {
    id: "04",
    slug: "sophia-chen",
    name: "Sophia Chen",
    role: "Creative Director & Principal Architect",
    organization: "Atelier Chen & Partners",
    award: "Creative Excellence Laureate",
    category: "Creative Excellence",
    year: 2026,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1800&auto=format&fit=crop",
    quote: "Architecture is frozen music. When we design spaces with reverence, we elevate the human spirit.",
    bio: [
      "Sophia Chen is celebrated worldwide for landmark architectural monuments that synthesize cultural heritage with future biophilic technology.",
      "Her practice has completed iconic civic spaces across Tokyo, Singapore, Dubai, and London."
    ],
    achievements: [
      "Designed the Singapore Eco-Tower Civic Landmark",
      "Pritzker Architecture Prize Nominee 2025",
      "Pioneered timber-hybrid skyscraper engineering standards"
    ],
    impactStatement: "Redefined skyline architecture through climate-adaptive carbon-negative structural design.",
    isFeatured: true,
  },
  {
    id: "05",
    slug: "marcus-thorne",
    name: "Marcus Thorne",
    role: "CEO & Founder",
    organization: "Apex Philanthropy Alliance",
    award: "Social Impact Champion",
    category: "Social Impact",
    year: 2026,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1800&auto=format&fit=crop",
    quote: "Wealth without purpose is hollow. True power lies in uplifting those who cannot speak for themselves.",
    bio: [
      "Marcus Thorne left Wall Street investment banking to pioneer micro-capital grants and clean water infrastructure across Sub-Saharan Africa and South Asia.",
      "His alliance operates with absolute financial transparency, ensuring 98% of donor capital directly funds frontline equipment."
    ],
    achievements: [
      "Deployed $1.8B directly into women micro-entrepreneurship",
      "Built clean water access network for 12M people",
      "Established 450 rural digital learning centers"
    ],
    impactStatement: "Catalyzed micro-grant economic mobility for over 500,000 women worldwide.",
    isFeatured: true,
  },
  {
    id: "06",
    slug: "amira-al-mansoor",
    name: "Amira Al-Mansoor",
    role: "Managing Partner",
    organization: "Vanguard Sovereign Venture Capital",
    award: "Rising Icon of the Year",
    category: "Rising Icon",
    year: 2026,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1800&auto=format&fit=crop",
    quote: "The future belongs to those who invest in audacity before it becomes consensus.",
    bio: [
      "At just 31, Amira manages a $4 Billion sovereign technology fund focusing on quantum computing, deep space tech, and synthetic biology.",
      "She serves as a trusted advisor to national innovation councils across the Middle East and East Asia."
    ],
    achievements: [
      "Led seed investments in 3 breakthrough tech unicorns",
      "Forbes 30 Under 30 Global Hall of Fame",
      "Chairs the Middle East Deep-Tech Innovation Syndicate"
    ],
    impactStatement: "Orchestrated key venture backing for next-generation quantum computing breakthroughs.",
    isFeatured: true,
  },
  {
    id: "07",
    slug: "lord-alistair-sterling",
    name: "Lord Alistair Sterling",
    role: "Chairman Emeritus",
    organization: "Sterling Financial Consortium",
    award: "Grand Sovereign Leadership Award",
    category: "Leadership",
    year: 2026,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1800&auto=format&fit=crop",
    quote: "Honor is not a badge we wear for past victories; it is a vow we keep every single morning.",
    bio: [
      "Lord Alistair Sterling has guided global economic stability through five economic cycles over three decades.",
      "A respected global diplomat and industrialist, Lord Sterling pioneered cross-border sovereign fund alliances."
    ],
    achievements: [
      "Advised international banking liquidity reserves",
      "Knighted for international economic diplomacy",
      "Founded the Sovereign Leadership Academy"
    ],
    impactStatement: "Stewardship of over $40B in global wealth endowment and sovereign economic advisory.",
    isFeatured: true,
  },
  {
    id: "08",
    slug: "dr-isabella-rossi",
    name: "Dr. Isabella Rossi",
    role: "Director of Genetic Medicine",
    organization: "BioGenetics Institute Milan",
    award: "Pioneer in Biotechnology",
    category: "Innovation",
    year: 2026,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1800&auto=format&fit=crop",
    quote: "When we unlock the cellular code with integrity, we cure pain before it takes root.",
    bio: [
      "Dr. Isabella Rossi led the historical breakthrough in targeted cellular gene repair for rare auto-immune conditions.",
      "Her research facility in Milan is regarded as the leading sanctuary for advanced biomedical breakthroughs."
    ],
    achievements: [
      "Pioneered mRNA targeted gene restoration therapies",
      "Awarded Nobel Prize in Physiology Nominee 2025",
      "Established 12 global rare disease research centers"
    ],
    impactStatement: "Developed cellular gene therapies restoring health for over 80,000 pediatric patients.",
    isFeatured: true,
  },
  {
    id: "09",
    slug: "takahashi-kenji",
    name: "Takahashi Kenji",
    role: "Founder & Chief Designer",
    organization: "Kenji Spatial Dynamics Tokyo",
    award: "Master of Aesthetic Design",
    category: "Creative Excellence",
    year: 2026,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1800&auto=format&fit=crop",
    quote: "Simplicity is the ultimate sophistication. In silence, design speaks loudest.",
    bio: [
      "Takahashi Kenji has redefined contemporary industrial aesthetics and minimalist luxury architecture across Asia and Europe.",
      "His designs seamlessly blend traditional Japanese craftsmanship with organic futuristic materials."
    ],
    achievements: [
      "Designed Tokyo Grand Symphony Hall",
      "Recipient of the Golden Compass Design Award",
      "Curated 5 World Expo Architectural Pavilions"
    ],
    impactStatement: "Elevated global minimalist luxury design through sustainable, timeless spatial craft.",
    isFeatured: true,
  }
];

export const articlesData: Article[] = [
  {
    id: "art-01",
    slug: "the-architects-of-tomorrow",
    title: "THE ARCHITECTS OF TOMORROW",
    subtitle: "Discover the visionaries transforming global industries, redefining wealth, and shaping the next century of leadership.",
    category: "COVER STORY",
    author: {
      name: "Julian Vance",
      role: "Editor-in-Chief",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    publishedAt: "AUGUST 2026",
    readTime: "8 MIN READ",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    isCoverStory: true,
    pullQuote: "Greatness is not inherited; it is carved through relentless conviction, vision, and uncompromising standards of excellence.",
    content: [
      "In an era characterized by rapid technological flux and economic realignment, true leadership is no longer defined merely by quarterly revenue or market capitalization. It is measured by legacy — the indelible imprint an individual leaves upon society, culture, and industry.",
      "The Prime Success Honorees of 2026 represent this rare tier of leadership. They are individuals who looked at impossible paradigms and saw opportunities for systemic transformation.",
      "From clean energy gigafactories in Northern Europe to quantum computing laboratories in Silicon Valley and visionary infrastructure in Mumbai, these leaders embody what we define as The Prime Standard: unwavering integrity, monumental vision, and enduring impact."
    ]
  },
  {
    id: "art-02",
    slug: "redefining-legacy-in-the-digital-age",
    title: "Redefining Legacy in the Digital Age",
    subtitle: "How modern billionaires and visionaries are shifting from traditional asset accumulation to generational impact endowment.",
    category: "LEADERSHIP",
    author: {
      name: "Victoria Sterling",
      role: "Senior Editorial Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    publishedAt: "JULY 2026",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    isCoverStory: false,
    pullQuote: "Legacy is not what you leave for people. It is what you leave in people.",
    content: [
      "The nature of influence is undergoing a profound evolution. Where mid-twentieth-century industrial titans measured dominance through physical infrastructure, today's leaders recognize that cognitive capital, brand trust, and societal stewardship form the true foundation of power.",
      "In this exclusive report, Prime Success examines how top honorees are structuring family offices, philanthropic trusts, and venture capital funds to address humanity's most pressing challenges."
    ]
  },
  {
    id: "art-03",
    slug: "the-quantum-frontier-of-clean-tech",
    title: "The Quantum Frontier of Clean Energy",
    subtitle: "Inside Aarav Mehra's multi-billion dollar clean energy empire powering green industrial hydrogen grid infrastructure.",
    category: "INNOVATION",
    author: {
      name: "Devon Reynolds",
      role: "Technology Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    publishedAt: "JULY 2026",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    isCoverStory: false,
    content: [
      "When Aarav Mehra founded Aether Global Energies in 2012, few institutional investors believed green hydrogen could reach grid parity with legacy fossil fuels.",
      "Fourteen years later, Aether controls over 45 gigawatts of generation capacity across three continents, proving that environmental stewardship and royal profitability are fundamentally aligned."
    ]
  },
  {
    id: "art-04",
    slug: "royal-aesthetics-and-architectural-monuments",
    title: "The Renaissance of Royal Architectural Monuments",
    subtitle: "How Sophia Chen and Takahashi Kenji are designing civic spaces that blend ancient heritage with zero-carbon engineering.",
    category: "CREATIVE EXCELLENCE",
    author: {
      name: "Camilla Rothschild",
      role: "Arts & Design Correspondent",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
    publishedAt: "JUNE 2026",
    readTime: "7 MIN READ",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    isCoverStory: false,
    pullQuote: "A building becomes a monument when it shelters the soul of its community.",
    content: [
      "Modern architecture is transcending cold glass monoliths to embrace organic warmth, gold spatial symmetry, and sacred geometry.",
      "In this feature, Atelier Chen & Partners reveal their blueprint for the Singapore Eco-Tower Civic Landmark."
    ]
  },
  {
    id: "art-05",
    slug: "sovereign-wealth-and-deep-tech-futures",
    title: "Sovereign Wealth and the Deep Tech Frontier",
    subtitle: "Amira Al-Mansoor on why venture capital must shift focus from short-term software to quantum engineering.",
    category: "BUSINESS EXCELLENCE",
    author: {
      name: "Lord Harrison Vance",
      role: "Financial Editor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    publishedAt: "MAY 2026",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    isCoverStory: false,
    content: [
      "Sovereign wealth funds manage over $11 Trillion globally. How that capital is deployed over the next decade will dictate human advancement.",
      "Amira Al-Mansoor outlines Vanguard's thesis on quantum security, clean fusion, and space manufacturing."
    ]
  }
];

export const awardsData: AwardCategory[] = [
  {
    id: "cat-01",
    number: "01",
    name: "Entrepreneurship",
    tagline: "Building Empires That Outlast Generations",
    description: "Honouring visionary founders and enterprise builders who have established market-defining corporations through innovation and resilience.",
    criteria: [
      "Demonstrated industry transformation",
      "Sustained financial & market dominance",
      "Pioneering business models",
      "Ethical governance & brand reputation"
    ],
    icon: "Crown",
    slug: "entrepreneurship"
  },
  {
    id: "cat-02",
    number: "02",
    name: "Leadership",
    tagline: "Inspiring Excellence Across Complex Global Frontiers",
    description: "Recognising CEOs, board chairs, and institutional stewards who demonstrate extraordinary strategic clarity and human empathy.",
    criteria: [
      "Crisis navigation mastery",
      "Organizational culture transformation",
      "Global strategic impact",
      "Mentorship & talent development"
    ],
    icon: "ShieldCheck",
    slug: "leadership"
  },
  {
    id: "cat-03",
    number: "03",
    name: "Innovation",
    tagline: "Inventing the Technologies of the Next Century",
    description: "Awarded to scientists, technologists, and inventors breaking physical and digital boundaries to solve critical global challenges.",
    criteria: [
      "Patented technological novelty",
      "Scalable real-world application",
      "Scientific rigor",
      "Disruptive economic potential"
    ],
    icon: "Zap",
    slug: "innovation"
  },
  {
    id: "cat-04",
    number: "04",
    name: "Social Impact",
    tagline: "Uplifting Humanity Through Purposeful Action",
    description: "Dedicated to philanthropists, NGO founders, and social pioneers deploying capital and energy to resolve inequality and environmental harm.",
    criteria: [
      "Measurable lives impacted",
      "Sustainable non-profit models",
      "Policy advocacy reform",
      "Community empowerment"
    ],
    icon: "HeartHandshake",
    slug: "social-impact"
  },
  {
    id: "cat-05",
    number: "05",
    name: "Creative Excellence",
    tagline: "Mastering Craft, Design, Art & Cultural Influence",
    description: "Celebrating architects, designers, artists, and cultural icons whose artistic vision shapes global aesthetic culture.",
    criteria: [
      "Originality of creative voice",
      "Global critical acclaim",
      "Cultural landmark contributions",
      "Mastery of medium"
    ],
    icon: "Palette",
    slug: "creative-excellence"
  },
  {
    id: "cat-06",
    number: "06",
    name: "Business Excellence",
    tagline: "Operational Brilliance & Strategic Mastery",
    description: "Recognising corporate units and leaders executing flawless operational growth, financial health, and customer trust.",
    criteria: [
      "Exceptional ROI & shareholder value",
      "Operational efficiency metrics",
      "Quality assurance standards",
      "Customer loyalty & retention"
    ],
    icon: "TrendingUp",
    slug: "business-excellence"
  },
  {
    id: "cat-07",
    number: "07",
    name: "Lifetime Achievement",
    tagline: "A Legacy Written in Gold Across Decades",
    description: "The highest accolade of Prime Success, conferred upon individuals whose lifetime of accomplishment has forever changed human history.",
    criteria: [
      "Minimum 25 years of sustained leadership",
      "Global monumentality of impact",
      "Enduring legacy across industries",
      "Unanimous advisory board election"
    ],
    icon: "Award",
    slug: "lifetime-achievement"
  },
  {
    id: "cat-08",
    number: "08",
    name: "Rising Icon",
    tagline: "The Next Generation of Global Power",
    description: "Highlighting exceptional prodigies under 35 who are accelerating breakthrough changes and establishing early dominance.",
    criteria: [
      "Prodigious early career milestones",
      "Velocity of innovation & influence",
      "Venture growth momentum",
      "Future leadership potential"
    ],
    icon: "Sparkles",
    slug: "rising-icon"
  }
];

export const galaEventData: GalaEvent = {
  id: "event-2026",
  title: "PRIME SUCCESS GRAND AWARDS GALA 2026",
  theme: "THE NIGHT OF EXCELLENCE",
  date: "DECEMBER 12, 2026",
  location: "MUMBAI, INDIA",
  venue: "The St. Regis Grand Ball Room & Private Ocean Terrace",
  image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1800&auto=format&fit=crop",
  description: "An exclusive invitation-only red carpet black-tie awards ceremony gathering 300 of the world's most influential heads of state, global CEOs, award honorees, and cultural luminaries.",
  schedule: [
    { time: "18:00 IST", activity: "VIP Red Carpet Arrival & Champagne Reception" },
    { time: "19:30 IST", activity: "Opening Keynote & Royal Symphony Performance" },
    { time: "20:15 IST", activity: "Prime Success Awards Ceremony & Induction" },
    { time: "22:00 IST", activity: "Gala Banquet Dinner & Private Networking Lounge" },
    { time: "23:30 IST", activity: "Midnight After-Party & Private Honors Toast" }
  ],
  isUpcoming: true,
};
