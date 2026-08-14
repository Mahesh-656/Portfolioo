export const profile = {
  name: "Maheshwar R",
  role: "Java Backend Developer",
  headline: "Building secure, scalable Spring Boot applications and AI-enabled backend systems.",
  summary:
    "Early-career backend developer focused on Java, Spring Boot, REST APIs, PostgreSQL, Spring Security, Docker and Generative AI. I like turning business requirements into maintainable APIs, data models and production-oriented application flows.",
  email: "your-email@example.com",
  github: "https://github.com/your-github",
  linkedin: "https://www.linkedin.com/in/your-linkedin/",
  resume: "/resume.pdf"
};

export const skills = [
  { group: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "REST APIs"], tone: "core" },
  { group: "Security", items: ["Spring Security", "JWT", "RBAC", "OAuth concepts"], tone: "strong" },
  { group: "Database", items: ["PostgreSQL", "SQL", "Hibernate", "JPA"], tone: "core" },
  { group: "AI / GenAI", items: ["Spring AI", "LLM integration", "RAG", "Embeddings", "Vector databases"], tone: "learning" },
  { group: "DevOps", items: ["Git", "GitHub", "Docker", "Docker Compose"], tone: "strong" },
  { group: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"], tone: "working" }
];

export const projects = [
  {
    id: "fintech",
    name: "FinTech Transaction Management Platform",
    type: "Enterprise-style simulation",
    problem: "A reliable demo platform needs authentication, account flows, balance handling and traceable transaction history without pretending to process real money.",
    solution: "A Spring Boot transaction service with PostgreSQL, validation, JWT-based access control and transactional business operations.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Docker"],
    highlights: ["ACID transaction boundaries", "Role-based authorization", "Idempotency design", "Global exception handling", "Pagination", "Audit-oriented thinking"],
    architecture: ["React Client", "REST API", "Spring Security", "Service Layer", "Repository Layer", "PostgreSQL"],
    github: "https://github.com/your-github",
    live: "",
    note: "Simulation/demo only — no real financial transactions."
  },
  {
    id: "healthcare",
    name: "Healthcare Appointment & Billing Platform",
    type: "Enterprise-style project concept",
    problem: "Healthcare workflows require clear separation of patients, clinicians, appointments, billing and access permissions.",
    solution: "A role-aware Spring Boot API model backed by PostgreSQL with validation and audit-friendly business flows.",
    stack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JPA"],
    highlights: ["Patient management", "Doctor management", "Appointment scheduling", "Billing workflow", "RBAC", "Audit logging"],
    architecture: ["Web Client", "REST Controller", "Security", "Appointment Service", "Billing Service", "PostgreSQL"],
    github: "https://github.com/your-github",
    live: "",
    note: "Concept/demo data only. No real patient data."
  },
  {
    id: "ai-support",
    name: "AI-Powered Support Platform",
    type: "GenAI-focused project",
    problem: "Support teams need grounded answers from internal knowledge rather than generic model responses.",
    solution: "A Spring Boot + Spring AI workflow for document ingestion, retrieval, embeddings and conversational responses.",
    stack: ["Java", "Spring Boot", "Spring AI", "RAG", "LLM", "Vector Search"],
    highlights: ["Knowledge-base ingestion", "Embeddings", "Retrieval pipeline", "Conversation history", "Authentication", "Grounded generation"],
    architecture: ["Client", "REST API", "Auth", "RAG Orchestrator", "Vector Search", "LLM"],
    github: "https://github.com/your-github",
    live: "",
    note: "Only keep technologies here that are implemented in the final repository."
  }
];

export const journey = [
  ["Projects", "Hands-on enterprise-style application development"],
  ["Independent Development", "Building backend systems and learning through implementation"],
  ["Technical Learning", "Java, Spring Boot, security, databases, Docker and GenAI"],
  ["Open Source", "Add verified contributions here when available"],
  ["Certifications", "Add only verified certifications here"]
];