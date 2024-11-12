export const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Responsible for developing and maintaining the user interface of web applications.",
    candidatesApplied: 2,
    candidates: [
      {
        id: 101,
        name: "Alice Johnson",
        resume: "https://example.com/resumes/alice_johnson.pdf",
        applicationDate: "2024-11-01",
        status: "Under Review",
        details: {
          email: "alice.johnson@example.com",
          contact: "123-456-7890",
          skills: ["React", "JavaScript", "CSS"],
          experience: "3 years",
        },
      },
      {
        id: 102,
        name: "Bob Smith",
        resume: "https://example.com/resumes/bob_smith.pdf",
        applicationDate: "2024-11-03",
        status: "Interview Scheduled",
        details: {
          email: "bob.smith@example.com",
          contact: "987-654-3210",
          skills: ["React", "HTML", "CSS"],
          experience: "2 years",
        },
      },
    ],
    assessment: [
      {
        question: "What is the virtual DOM in React?",
        options: [
          "A real DOM structure",
          "A copy of the actual DOM",
          "JavaScript representation of the DOM",
          "None of the above",
        ],
        answer: "JavaScript representation of the DOM",
      },
      {
        question: "Which of the following is a React hook?",
        options: ["useFetch", "useEffect", "useAPI", "None of the above"],
        answer: "useEffect",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Responsible for developing server-side logic and integration with databases.",
    candidatesApplied: 1,
    candidates: [
      {
        id: 103,
        name: "Charlie Brown",
        resume: "https://example.com/resumes/charlie_brown.pdf",
        applicationDate: "2024-11-02",
        status: "Under Review",
        details: {
          email: "charlie.brown@example.com",
          contact: "555-123-4567",
          skills: ["Node.js", "Express", "MongoDB"],
          experience: "4 years",
        },
      },
    ],
    assessment: [
      {
        question: "What is middleware in Express?",
        options: [
          "A function to handle errors",
          "A function that processes requests",
          "A type of database",
          "None of the above",
        ],
        answer: "A function that processes requests",
      },
      {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
        answer: "MongoDB",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description:
      "Responsible for designing user interfaces and improving user experiences.",
    candidatesApplied: 1,
    candidates: [
      {
        id: 104,
        name: "Dana Lee",
        resume: "https://example.com/resumes/dana_lee.pdf",
        applicationDate: "2024-11-05",
        status: "Under Review",
        details: {
          email: "dana.lee@example.com",
          contact: "111-222-3333",
          skills: ["Figma", "Sketch", "Adobe XD"],
          experience: "5 years",
        },
      },
    ],
    assessment: [
      {
        question: "What is the primary goal of UX design?",
        options: [
          "Create aesthetically pleasing visuals",
          "Maximize user satisfaction",
          "Ensure high performance",
          "Reduce development costs",
        ],
        answer: "Maximize user satisfaction",
      },
      {
        question:
          "Which of the following tools is commonly used for UI/UX design?",
        options: ["VS Code", "Figma", "Webpack", "None of the above"],
        answer: "Figma",
      },
    ],
  },
];
