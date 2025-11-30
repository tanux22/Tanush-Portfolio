
import type { Experience, Project, SkillGroup, EducationItem } from './types';

export const NAV_ITEMS = [
  { label: 'Identity', href: '#about', number: '01' },
  { label: 'Arsenal', href: '#skills', number: '02' },
  { label: 'Missions', href: '#projects', number: '03' },
  { label: 'Timeline', href: '#experience', number: '04' },
  { label: 'Education', href: '#education', number: '05' },
  { label: 'Comms', href: '#contact', number: '06' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: 'C++', icon: 'fab fa-cuttlefish', color: 'text-neon-cyan' },
      { name: 'Python', icon: 'fab fa-python', color: 'text-neon-cyan' },
      { name: 'JavaScript', icon: 'fab fa-js', color: 'text-neon-cyan' },
      { name: 'Java', icon: 'fab fa-java', color: 'text-neon-cyan' },
    ]
  },
  {
    category: "Full-Stack Development",
    items: [
      { name: 'React JS', icon: 'fab fa-react', color: 'text-neon-purple' },
      { name: 'Node JS', icon: 'fab fa-node-js', color: 'text-neon-purple' },
      { name: 'Express JS', icon: 'fas fa-server', color: 'text-neon-purple' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-neon-purple' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-neon-purple' },
      { name: 'MUI', icon: 'fas fa-layer-group', color: 'text-neon-purple' },
      { name: 'Docker', icon: 'fab fa-docker', color: 'text-neon-purple' },
    ]
  },
  {
    category: "Cloud & Databases",
    items: [
      { name: 'AWS', icon: 'fab fa-aws', color: 'text-neon-green' },
      { name: 'MySQL', icon: 'fas fa-database', color: 'text-neon-green' },
      { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-neon-green' },
      { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-neon-green' },
    ]
  },
  {
    category: "Machine Learning",
    items: [
      { name: 'Numpy', icon: 'fas fa-cube', color: 'text-neon-gold' },
      { name: 'Pandas', icon: 'fas fa-table', color: 'text-neon-gold' },
      { name: 'Matplotlib', icon: 'fas fa-chart-line', color: 'text-neon-gold' },
      { name: 'Seaborn', icon: 'fas fa-chart-area', color: 'text-neon-gold' },
      { name: 'scikit-learn', icon: 'fas fa-brain', color: 'text-neon-gold' },
    ]
  },
  {
    category: "Developer Tools",
    items: [
      { name: 'Postman', icon: 'fas fa-paper-plane', color: 'text-white' },
      { name: 'VS Code', icon: 'fas fa-code', color: 'text-white' },
      { name: 'GitHub', icon: 'fab fa-github', color: 'text-white' },
      { name: 'Copilot', icon: 'fas fa-robot', color: 'text-white' },
      { name: 'Jupyter', icon: 'fas fa-circle', color: 'text-white' },
    ]
  },
  {
    category: "Core Subjects",
    items: [
      { name: 'DSA', icon: 'fas fa-sitemap', color: 'text-text-muted' },
      { name: 'OOPS', icon: 'fas fa-cubes', color: 'text-text-muted' },
      { name: 'DBMS', icon: 'fas fa-database', color: 'text-text-muted' },
      { name: 'OS', icon: 'fas fa-microchip', color: 'text-text-muted' },
      { name: 'CA', icon: 'fas fa-memory', color: 'text-text-muted' },
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "M.Tech.",
    institute: "BITS Pilani",
    score: "Incoming",
    year: "2026 (Upcoming)",
    color: 'gold'
  },
  {
    degree: "B.Tech., CSE",
    institute: "Indian Institute of Information Technology, Sri City (IIITS)",
    score: "7.6 CGPA",
    year: "2022-2026",
    color: 'cyan'
  },
  {
    degree: "Senior Secondary",
    institute: "Narayana E-Techno School, Bangalore (CBSE)",
    score: "81%",
    year: "2018-2021",
    color: 'purple'
  },
  {
    degree: "Secondary",
    institute: "St. Joseph’s Boys High School, Bangalore (ICSE)",
    score: "91%",
    year: "2018-2019",
    color: 'green'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fake News GNN',
    category: 'GRAPH NEURAL NETWORKS',
    description: 'Bipartite graph model (News & Tweets) using GCN/GAT architectures on Politifact dataset. Features TF-IDF node embeddings and PyTorch Geometric implementation.',
    techStack: ['PyTorch Geometric', 'SpaCy', 'Scikit-learn', 'Python'],
    icon: 'fab fa-github',
    image: 'https://placehold.co/600x350/050505/00f3ff?text=GNN+Model+Viz&font=orbitron'
  },
  {
    id: '2',
    title: 'VibeTube',
    category: 'STREAMING PLATFORM',
    description: 'A modern video streaming architecture replicating YouTube. Features real-time video playback, dynamic search functionality, and immersive channel pages using RapidAPI data streams.',
    techStack: ['React', 'Material UI', 'JavaScript', 'RapidAPI'],
    icon: 'fab fa-github',
    image: 'https://placehold.co/600x350/050505/ff0055?text=VibeTube+Stream&font=orbitron'
  },
  {
    id: '3',
    title: 'NeuraNote',
    category: 'AI INTELLIGENT PLATFORM',
    description: 'Note-taking app with LangChain & Gemini Flash LLM. Features voice-enabled creation, Tiptap editor, and Redis rate limiting.',
    techStack: ['React', 'Node.js', 'LangChain', 'Docker'],
    icon: 'fab fa-github',
    image: 'https://placehold.co/600x350/050505/bc13fe?text=NeuraNote+AI&font=orbitron'
  },
  {
    id: '4',
    title: 'TuteeTutor',
    category: 'LMS DASHBOARD',
    description: 'Classroom management with multi-role dashboards. Secure JWT auth, Swagger API docs, and Docker containerization.',
    techStack: ['MERN', 'JWT', 'Swagger', 'Vercel'],
    icon: 'fab fa-github',
    image: 'https://placehold.co/600x350/050505/0aff0a?text=LMS+Dashboard&font=orbitron'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'SAP Scholar (Intern)',
    company: 'SAP Labs',
    period: 'AUG 2026 - INCOMING',
    type: 'work',
    description: [
      'Selected for the prestigious SAP Scholar program.',
      'Upcoming role focused on enterprise software development and cloud technologies.'
    ],
    color: 'cyan'
  },
  {
    id: '2',
    role: 'Freelance Backend Engineer',
    company: 'Remote',
    period: 'OCT 2025 - PRESENT',
    type: 'work',
    description: [
      'Developing a scalable rental platform connecting tenants & landlords.',
      'Architecting schema with Postgres & Prisma.',
      'Integrated AWS S3 for high-performance image storage.'
    ],
    color: 'purple'
  },
  {
    id: '3',
    role: 'ML Intern',
    company: 'Nacre Software Services Pvt. Ltd.',
    period: 'MAY 2025 - JULY 2025',
    type: 'work',
    description: [
      'Developed complete MLOps pipeline for wine quality prediction.',
      'Engineered production architecture using Flask & Docker.',
      'Implemented MLflow tracking with DagsHub.'
    ],
    color: 'green'
  },
  {
    id: '4',
    role: 'Club Leadership',
    company: 'IIIT Sri City (IOTA & NexSync)',
    period: '2024 - 2025',
    type: 'leadership',
    description: [
      'Organized Global Game Jam sponsored by Krafton.',
      'Conducted Web Dev sessions for 25+ juniors.'
    ],
    color: 'gold'
  }
];