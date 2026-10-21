// ============================================================================
// PERSONALIZE THIS FILE
// 1. Replace the sample text with your real details
// 2. Optional photo: put photo.jpg in public/, then set photo: '/photo.jpg'
// 3. Leave any section as [] if you do not have that content yet — it stays hidden
// Only publish information you are comfortable making public.
// ============================================================================

export const profile = {
  photo: '/photo.jpg',
  resume: '',

  name: 'Eduardo Rodriguez',
  role: 'Cybersecurity Specialist',
  location: 'Wichita, Kansas',
  tagline: 'Cybersecurity student with hands-on expertise in network defense, memory forensics, and infrastructure security.',
  about:
    'Highly motivated Cybersecurity student and CompTIA Network+ certified with hands-on expertise in network defense and memory forensics. Proficient in foundational programming using C++ and SQL, alongside Python scripting and industry-standard security tools like Nmap, Metasploit, and Volatility 3. Combines practical infrastructure experience including custom DNS/DHCP routing and honeypot development with a strong foundation in the MITRE ATT&CK framework to analyze and mitigate emerging threats.',
  badge: 'CompTIA Network+ Certified',
  email: 'rodriguezeduardo786@gmail.com',
  github: 'https://github.com/tsukiii00',
  linkedin: 'https://www.linkedin.com/in/edrodrig',

  skills: [
    'Network Defense',
    'Memory Forensics',
    'C++',
    'Python',
    'TypeScript',
    'PowerShell',
    'SQL',
    'HTML',
    'FastAPI',
    'AWS Bedrock',
    'Nmap',
    'Metasploit',
    'Volatility 3',
    'MITRE ATT&CK',
    'Docker',
    'Virtualization',
    'Incident IQ',
    'DNS / DHCP Routing',
    'Pi-hole',
    'Linux',
    'Windows',
    'MacOS',
  ],

  education: [
    {
      school: 'Wichita State University',
      degree: 'Bachelor of Science in Cybersecurity (Minors in Psychology & Computer Science)',
      detail: '01/2024 – 05/2027 · Dean’s Honor Roll',
    },
    {
      school: 'Dodge City Community College',
      degree: 'Associate of Science',
      detail: '08/2022 – 12/2023 · Vice President’s Honor Roll',
    },
  ],

  // Leave [] if you do not have coursework to list yet.
  coursework: [],

  activities: [],

  // Add jobs or internships when you have them. Empty stays hidden.
  experience: [
    {
      title: 'USD 259 Tech Support Student Assistant',
      organization: 'Ennovar at Wichita State University · Wichita, KS',
      date: '08/2026 – Present',
      summary: '',
      highlights: [
        'Managed and resolved daily hardware, software, and network connectivity requests across the USD 259 district utilizing the Incident IQ ticketing system.',
      ],
    },
    {
      title: 'Overnight Freight Associate',
      organization: 'Home Depot · Wichita, KS',
      date: '02/2024 – Present',
      summary: '',
      highlights: [
        'Executed precise inventory management and autonomously prioritized daily operational tasks during overnight operations to ensure total store readiness prior to opening.',
      ],
    },
    {
      title: 'Team Lead',
      organization: 'Walmart Supercenter · Dodge City, KS',
      date: '03/2021 – 03/2022',
      summary: '',
      highlights: [
        'Directed and scheduled a 20-employee cross-functional team, optimizing daily workflows to consistently meet quarterly performance and customer satisfaction goals.',
      ],
    },
  ],

  certifications: [
    { name: 'CompTIA Network+', issuer: 'Issued 08/2026' },
    { name: 'CompTIA Security+', issuer: 'Exam Voucher Secured' },
    { name: 'AWS AI Practitioner', issuer: 'Exam Scheduled' },
    { name: 'AWS Cloud Practitioner', issuer: 'Exam Voucher Secured' },
  ],

  honors: [
    { title: 'Dean’s Honor Roll', detail: 'Wichita State University' },
    { title: 'Vice President’s Honor Roll', detail: 'Dodge City Community College' },
  ],

  interests: [
    'Honeypot development',
    'Capture the Flag (CTF) challenges',
    'Home lab tinkering & networking',
    'Malware analysis & threat mitigation',
  ],

  learning: [
    'AWS Cloud & AI certifications',
    'Advanced penetration testing',
    'CompTIA Security+',
  ],

  projects: [
    {
      title: 'Network Infrastructure & Traffic Management',
      slug: 'network-infrastructure-traffic-management',
      summary:
        'Localized home network solution configuring a Raspberry Pi Zero 2W as a network-wide ad blocker with custom DHCP/DNS routing.',
      overview:
        'Engineered a localized home network solution by configuring a Raspberry Pi Zero 2W as a network-wide ad blocker (Pi-hole). Successfully executed a DHCP swap to optimize local network traffic routing and DNS management.',
      problem:
        'Default ISP routers lack DNS visibility, expose connected devices to telemetry and ads, and provide minimal control over internal network routing.',
      approach: [
        'Engineered a localized home network solution by configuring a Raspberry Pi Zero 2W as a network-wide ad blocker (Pi-hole).',
        'Successfully executed a DHCP swap to optimize local network traffic routing and DNS management.',
        'Configured customized domain sinkholes to safeguard connected devices against malicious traffic.',
      ],
      outcome:
        'Secured local network traffic, eliminated network-wide ads across all connected devices, and optimized DNS response times.',
      skills: ['Raspberry Pi', 'Pi-hole', 'DNS / DHCP', 'Networking', 'Linux'],
      link: 'https://github.com/tsukiii00',
      screenshots: [],
    },
    {
      title: 'Production of a Cybersecurity CTF Website',
      slug: 'cybersecurity-ctf-website',
      summary:
        'Interactive Capture the Flag (CTF) platform built with a 10-person team to promote cybersecurity education.',
      overview:
        'Collaborated within a 10-person development team to architect and launch an interactive Capture the Flag (CTF) platform aimed at promoting cybersecurity education. Designed an intuitive UI and engineered multiple security modules, focusing on decryption, password cracking, web exploitation, IP analysis, and OSINT.',
      problem:
        'Students and newcomers need accessible, hands-on, gamified environments to practice practical offensive and defensive security concepts.',
      approach: [
        'Collaborated within a 10-person development team to architect and launch an interactive Capture the Flag (CTF) platform.',
        'Designed an intuitive UI for participant challenge navigation and score progression.',
        'Engineered multiple security challenge modules focusing on decryption, password cracking, web exploitation, IP analysis, and OSINT.',
      ],
      outcome:
        'Successfully launched an interactive learning tool that empowers students to learn core cybersecurity techniques hands-on.',
      skills: ['Web Development', 'UI Design', 'Decryption', 'Web Exploitation', 'OSINT', 'IP Analysis'],
      link: 'https://github.com/tsukiii00',
      screenshots: [],
    },
    {
      title: 'Real-Time Scam Detector & Multi-Agent Analysis Pipeline',
      slug: 'real-time-scam-detector-multi-agent-analysis-pipeline',
      summary:
        'Browser extension pairing TypeScript with an asynchronous FastAPI backend and a multi-agent verification system on AWS Bedrock to classify fraudulent sites.',
      overview:
        'Engineered a browser extension architecture pairing a TypeScript client with an asynchronous FastAPI backend for live DOM content scraping and telemetry ingestion. Deployed a multi-agent verification system via the Strands Agent SDK on AWS Bedrock, executing parallel heuristic evaluations and LLM-driven inference to classify fraudulent sites.',
      problem:
        'Modern phishing and fraudulent scam sites rapidly evolve, rendering conventional static blocklists ineffective against zero-day deceptive pages and social engineering tactics.',
      approach: [
        'Engineered a browser extension architecture pairing a TypeScript client with an asynchronous FastAPI backend for live DOM content scraping and telemetry ingestion.',
        'Deployed a multi-agent verification system via the Strands Agent SDK on AWS Bedrock, executing parallel heuristic evaluations and LLM-driven inference to classify fraudulent sites.',
        'Streamlined asynchronous telemetry processing to evaluate web risk indicators with minimal user latency.',
      ],
      outcome:
        'Enabled high-fidelity, real-time threat detection and classification of fraudulent sites using automated multi-agent LLM analysis and DOM heuristics.',
      skills: ['TypeScript', 'FastAPI', 'Python', 'AWS Bedrock', 'Strands Agent SDK', 'Multi-Agent Systems', 'DOM Scraping'],
      link: 'https://github.com/tsukiii00',
      screenshots: [],
    },
  ],
};
