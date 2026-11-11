/**
 * Experience Data Source
 * Centralized data for professional experience, internships, and organizing roles.
 */

export const experienceData = [
  {
    id: "ibm-internship",
    organization: "IBM",
    role: "Web Development Intern",
    duration: "July 2025 – August 2025",
    type: "Virtual Internship",
    description: [
      "Developed a responsive Food Ordering Web Application using React.js, Vite, Tailwind CSS, and JavaScript, building reusable components and interactive user interfaces.",
      "Implemented frontend state and event handling to manage user interactions, dynamic content, and application workflows.",
      "Designed responsive layouts with Tailwind CSS and optimized frontend performance for consistent functionality across screen sizes and browsers.",
      "Recognized among top-performing interns and awarded a ₹4,000 performance-based stipend for successful project completion."
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    achievement: {
      label: "Special Achievement",
      detail: "Awarded a ₹4,000 performance-based stipend for top-performing internship project completion"
    },
    organizationLink: null,
    badgeColor: "indigo"
  },
  {
    id: "elevance-skills-training",
    organization: "Elevance Skills",
    role: "Full-Stack Developer Trainee",
    duration: "June 5, 2026 – August 5, 2026",
    type: "Full-Stack Development Training",
    description: [
      "Completed a two-month Full-Stack Development training program.",
      "Developed a personal YouTube-inspired full-stack application using the MERN stack."
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    achievement: null,
    organizationLink: null,
    badgeColor: "purple"
  },
  {
    id: "doradao-hackathon",
    organization: "DoraDAO",
    role: "Hackathon Organizing Core Team Member",
    event: "Hacktoberfest Hackathon",
    location: "Agra, India",
    duration: null, // Date deliberately omitted per instructions
    type: "Hackathon Organizing Experience",
    description: [
      "Served as a member of the core organizing team.",
      "Coordinated participant registrations and participation.",
      "Contributed to organizing the Hacktoberfest hackathon in Agra."
    ],
    technologies: [],
    achievement: null,
    organizationLink: {
      url: "https://www.linkedin.com/company/connectdoradao/",
      label: "View Organization"
    },
    badgeColor: "cyan"
  }
];

export default experienceData;
