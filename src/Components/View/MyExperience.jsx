import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import useActiveSection from "../hook/useActiveSection";
function MyExperience({ Exp }) {
  const { ref } = useActiveSection("Experience", 0.75);
  const work_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    </svg>
  );

  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="pt-8 scroll-mt-28 container mx-auto "
      id="experience"
    >
      <motion.h1
        variants={ExpTitle}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className=" text-lg text-center mb-4 font-bold"
      >
        My Experience
      </motion.h1>
      <VerticalTimeline lineColor="grey">
        
        {Exp.map(exp=><VerticalTimelineElement
          contentStyle={{ background: " #f3f4f6", border: "none" }}
          className="vertical-timeline-element--education "
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          date={`${exp.date}`}
          dateClassName="text-slate-500 mx-0 lg:mx-3"
          icon={work_icon}
        >
          <h1 className="text-slate-700 font-bold ">
            <header>{exp.company}</header>
            <small className="text-slate-600">{exp.position}</small>
          </h1>
          <div className="my-1 flex flex-wrap gap-2">
          {exp.projects.map((m,index)=><small key={index} className="bg-slate-700 text-shadow-xl rounded-lg px-2 py-1 backdrop:blur-4xl shadow-md bg-opacity-10  text-slate-700  ">{m}</small>)}
          </div>
          <ul className="my-1">
            {exp.responsesity.map((m,index)=>
              <li key={index} className="font-mono text-slate-700 py-2 first:mt-2 text-pretty text-xs leading-7 text-balence flex">
                {m}
              </li>
            )}
          </ul>
        </VerticalTimelineElement>)}
      </VerticalTimeline>
    </div>
  );
}

export default MyExperience;
