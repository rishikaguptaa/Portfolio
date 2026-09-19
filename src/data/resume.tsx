import { Icons } from "@/components/icons";
import { skillIcon } from "@/components/skill-icon";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";

const Java = skillIcon("/icons/java.png", "Java");
const JavaScript = skillIcon("/icons/javascript.png", "JavaScript");
const Cpp = skillIcon("/icons/cpp.png", "C++");
const Aws = skillIcon("/icons/aws.png", "AWS");
const Git = skillIcon("/icons/git.png", "Git");
const GitHubSkill = skillIcon("/icons/github.png", "GitHub");
const SpringBoot = skillIcon("/icons/spring-boot.png", "Spring Boot");
const TensorFlow = skillIcon("/icons/tensorflow.png", "TensorFlow");
const PyTorch = skillIcon("/icons/pytorch.png", "PyTorch");
const Bootstrap = skillIcon("/icons/bootstrap.png", "Bootstrap");
const JQuery = skillIcon("/icons/jquery.png", "jQuery");
const DotNet = skillIcon("/icons/dotnet.png", "ASP.NET Core");
const AgenticAi = skillIcon("/icons/agentic-ai.png", "Agentic AI");
const Copilot = skillIcon("/icons/copilot.png", "AI Copilot");
const Gemini = skillIcon("/icons/gemini.png", "Gemini");
const Claude = skillIcon("/icons/claude.png", "Claude");
const MySql = skillIcon("/icons/mysql.png", "MySQL");
const Sql = skillIcon("/icons/sql.png", "SQL");
const Postman = skillIcon("/icons/postman.png", "Postman");
const Prisma = skillIcon("/icons/prisma.png", "Prisma");
const Vercel = skillIcon("/icons/vercel.png", "Vercel");
const Gmail = skillIcon("/icons/gmail.png", "Email");
const GitHubDock = skillIcon("/icons/github-dock.png", "GitHub");
const LinkedInDock = skillIcon("/icons/linkedin-dock.png", "LinkedIn");
const ServiceNow = skillIcon("/icons/servicenow.png", "ServiceNow");

export const DATA = {
  name: "Rishika Gupta",
  initials: "RG",
  url: "https://github.com/rishikaguptaa",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description:
    "Programmer Analyst at Cognizant. ServiceNow Developer building automation, Service Portal experiences, and Agentic AI integrations.",
  summary:
    "I'm a Programmer Analyst at [Cognizant](/#work), working as a ServiceNow Developer for FORTREA in the Life Sciences vertical. I deliver platform customization, server-side scripting, and notification automation, and I'm currently contributing to Agentic AI initiatives that bring AI Copilot capabilities into ServiceNow. I graduated from [Chandigarh University](/#education) with a B.E. in Computer Science and Engineering (CGPA 7.8), and I enjoy building full-stack, ML, and blockchain projects — including a [Gemini API winning hackathon project](/#hackathons).",
  avatarUrl: "",
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: JavaScript },
    { name: "C++", icon: Cpp },
    { name: "React", icon: ReactLight },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "ASP.NET Core", icon: DotNet },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "jQuery", icon: JQuery },
    { name: "TensorFlow", icon: TensorFlow },
    { name: "PyTorch", icon: PyTorch },
    { name: "Agentic AI", icon: AgenticAi },
    { name: "AI Copilot", icon: Copilot },
    { name: "Gemini", icon: Gemini },
    { name: "Claude", icon: Claude },
    { name: "MySQL", icon: MySql },
    { name: "SQL Server", icon: Sql },
    { name: "Prisma", icon: Prisma },
    { name: "AWS", icon: Aws },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: GitHubSkill },
    { name: "Postman", icon: Postman },
    { name: "Vercel", icon: Vercel },
    { name: "ServiceNow", icon: ServiceNow },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "guptarishika768@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rishikaguptaa",
        icon: Icons.github,
        hoverIcon: GitHubDock,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishikagupta24",
        icon: Icons.linkedin,
        hoverIcon: LinkedInDock,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:guptarishika768@gmail.com",
        icon: Gmail,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cognizant",
      href: "https://www.cognizant.com/",
      badges: [],
      location: "Noida",
      title: "Programmer Analyst",
      logoUrl: "/cognizant-c.png",
      start: "July 2025",
      end: "Present",
      description: [
        "Working as a ServiceNow Developer for FORTREA (Life Science vertical), delivering platform customization and automation solutions.",
        "Developing server-side components including Business Rules, Script Includes, GlideRecord operations, and integrations using Glide APIs.",
        "Implemented provider notification workflows by configuring event-driven notifications triggered through record state changes and custom events in ServiceNow.",
        "Designed and managed notification mechanisms using Event Registry, Notifications, and scripted logic to automate communication workflows.",
        "Creating client-side scripts, UI Policies, and UI Actions to enhance user experience and enforce business logic.",
        "Designing and customizing Service Portal with widgets, pages, and themes based on business requirements.",
        "Currently contributing to Agentic AI initiatives focused on integrating AI Copilot capabilities with ServiceNow to improve workflow automation and intelligent assistance.",
        "Collaborating with cross-functional Agile teams for development, testing, debugging, and deployment activities.",
      ],
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "B.E. in Computer Science and Engineering — CGPA: 7.8",
      logoUrl: "/chandigarh-university.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Vehicle Insurance Policy Management System",
      href: "#",
      dates: "Oct 2025",
      active: true,
      description:
        "Built a web-based Vehicle Insurance Policy Management System with secure authentication, dynamic policy generation, and a responsive UI. Set up a CI/CD pipeline with GitHub Actions to automate build, test, and deployment.",
      technologies: [
        "ASP.NET Core 8.0",
        "Entity Framework",
        "REST APIs",
        "MySQL",
        "Bootstrap 5",
        "GitHub Actions",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Protochain: Decentralized Smart Contract Generator",
      href: "https://github.com/rishikaguptaa/ProtoChain",
      dates: "Mar 2025",
      active: true,
      description:
        "Engineered a decentralized DApp that generates smart contracts from natural language prompts. Integrated multi-wallet support (Petra, MetaMask) with blockchain selection for subscription payments.",
      technologies: [
        "Gemini-2.0-flash",
        "Petra",
        "MetaMask",
        "Aptos",
        "TypeScript",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Structure Address Data Compliance",
      href: "https://github.com/rishikaguptaa/structure-data-compliance-using-ML",
      dates: "Jan 2025 – Apr 2025",
      active: true,
      description:
        "Developed an NLP/ML solution that converts unstructured address data into ISO 20022-compliant fields using regex, geocoding APIs, and validation for international address standardization.",
      technologies: ["React", "JavaScript", "SQL", "Machine Learning", "NLP"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Electrothon 7.0 — MLH",
      dates: "2025",
      location: "NIT Hamirpur",
      description:
        "Winner for best implementation and use case of the Gemini API at Electrothon 7.0, organized by NIT Hamirpur and Major League Hacking. Awarded a $350 cash prize.",
      image: "/icons/gemini.png",
      win: "Best Gemini API Use Case",
      links: [],
    },
    {
      title: "Hack-o-thon 2025",
      dates: "2025",
      location: "Chandigarh University",
      description:
        "Received the Achiever's Award for academic excellence and winning Hack-o-thon 2025.",
      image: "/chandigarh-university.png",
      win: "Achiever's Award",
      links: [],
    },
    {
      title: "ServiceNow Certified System Administrator",
      dates: "2025",
      location: "ServiceNow Learning Portal",
      description:
        "Certified System Administrator (CSA) certified through the ServiceNow Learning Portal.",
      image: "/icons/servicenow.png",
      links: [],
    },
  ],
} as const;
