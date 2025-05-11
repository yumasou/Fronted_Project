import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../Layout/Header";
import MySkills from "./MySkills";
import MyExperience from "./MyExperience";
import AboutMe from "./AboutMe";
import Objective from "./Objective";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Footer from "./Footer";

const aboutMe = [
  { index: "Name", value: "Hein Htet Paing" },
  { index: "Date Of Birth", value: "06-10-1999" },
  { index: "Nationality", value: "Myanmar" },
  { index: "Gender", value: "Male" },
  { index: "Marital Status", value: "Single" },
  { index: "Languages", value: "Myanmar/English" },
  { index: "Passport", value: "MH198276" },
  { index: "Expected Salary", value: "30,000Baht" },
  {
    index: "Address",
    value: "Ramkhamhaeng-50 rd, Hua Mak, Bangkapi, Thailand",
  },
];

const skills = [
  "React",
  "Redux",
  "Shadcn/ui",
  "React Query",
  "TypeScript",
  "Express",
  "Node",
  "MongoDB",
  "SQLite",
  "Prisma",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Tailwind CSS",
  "WebSocket",
  "Git",
  "API",
  "Framer Motion",
  "PM2",
  "Nginx",
  "EC2",
  "S3",
];
const myExps = [
  {
    position: "Junior FrontEnd Developer",
    date: "MAR 2023 to Nov 2023",
    company: "Promes MM",
    projects: ["Billing App", "Real Estate App"],
    responsesity: [
      "Collaborate with a dynamic team to design and implement engaging and responsive dashboards.",
      "Develop APIs to support mobile applications, ensuring efficient data flow and communication between the frontend and backend.",
      "Collaborate with backend developers to integrate frontend components seamlessly with the server-side logic.",
      "Stay up-to-date with industry trends and best practices, bringing innovative solutions to the development process.",
    ],
  },
  {
    position: "IT Assistance",
    date: "May 2024 to December 2024",
    company: "JM505 Computer Sales & Service",
    projects: [],
    responsesity: [
      "Selling computer (Laptop & Desktop) hardware and related accessories.",
      "Packing and preparing Notebooks to deliver across every part of the country and oversea.",
      "Diagnostics and troubleshooting (hardware or software issues).",
      "Virus/malware removal and data recovery.",
      "Upgrades (RAM, storage, GPU) and custom builds.",
      "Maintenance (hardware cleaning, thermal paste replacement, etc.).",
    ],
  },
  {
    position: "Self-Taught Full-Stack Developer",
    date: "Jan 2025 to Present",
    company: "Self-Employee",
    projects: ["Social App", "Role Permission Playground", "Restaurant App"],
    responsesity: [
      "Independently studied and explored modern technologies through consistent self-guided learning and hands-on experimentation.",
      "Researched and applied the use of AI tools (e.g., GitHub Copilot, ChatGPT) to enhance productivity, generate boilerplate code, and debug more efficiently.",
      "Learned and practiced TypeScript for type-safe JavaScript development in both frontend (React) and backend (Node.js) environments.",
      "Explored various frontend and backend packages, suchas Redux Toolkit, Prisma, and Express, integrating them into small-scale applications.",
      "Transitioned from tutorials to real-world projects to solidify understanding and simulate real development scenarios, including building full-stack CRUD apps and API integrations.",
      "Gained experience in version control (Git), RESTful API design, and deploying projects to cloud platforms for testing and iteration.",
    ],
  },
];

const objective =
  "Motivated web developer with a passion for creating innovative and user-friendly websites, seeking to leverage technical expertise to build scalable and efficient solutions. Committed to contributing effectively to a dynamic development team and delivering high-quality, user-centric web applications while staying current with evolving industry trends.";

const edu = {
  school: "University of Computer Studies",
  town: "Monywa",
  start: "Dec 2015",
  end: "Oct 2019",
  status: "undergraduate",
  major: "Computer Science",
};
const certificate = [
  {
    title: "Practical A+",
    year: "2016",
    center: "I-Campus Complete IT Training Solution",
  },
  {
    title: "Professional Web Developer Course",
    year: "2020",
    center: "Fairway Technology",
  },
];
const projects = [
  {
    title: "Restaurant Management System",
    image_url: "/images/RestaurantApp.png",
    description:
      "This is my own idea project and I want to implement it to production stage. I still implementing this project by myself all of my free time. Some of tech stack and packages are used by project necessary that I haven't familier and those got me more experiences in packages and server integration. I admit I still lack in experience of teamwork and in production development, So this project taugh me a lot about security issue and some principles of production development. Project is still in progess yet and I have develop it for testing purpose in AWS Ec2 instance, If you interest click and follow thought guideline..",
    language: [
      "TypeScript",
      "React",
      "Redux",
      "React Query",
      "React Router",
      "Tailwind",
      "Shadcn/ui",
      "Zod",
      "Motion",
      "Express",
      "bcrypt",
      "socket.io",
      "Prisma",
      "Mongodb",
      "JsonWebToken",
      "Ec2",
      "S3",
    ],
    link: "http://13.211.67.255:3000",
  },
  {
    title: "Role Permission Playground",
    image_url: "/images/RolePermssionPlayGround.png",
    description:
      "This is a playground for role permission, you can assign permission to each role of user, and you can see different permission effect on the messages and all the permssion, role and users are real time updated from fully CRUD operation from backend.",
    language: [
      "TypeScript",
      "React",
      "React Query",
      "Tailwind",
      "Shadcn/ui",
      "Express",
      "Prisma",
      "SQLite",
      "JsonWebToken",
    ],
    link: "http://13.211.67.255:2500",
  },
  {
    title: "Social App",
    image_url: "/images/SocialAppwithReact.png",
    description:
      "A social application that including features like register, login, add post, delete post, add comment, delete comment, like post, like comment, follow, unfollow, chat, reat-time notification and etc... . After relocated in Bankgok, I worked as IT assistance in Bangkok. This is my first app after quieting IT assistance role and decided to be profession in web development in both frontend and backend",
    language: [
      "React",
      "React Router",
      "React Query",
      "Tailwind",
      "Express",
      "Prisma",
      "SQLite",
      "JsonWebToken",
      "Socket.io",
    ],
    link: "https://frontend-app-k86t.onrender.com",
  },
  {
    title: "Sample Website",
    image_url: "/images/funny_poo.png",
    description:
      "This is sample website for example, this was also a practied app for me , I took some reference from internet and implement it as SPA App",
    link: "https://funny-poo.netlify.app/",
    language: ["React", "React Router", "Bootstrap", "JavaScript", "CSS"],
  },
  {
    title: "Weather App",
    image_url: "/images/weather_app.png",
    description:
      "This is weathering status app , you can know the weather status of every country searching by city name with exactly because when I try to develop this app, that was the first time for me handling api and integration , there is an error capturing bug in Api integration in this app ",
    language: ["React", "axios", "api", "Bootstrap", "JavaScript", "CSS"],
    link: "https://weathering-app-react.netlify.app/",
  },
  {
    title: "Drum kit",
    image_url: "/images/drum_kid.png",
    description:
      "This is drum kit application created by using Javascript only . I took some reference from internet and try to improve my skills by developing this",
    language: ["JavaScript", "CSS", "HTML"],
    link: "https://drumkidapp.netlify.app/",
  },
  {
    title: "Note App",
    image_url: "/images/notewithReact.png",
    description:
      "This is simple Note application using by React and keeping them in localstorage. I have develop this mini project for the purpose of practicing my skills, of course some CSS issue still need to solve is this",
    language: ["React", "Bootstrap", "CSS", "LocalStorage"],
    link: "https://note-application-with-react.netlify.app/",
  },
];
function Home() {
  return (
    <AnimatePresence>
      <motion.div>
        <div className="w-full overflow-hidden relative ">
          <div className="rounded-lg  -z-10 w-[20rem] fixed overflow-hidden top-[25vh] left-10 bg-rose-500 h-[50vh] bg-opacity-50 blur-[20rem]"></div>
          <div className="rounded-lg -z-10 w-[20rem] fixed overflow-hidden top-5 rignt-20 translate-x-full  bg-fuchsia-500 h-[25vh] blur-[20rem] bg-opacity-50 "></div>

          <div className="rounded-lg  -z-10 w-[20rem] fixed overflow-hidden top-5 right-20 -translate-x-full bg-lime-500 h-[25vh] blur-[20rem] bg-opacity-50 "></div>
          <div className="rounded-lg  -z-10 w-[20rem] fixed overflow-hidden top-[55vh] right-10 bg-cyan-500 h-[50vh] blur-[20rem] bg-opacity-50 "></div>
        </div>
        <motion.div className="mx-5 sm:mx-52">
          <Header />
          <AboutMe me={aboutMe} />
          <Contact />

          <Introduction />
          <Objective objects={objective.split("")} />
          <Education edu={edu} certificate={certificate} />
          <MySkills skills={skills} />
          <MyExperience Exp={myExps} />
          <Projects projects={projects} />
          <Footer />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
