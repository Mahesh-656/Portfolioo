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
    id: "employee-management",
    name: "Employee Management System",
    type: "Java CRUD Application",

    problem:
      "Managing employee records manually can make registration, performance information and reporting difficult to organize and maintain.",

    solution:
      "Developed a Java-based Employee Management System using JDBC and MySQL to manage employee registration, performance evaluation and employee reporting details.",

    stack: ["Java", "JDBC", "MySQL"],

    highlights: [
      "Employee registration",
      "Employee data management",
      "Performance evaluation",
      "Employee reporting",
      "CRUD operations",
      "MySQL database integration"
    ],

    architecture: [
      "Java Application",
      "JDBC",
      "CRUD Operations",
      "MySQL"
    ],

    github: "https://github.com/Mahesh-656/Employee",

    live: "",

    note:
      "Java CRUD application focused on employee data management and database operations."
  },

  {
    id: "hospital-management",
    name: "Hospital Management System",
    type: "Java CRUD Application",

    problem:
      "Hospital administration requires organized management of patient registrations, appointments and staff information across different operational workflows.",

    solution:
      "Developed a Java-based Hospital Management System using JDBC and MySQL to manage patient registration, appointment scheduling and staff details.",

    stack: ["Java", "JDBC", "MySQL"],

    highlights: [
      "Patient registration",
      "Appointment scheduling",
      "Staff management",
      "Patient data management",
      "CRUD operations",
      "MySQL database integration"
    ],

    architecture: [
      "Java Application",
      "JDBC",
      "CRUD Operations",
      "MySQL"
    ],

    github: "https://github.com/Mahesh-656/Hospital",

    live: "",

    note:
      "Java CRUD application designed for hospital administrative and patient management workflows."
  },

  {
    id: "jobify",
    name: "Jobify",
    type: "AI-Powered Job Application Platform",

    problem:
      "Job seekers often spend significant time reviewing job opportunities and matching their skills against suitable roles. Jobify aims to streamline this process through resume analysis and personalized job recommendations.",

    solution:
      "Built an AI-powered job application platform using React, Spring Boot and MongoDB. The platform analyzes resumes, extracts skills, suggests relevant job opportunities and provides application tracking with JWT-based authentication.",

    stack: [
      "Java",
      "Spring Boot",
      "React",
      "MongoDB",
      "JWT"
    ],

    highlights: [
      "Resume analysis",
      "Skill extraction",
      "Job recommendations",
      "Application tracking",
      "JWT authentication",
      "MongoDB integration",
      "React frontend",
      "Spring Boot backend"
    ],

    architecture: [
      "React Client",
      "REST API",
      "JWT Authentication",
      "Spring Boot",
      "Service Layer",
      "MongoDB"
    ],

    github: "https://github.com/Mahesh-656/Jobify",

    live: "https://jobifyclient-production-8aff.up.railway.app/",

    note:
      "AI-powered job application platform for resume analysis, job recommendations and application tracking."
  },

  {
    id: "movie-management",
    name: "Movie Management System",
    type: "Spring Boot + MongoDB Application",

    problem:
      "Movie platforms need structured content management while allowing users to discover movies, submit ratings and reviews, and providing administrators with control over platform content.",

    solution:
      "Developed a movie management platform using Spring Boot and MongoDB with JWT authentication, user rating and review functionality, movie management and an administrative dashboard for content control.",

    stack: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "JWT"
    ],

    highlights: [
      "Movie management",
      "User ratings",
      "Movie reviews",
      "JWT authentication",
      "Admin dashboard",
      "MongoDB integration",
      "Content management"
    ],

    architecture: [
      "Client",
      "REST API",
      "JWT Authentication",
      "Spring Boot",
      "Service Layer",
      "MongoDB"
    ],

    github: "https://github.com/Mahesh-656/Movie_Backend",

    live: "",

    note:
      "Spring Boot and MongoDB application for movie management, user reviews, ratings and administrative content control."
  }
];

export const journey = [
  ["Projects", "Hands-on enterprise-style application development"],
  ["Independent Development", "Building backend systems and learning through implementation"],
  ["Technical Learning", "Java, Spring Boot, security, databases, Docker and GenAI"],
  ["Open Source", "Add verified contributions here when available"],
  ["Certifications", "Add only verified certifications here"]
];