import azure from "../assets/azur.png";
import googlecloud from "../assets/googlecloud.jpg";
import micProg from "../assets/MICProg.jpg";
import mic1Prog from "../assets/Microsoft_MCP.png";

export const profile = {
  name: "Emad Altiti",
  role: "Senior Frontend Developer",
  location: "Amman, Jordan",
  email: "emadaaltiti@outlook.com",
  phone: "+962790991214",
  summary: `Results-driven Senior Frontend Developer with over 9 years of experience building modern, scalable, and user-focused web applications. 
Proven success in leading frontend architecture, delivering enterprise-grade platforms, and driving innovation across high-impact digital projects for government and private sector clients in Saudi Arabia and Jordan. 
Expert in React.js, with advanced skills in performance optimization, responsive UI/UX development, and component-based design systems. Known for translating complex requirements into seamless, high performance interfaces.`,
  socials: [
    { label: "GitHub", url: "https://github.com/emadaltiti" },
    { label: "LinkedIn", url: "https://linkedin.com/in/emadaltiti" },
    { label: "X", url: "https://x.com/emadaltiti" }
  ],
  skills: [
    "React.js", "TypeScript", "Redux", "SCSS", "HTML5", "CSS3",
    "Azure DevOps", "Git", "Jira", "Figma", "AI Integration", "Responsive UI"
  ],
  experience: [
    {
      company: "KPMG",
      title: "Assistant Manager – Senior Frontend Development",
      period: "Jan 2023 - Present",
      bullets: [
        "Lead frontend development for Transformation Project Management (TPM) platform.",
        "Designed and delivered AI-powered chatbot for project management.",
        "Built Pricing Calculator frontend tools and Cost to Complete (CTC) system.",
        "Led frontend of AI-powered portal for Expenditure Efficiency Authority (Expro) in Saudi Arabia.",
        "Manage frontend team, code reviews, and onboarding."
      ]
    },
    {
      company: "Masterworks, Riyadh, Saudi Arabia",
      title: "Senior Frontend Developer",
      period: "May 2019 - Jan 2023",
      bullets: [
        "Built S+ Strategic Performance Management System with React.js.",
        "Developed P+ project & portfolio management platform UI modules.",
        "Created dynamic dashboards using Chart.js, amCharts, Highcharts.",
        "Integrated and customized SSRS reports and SharePoint web parts.",
        "Sliced responsive UIs using HTML/CSS/SCSS with Material Design."
      ]
    },
    {
      company: "CG Imagine + Invent, Amman, Jordan",
      title: "App & Web Developer",
      period: "Apr 2018 - Sep 2018",
      bullets: [
        "Built websites with Apostrophe CMS.",
        "Developed React.js dashboards for Mender and Mercy Corps.",
        "Created backend APIs with NestJS, MongoDB, GraphQL."
      ]
    },
    {
      company: "PcNetSoft, Amman, Jordan",
      title: "Software Engineer",
      period: "Sep 2016 - Mar 2018",
      bullets: [
        "Developed web & mobile apps using React.js, Angular, Ionic.",
        "Built APIs with Node.js and Sequelize for MySQL.",
        "Designed reports with JasperReports and ERP modules with Java SE/JavaFX."
      ]
    }
  ],
  achievements: [
    {
      title: "Recognition Badge",
      description: "Expenditure and Project Efficiency Authority (EXPRO), 2025 – Received client recognition for outstanding contribution to the AI Portal (Vision AI project)."
    }, {
      title: "Google Cloud Digital Leader",
      description: "Certification validating foundational knowledge of Google Cloud services and solutions.",
      logo: googlecloud,
      date: "2025"
    },
    {
      title: "Azure Administrator Associate",
      description: "Certification demonstrating expertise in Azure cloud administration and management.",
      logo: azure,
      date: "2024"
    },

    {
      title: "Programming in HTML5 with JavaScript and CSS3",
      description: "Microsoft official certificate for building modern web applications using HTML5, CSS3, and JavaScript.",
      logo: mic1Prog,
      date: "2018"
    },
    {
      title: "Software Engineering (MIC)",
      description: "Completed a professional program focused on software engineering principles and practices.",
      logo: micProg,
      date: "2016"
    }
  ]
};
