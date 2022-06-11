const educations = [
  {
    id: 0,
    start: "Oct 2006",
    end: "Jul 2010",
    location: "Port harcourt, Nigeria",
    role: "Primary Education",
    organization: "New Covenant Group of Schools",
  },
  {
    id: 1,
    start: "Sep 2010",
    end: "Jul 2016",
    location: "Port Harcourt, Nigeria",
    role: "Secondary Education",
    organization: "Science and Arts Specialist College",
  },
  {
    id: 2,
    start: "Sep 2019",
    location: "Lagos, Nigeria",
    role: "BSc. Computer Science",
    organization: "Anchor University",
  },
];

const skills = [
  {
    id: 0,
    value: "HTML/CSS",
    theme: "dark:text-orange-400",
  },
  {
    id: 1,
    value: "React",
    theme: "dark:text-blue-600",
  },
  {
    id: 2,
    value: "JavaScript",
    theme: "dark:text-yellow-400",
  },
  {
    id: 3,
    value: "Git",
    theme: "dark:text-neutral-500",
  },
  {
    id: 4,
    value: "Node.js",
    theme: "dark:text-emerald-600",
  },
  {
    id: 5,
    value: "Tailwindcss",
    theme: "dark:text-sky-600",
  },
  {
    id: 6,
    value: "MySQL",
    theme: "dark:text-amber-800",
  },
  {
    id: 7,
    value: "MongoDB",
    theme: "dark:text-green-600",
  },
  {
    id: 8,
    value: "Problem-solving",
    theme: "dark:text-indigo-600",
  },
  {
    id: 9,
    value: "Laravel",
    theme: "dark:text-rose-600",
  },
  {
    id: 10,
    value: "Java",
    theme: "dark:text-orange-700",
  },
];

const hobbies = [
  {
    id: 0,
    value: "Photography",
    theme: "dark:text-yellow-600",
  },
  {
    id: 1,
    value: "Travel",
    theme: "dark:text-emerald-600",
  },
  {
    id: 2,
    value: "Sports",
    theme: "dark:text-sky-600",
  },
  {
    id: 3,
    value: "Listening-to-music",
    theme: "dark:text-amber-600",
  },
  {
    id: 4,
    value: "Gaming",
    theme: "dark:text-rose-600",
  },
  {
    id: 5,
    value: "Nature",
    theme: "dark:text-green-600",
  },
  {
    id: 6,
    value: "Animals",
    theme: "dark:text-indigo-600",
  },
];

const certificates = [
  {
    id: 1,
    title: "Java Beginner",
    organization: "SoloLearn",
    organizationLink: "https://www.sololearn.com",
    dateIssued: "October 08, 2020",
    expiryDate: "",
    credentialId: "19951669-1068",
    credentialLink: "https://www.sololearn.com/certificates/course/en/19951669/1068/landscape/png",
  },
  {
    id: 2,
    title: "SQL",
    organization: "SoloLearn",
    organizationLink: "https://www.sololearn.com",
    dateIssued: "November 27, 2020",
    expiryDate: "",
    credentialId: "19951669-1060",
    credentialLink: "https://www.sololearn.com/certificates/course/en/19951669/1060/landscape/png",
  },
  {
    id: 3,
    title: "SQL (BASIC)",
    organization: "HackerRank",
    organizationLink: "https://www.hackerrank.com",
    dateIssued: "April 17, 2021",
    expiryDate: "",
    credentialId: "E23ED2BE003A",
    credentialLink: "https://www.hackerrank.com/certificates/e23ed2be003a",
  },
  {
    id: 4,
    title: "Software Application Development - Java Platform",
    organization: "Loctech IT Training Institute",
    organizationLink: "https://loctechng.com",
    dateIssued: "September 27, 2019",
    expiryDate: "",
    credentialId: "RC 1450707",
    credentialLink: "",
  },
  {
    id: 5,
    title: "Create a Promotional Video using Canva",
    organization: "Coursera",
    organizationLink: "https://coursera.org",
    dateIssued: "January 02, 2022",
    expiryDate: "",
    credentialId: "VJUZS7ZAN6BF",
    credentialLink: "https://coursera.org/verify/VJUZS7ZAN6BF",
  },
  {
    id: 6,
    title: "Project Writing And The Use Of Latex",
    organization:
      " Anchor University Laboratory for Interdisciplinary Statistical Science and Data Analysis (AULISSDA)",
    organizationLink: "https://aul.edu.ng",
    dateIssued: "February, 2022",
    expiryDate: "",
    credentialId: "Coming soon...",
    credentialLink: "",
  },
];

import eVotingAppImage from "../../public/uploads/certs/cert01.png"
import myPortfolioAppImage from "../../public/uploads/certs/cert01.png"
import portfolioAppImage from "../../public/uploads/certs/cert01.png"
import renicAppImage from "../../public/uploads/certs/cert01.png"
import txtEdAppImage from "../../public/uploads/certs/cert01.png"

const works = [
  {
    id: 1,
    tag: "typescript",
    url: "https://allwells.vercel.app",
    image: myPortfolioAppImage,
    title: "My portfolio",
    description: "This is my portfolio app. This was built with Nextjs and Typescript, Tailwindcss and Nodejs.",
  },
  {
    id: 2,
    tag: "java",
    url: "https://github.com/allwells/hospital-management-system",
    image: "",
    title: "Hospital Management System",
    description: "Hospital Management System is a desktop-based application software that was built with Java Swing.",
  },
  {
    id: 3,
    tag: "typescript",
    url: "https://renic.vercel.app",
    image: renicAppImage,
    title: "Renic Branding",
    description: "Renic Branding is a professional branding agency that prioritize distinguishing their customers from the competition and helping their customers to connect better with their audience through strategy, design and marketing. This was built with Nextjs.",
  },
  {
    id: 4,
    tag: "javascript",
    url: "https://unique.vercel.app",
    image: portfolioAppImage,
    title: "Portfolio App",
    description: "This is a portfolio app built with Reactjs.",
  },
  {
    id: 5,
    tag: "laravel",
    url: "https://github.com/allwells/e-voting",
    image: eVotingAppImage,
    title: "e-Voting",
    description: "e-Voting is a online voting platform built with Laravel and Tailwindcss.",
  },
  {
    id: 6,
    tag: "electron",
    url: "https://github.com/allwells/txt-ed",
    image: txtEdAppImage,
    title: "Txt-Ed",
    description: "Txt-Ed is a simple desktop-based text editor application built with Electron.",
  }
]

const contacts = [
  {
    id: 1,
    username: "allwells.official",
    platform: "Facebook",
    url: "https://facebook.com/allwells.official"
  },
  {
    id: 2,
    username: "allwell_festus",
    platform: "Twitter",
    url: "https://twitter.com/allwell_festus"
  },
  {
    id: 3,
    username: "allwells_official",
    platform: "Instagram",
    url: "https://instagram.com/allwells_official"
  },
  {
    id: 4,
    username: "allwells",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/allwells"
  },
  {
    id: 5,
    username: "allwells",
    platform: "Telegram",
    url: "https://t.me/allwells"
  },
  {
    id: 6,
    username: "aleenfestus@gmail.com",
    platform: "Gmail",
    url: "mailto:aleenfestus@gmail.com"
  },
]

export { educations, skills, hobbies, certificates, works, contacts };
