/**
 * Skills Data Source
 * Centralized list of technical proficiencies and soft skills.
 */

export const skillCategories = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Core languages for algorithmic problem solving and development.",
    icon: "💻",
    accentBorder: "border-orange-500",
    badgeBg: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "C"
    ]
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    icon: "🎨",
    accentBorder: "border-indigo-500",
    badgeBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Tailwind CSS"
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description: "Server architecture, RESTful API design, and backend business logic.",
    icon: "⚙️",
    accentBorder: "border-purple-500",
    badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    skills: [
      "Node.js",
      "Express.js"
    ]
  },
  {
    id: "database",
    title: "Database",
    description: "Data modeling, schema design, and persistent storage.",
    icon: "🗄️",
    accentBorder: "border-emerald-500",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    skills: [
      "MongoDB"
    ]
  },
  {
    id: "tools-platforms",
    title: "Tools & Platforms",
    description: "Version control, API testing, and modern developer environments.",
    icon: "🛠️",
    accentBorder: "border-cyan-500",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code"
    ]
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    description: "Interpersonal communication, collaborative mindset, and adaptability.",
    icon: "🤝",
    accentBorder: "border-pink-500",
    badgeBg: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Adaptability",
      "Continuous Learning",
      "Team Collaboration",
      "Communication",
      "Time Management"
    ]
  }
];

export default skillCategories;

