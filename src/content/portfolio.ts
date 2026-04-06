export const portfolio = {
  name: "Connor Walsh",
  role: "Full Stack Developer",
  badge: "Backend systems / Mobile apps / Product builds",
  brandStatement:
    "Full-stack developer focused on backend systems and mobile-first product builds.",
  intro:
    "I am currently a Software Engineer at BAE Systems, and outside of work I am especially drawn to backend and mobile-focused builds.",
  summary:
    "I build clean, maintainable products that are practical to ship and enjoyable to use.",
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Get In Touch",
    href: "#contact",
  },
  resume: {
    label: "Resume",
    href: "#contact",
  },
  contact: {
    email: "connor_w_98@hotmail.com",
    note: "The links below go directly to my real profiles and email.",
    availability:
      "Currently working full-time at BAE Systems and always happy to connect with other developers, teams, and interesting projects.",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/cWalsh-developer" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/connorwalsh98/" },
    { label: "Instagram", href: "https://www.instagram.com/connorwalsh_98/" },
  ],
  skills: [
    {
      category: "Backend Development",
      items: ["MySQL", "FastAPI", "PostgreSQL", "PHP", "Firebase", "MongoDB"],
    },
    {
      category: "Frontend Development",
      items: ["React", "CSS", "HTML", "Vanilla JavaScript"],
    },
    {
      category: "Mobile Development",
      items: ["React Native", "Expo", "Kotlin", "Jetpack Compose"],
    },
    {
      category: "AI Capabilities",
      items: ["TensorFlow", "Scikit-learn", "PyTorch", "CNN and NN architectures"],
    },
    {
      category: "Workflow",
      items: [
        "Agile delivery",
        "Clear team communication",
        "Stakeholder collaboration",
        "Clean design and code structure",
      ],
    },
  ],
  projects: [
    {
      title: "PhunParty",
      description:
        "A multiplayer party quiz game where players use their mobile devices to participate, and a shared host screen runs the session in real time.",
      image: "/projects/Screenshot 2026-04-06 030949.png",
      mobileImage: "/projects/PhunParty_Mobile_App.jpg",
      tags: ["Full Stack", "Social App", "Product Build"],
      gradient: "from-cyan-500 to-blue-500",
      liveHref: "https://github.com/cWalsh-developer/PhunParty",
      sourceHref: "https://github.com/cWalsh-developer/PhunParty",
    },
    {
      title: "CVBuilder",
      description:
        "A Java Swing desktop app for building structured CVs through a guided interface and exporting them as CSV files.",
      image: "/projects/Edit_Referee.png",
      tags: ["Productivity", "Full Stack", "UX"],
      gradient: "from-purple-500 to-pink-500",
      liveHref: "https://github.com/cWalsh-developer/CV_Builder",
      sourceHref: "https://github.com/cWalsh-developer/CV_Builder",
    },
    {
      title: "PacBloke / ModernPacMan",
      description:
        "A hard-mode Pac-Man remake with split powers, teleport abilities, inverse mode, and a modern browser-based presentation.",
      image: "/projects/Screenshot 2026-04-06 021654.png",
      tags: ["Game Project", "Frontend", "Creative Build"],
      gradient: "from-blue-500 to-violet-500",
      liveHref: "https://github.com/cWalsh-developer/ModernPacMan",
      sourceHref: "https://github.com/cWalsh-developer/ModernPacMan",
    },
    {
      title: "EmployeeAccess Facial Detection System",
      description:
        "A full-stack employee access system that uses face recognition for secure entry, monitoring, and access control.",
      image: "/projects/cv-recognition.png",
      tags: ["Computer Vision", "Security", "Backend"],
      gradient: "from-emerald-500 to-cyan-500",
      liveHref: "https://github.com/CV-Recognition",
      sourceHref: "https://github.com/CV-Recognition",
    },
  ],
} as const;
