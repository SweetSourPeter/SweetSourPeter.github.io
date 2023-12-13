import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  roundblock,
  tal,
  meechu,
  ant,
  homer3,
  carrent,
  jobit,
  tripguide,
  threejs,
  covidProject,
  cicdProject,
  meechuProject,
  ticketProject,
  blogProject,
  zillowProject,
  pencraftProject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data \n Scientist",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Moblie Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science - Intern",
    company_name: "Tianhong Asset Management (Ant Group)",
    icon: ant,
    iconBg: "#383E56",
    date: "July 2023 - Sept 2023",
    link: "https://www.linkedin.com/company/tianhong-asset-management/",
    points: [
      "Contribute to the training and development of a customer service chatbot with NLP.",
      "Improve customer experience by answering investing questions using LLM from the company knowledge base.",
      "Pre-processing finance training data using Spark and Pandas in Python.",
      "Integrate NL2SQL with Langchain GPT, and test on WikiSQL datasets, generate over 15k rows of SQL queries for training.",
      "Perform comparative analysis on various models. Identify 50% improvements in fine-tuned models.",
    ],
  },
  {
    title: "Backend R&D - Intern",
    company_name: "Tal Education Group",
    icon: tal,
    iconBg: "#c7e7ed",
    date: "May 2023 - July 2023",
    link: "https://www.linkedin.com/company/taleducationgroup/",
    points: [
      "Develop an AI Virtual Teacher using Python, and achieve over 10,000 daily active users on the MVP launch.",
      "Implement an automated training flow for AI modules. Engineered server logging and failure alert.",
      "Implement multiprocessing technique to Improve video merging speed by approximately 30%.",
      "Implement Kafka Apache for video queue and transfer. Use local cache to prevent message loss and duplication.",
      "Utilize Tencent Cloud Object Storage (COS) to achieve video storage.",
      "Manage two Ubuntu GPU servers for training and utilize Docker for containerized deployment.",
    ],
  },
  {
    title: "Web Developer - Intern",
    company_name: "RoundBlock",
    icon: roundblock,
    iconBg: "#c7cded",
    date: "Jan 2023 - May 2023",
    link: "https://www.linkedin.com/company/roundblock-technology/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IOS & Android - Founder",
    company_name: "Meechu",
    icon: meechu,
    iconBg: "#ebc39d",
    date: "Sept 2020 - Dec 2021",
    link:
      "https://www.bu.edu/articles/2021/students-new-app-meechu-connects-classmates-notifies-about-open-seats/",
    points: [
      "Lead the Meechu team to win 3rd place in the 2021 New Venture Competition. ",
      "Develop an auto-track system for over 5,000 Boston University courses using Selenium and deploy on AWS. ",
      "Develop the IOS and Android mobile app with Flutter. Deliver 5 front-end functions with over 20 pages.",
      "Build the backend using Flask, MongoDB, and AWS. Use Firebase as a database and web hosting solution.",
      "Contribute to 80% of code and commits on GitHub. Send out 20,000 monthly emails and receive over 3000 users.",
    ],
  },
  {
    title: "Software Research",
    company_name: "Homer3",
    icon: homer3,
    iconBg: "#abcfb6",
    date: "Sept 2020 - Dec 2021",
    link: "https://openfnirs.org/software/homer/homer3/",
    points: [
      "Achieve accuracy improvement from 60% to near 100% using 20+ open-source brain activity signals.",
      "Reconstruct brain signal data structure and create visualization GUI using Matlab.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ticket Booking",
    description:
      "Spring Boot application that enables user to book, search and cancel tickets. It also allows admin to add, update and delete movies and theaters.",
    tags: [
      {
        name: "spring boot",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: ticketProject,
    source_code_link:
      "https://github.com/SweetSourPeter/onlineFilm-java-web-v2",
  },
  {
    name: "US housing price Prediction",
    description:
      "Based on 7.5 million Real Estate data, this project aims to improve the accuracy of Zestimates by traning different LM models to predict and evaluate Zillow’s Zestimate.",
    tags: [
      {
        name: "data-cleaning",
        color: "blue-text-gradient",
      },
      {
        name: "modeling",
        color: "green-text-gradient",
      },
      {
        name: "param tuning",
        color: "pink-text-gradient",
      },
    ],
    image: zillowProject,
    source_code_link: "",
  },

  {
    name: "AI Blog Writer",
    description:
      "A completly automated blog writer using GPT-3.5. It can not only generate blogs based on youtube videos, but also calculate key frames based on subtitles to extract images.",
    tags: [
      {
        name: "gpt-3.5 restapi",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "Whisper",
        color: "pink-text-gradient",
      },
    ],
    image: blogProject,
    source_code_link: "",
  },

  {
    name: "Shopify Web App",
    description:
      "A shopify web app that allows merchants to generate store related SEO contents and blogs. It intergrates with Google trending keywords to optimize SEO.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "shopify",
        color: "green-text-gradient",
      },
      {
        name: "SEO",
        color: "pink-text-gradient",
      },
    ],
    image: pencraftProject,
    source_code_link: "https://pencraft.earlybird.rocks/",
  },

  {
    name: "Real-time Chat & Scrap ",
    description:
      "​An app that matches college students with their classmates. It also notifies users when there are open seats in their favorite classes by scrapping school website.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "nosql",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: meechuProject,
    source_code_link:
      "https://github.com/SweetSourPeter/MINISeniorDesign-CovidAPP",
  },
  {
    name: "CI/CD Pipeline",
    description:
      "CI/CD pipeline for any scale of Flask applications. It implements unit testing, and deployment automation.",
    tags: [
      {
        name: "github actions",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "openshift",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "pytest",
        color: "green-text-gradient",
      },
    ],
    image: cicdProject,
    source_code_link:
      "https://github.com/SweetSourPeter/Building_CI_CD_for_API",
  },
  {
    name: "Covid App",
    description:
      "Moblie application that tracks the spread of COVID-19 in real time. It also allows users log symptoms and get notify admin if they are tested positive.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nosql",
        color: "pink-text-gradient",
      },
    ],
    image: covidProject,
    source_code_link:
      "https://github.com/SweetSourPeter/MINISeniorDesign-CovidAPP",
  },
];

export { services, technologies, experiences, testimonials, projects };
