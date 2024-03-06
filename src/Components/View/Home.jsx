import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import MySkills from "./MySkills";
import MyExperience from "./MyExperience";
import AboutMe from "./AboutMe";
import Objective from "./Objective";
import Education from "./Education";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";
const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "React.JS",
  "Node.JS",
  "Express.JS",
  "MongoDB",
  "Redux",
  "Git",
  "API",
  "RESTful API",
  "Framer Motion",
];
const myExps = [
  "Collaborate with a dynamic team to design and implement engaging and responsive dashboards.",
  "Develop APIs to support mobile applications, ensuring efficient data flow and communication between the frontend and backend.",
  "Collaborate with backend developers to integrate frontend components seamlessly with the server-side logic.",
  "Stay up-to-date with industry trends and best practices, bringing innovative solutions to the development process",
];
const objective =
  "Highly skilled and motivated web developer in front-end and back-end development , seeking to leverage expertise in MERN stack to contribute effectively to  your development team. Committed to delivering high-quality, user-centric web solutions while continuously expanding knowledge and staying abreast of emerging trends in web development";
const personal = "";
const edu = {
  school: "University of Computer Studies",
  town: "Monywa",
  start: "Dec 2015",
  end: "Oct 2019",
  status: "undergraduate",
  major: "computer science",
};
const certificate = [
  {
    title: "Practical A+",
    year: "2016",
    center: "I-Campus Complete IT Training Solution",
  },
  {
    title: "Professional Web Developer",
    year: "2020",
    center: "Fairway Technology",
  },
];
const projects = [
  {
    title: "Sample Website",
    image_url:"/images/funny_poo.png",
    description: "This is sample website for example",
    link: "https://funny-poo.netlify.app/",
    language: "React,Bootstrap",
  },
  {
    title: "Weather App",
    image_url:"/images/weather_app.png",
    description:
      "This is weathering status app , you can know the weather status of every country searching by city name with exactly",
    language: "React,axios,api,Bootstrap",
    link: "https://weathering-app-react.netlify.app/",
  },
  {
    title: "Drum kit",
    image_url:"/images/drum_kid.png",
    description:
      "This is drum kit application created by using Javascript only",
    language: "JavaScript,CSS",
    link: "https://drumkidapp.netlify.app/",
  },
  {
    title: "Note App",
    image_url:"/images/note_app.png",
    description: "This is simple Note application using by React",
    language: "React,CSS,LocalStorage",link:"https://note-application-with-react.netlify.app/"
  },
];
function Home() {
  const containerVarient = {
    initial: { opacity: 0 },
    mate: {
      opacity: 1,
      transiton: { type: "spring", delay: 0.3, duration: 0.5 },
    },
    close: { opacity: 0, transiton: { duration: 0.5, when: "afterChildren" } },
  };
  return (
    <motion.div
      variants={containerVarient}
      initial="initial"
      animate="mate"
      exit="close"
      // style={{scale}}
    >
      <motion.div
      // style={{scaleY:scrollYProgress}}
      >
        <AboutMe />
        <Objective objects={objective.split("")} />
        <Contact />
        <MySkills skills={skills} />
        <MyExperience exp={myExps} />
        <Education edu={edu} />
        <Certifications certificate={certificate} />
        <Projects projects={projects} />
      </motion.div>
    </motion.div>
  );
}

export default Home;
