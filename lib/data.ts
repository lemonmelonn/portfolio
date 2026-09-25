import profileJson from "@/data/profile.json";
import projectsJson from "@/data/projects.json";
import workJson from "@/data/work_experience.json";
import skillsJson from "@/data/skills.json";
import eduJson from "@/data/edu.json";
import competitionsJson from "@/data/competitions.json";
import extracurricularJson from "@/data/extracurricular.json";

/**
 * Prefix a public asset path with the deploy base path so it resolves
 * correctly under GitHub Pages (e.g. "/portfolio") and locally ("").
 * Usage: asset("/assets/profile.jpeg")
 */
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

export type Profile = {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  featured?: boolean;
};

export type WorkExperience = {
  position: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string[];
};

export type Education = {
  qualification: string;
  institution: string;
  grade?: string;
  cgpa?: string;
  achievement?: string;
  date?: string;
  start_date?: string;
  end_date?: string;
  relevant_modules?: string[];
};

export type Competition = {
  name: string;
  result: string;
  date?: string;
  start_date?: string;
  end_date?: string;
  description: string;
};

export type Extracurricular = {
  position: string;
  start_date: string;
  end_date: string;
  description: string[];
};

export type Skills = {
  technical_skills_and_tools: string[];
  soft_skills: string[];
};

export const profile = profileJson as Profile;
export const projects = projectsJson as Project[];
export const workExperience = workJson as WorkExperience[];
export const education = eduJson as Education[];
export const competitions = competitionsJson as Competition[];
export const extracurricular = extracurricularJson as Extracurricular[];
export const skills = skillsJson as Skills;

/** Grouped skill categories derived from the flat skills list for nicer badge sections. */
export const skillCategories: { title: string; items: string[] }[] = [
  {
    title: "Languages & Frameworks",
    items: ["Python", "Dash", "Streamlit", "R Programming", "SQL", "Java"],
  },
  {
    title: "ML & AI",
    items: [
      "Machine / Deep Learning",
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "Natural Language Processing",
      "Hyperparameter Tuning",
      "Time Series Forecasting",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "Data Pre-Processing",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Data Visualization",
      "Text Analytics",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "SAS Viya",
      "Power BI",
      "n8n Automation",
      "Git/GitHub",
      "Microsoft Excel",
      "REST/API Integration",
    ],
  },
];
