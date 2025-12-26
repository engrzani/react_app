export const profileData = {
  name: "Your Name",
  title: "Full Stack Developer | Upwork Expert",
  bio: "Experienced developer specializing in web applications, AI integration, and modern JavaScript frameworks. 5+ years helping clients build amazing digital products.",
  
  avatar: "/assets/avatar.jpg", // Add your photo to public/assets/
  
  skills: [
    "React.js",
    "Node.js",
    "Python",
    "JavaScript/TypeScript",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "AWS/Netlify",
    "Git & GitHub",
    "AI Integration",
    "OpenAI API",
    "Responsive Design"
  ],
  
  experience: [
    {
      role: "Freelance Developer",
      company: "Upwork",
      period: "2020 - Present",
      description: "Building web applications and automation tools for clients worldwide"
    },
    {
      role: "Full Stack Developer",
      company: "Tech Company",
      period: "2018 - 2020",
      description: "Developed scalable web applications using modern tech stack"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Built a full-featured online store with payment integration",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "/assets/project1.jpg",
      link: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "AI Chatbot Integration",
      description: "Developed an intelligent customer service chatbot",
      technologies: ["Python", "OpenAI", "Flask", "React"],
      image: "/assets/project2.jpg",
      link: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Real-time collaborative task management system",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/assets/project3.jpg",
      link: "https://github.com/yourusername/project3"
    }
  ],
  
  achievements: [
    "100% Job Success Score on Upwork",
    "Top Rated Plus Badge",
    "50+ Successfully Completed Projects",
    "Rising Talent Badge"
  ],
  
  contact: {
    email: process.env.REACT_APP_EMAIL || "your-email@example.com",
    upwork: process.env.REACT_APP_UPWORK_PROFILE || "https://www.upwork.com/freelancers/~yourprofile",
    github: `https://github.com/${process.env.REACT_APP_GITHUB_USERNAME || 'yourusername'}`,
    telegram: process.env.REACT_APP_TELEGRAM || "",
    whatsapp: process.env.REACT_APP_WHATSAPP || ""
  },
  
  faq: [
    {
      question: "What's your hourly rate?",
      answer: "My rate varies by project complexity, typically ranging from $30-$80/hour. I'm happy to discuss fixed-price options for well-defined projects."
    },
    {
      question: "What technologies do you work with?",
      answer: "I specialize in React.js, Node.js, Python, and modern JavaScript frameworks. I also work with databases like MongoDB and PostgreSQL, and cloud platforms like AWS and Netlify."
    },
    {
      question: "What's your availability?",
      answer: "I'm available 40+ hours per week and work across multiple time zones. I typically respond within 2-4 hours during business hours."
    },
    {
      question: "Do you work on long-term projects?",
      answer: "Absolutely! I prefer long-term relationships and ongoing projects. I'm available for both short sprints and extended contracts."
    },
    {
      question: "Can you help with AI integration?",
      answer: "Yes! I have extensive experience integrating OpenAI, Claude, and other AI APIs into web applications. I can help with chatbots, content generation, and custom AI solutions."
    },
    {
      question: "What's your development process?",
      answer: "I follow agile methodology with regular updates, version control, testing, and clear documentation. Communication is key to my process."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, I offer maintenance packages and ongoing support for all projects. Your success is my priority."
    },
    {
      question: "How do you ensure code quality?",
      answer: "I write clean, maintainable code following industry best practices. I use version control, testing, code reviews, and comprehensive documentation."
    }
  ]
};
