import React from "react";
import { color, motion } from "framer-motion";
import useActiveSection from "../hook/useActiveSection";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education({ edu, certificate }) {
  const acid_icon = (
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
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );

  const { ref } = useActiveSection("Education", 0.75);
  const ExpTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  const list = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.1 },
  };
  const item = {
    initial: { x: -100 },
    animate: { x: 0, transition: { delay: 0.02 } },
  };
  return (
    <div
      ref={ref}
      className="pt-8 scroll-mt-72 container mx-auto"
      id="education"
    >
      <div className=" flex flex-col items-center justify-center gap-5">
        <motion.h1
          variants={ExpTitle}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Education
        </motion.h1>
        <VerticalTimeline lineColor="grey">
          <VerticalTimelineElement
            contentStyle={{ background: " #f3f4f6", border: "none" }}
            className="vertical-timeline-element--education "
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            date={`${edu.start} to ${edu.end}`}
            dateClassName="text-slate-500 mx-0 lg:mx-3"
            icon={acid_icon}
          >
            <h1 className="text-slate-700 font-bold ">
              <span>{edu.major}</span>
              <span>({edu.status})</span>
            </h1>
            <p className="text-slate-700 font-normal">{edu.school}</p>
          </VerticalTimelineElement>
          {certificate.map((m, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: " #f3f4f6", border: "none" }}
              className="vertical-timeline-element--education "
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              date={`${m.year}`}
              dateClassName="text-slate-500 mx-0 lg:mx-3"
              icon={acid_icon}
            >
              <h1 className="text-slate-700 font-bold ">
                <span>{m.title}</span>
              </h1>
              <p className="text-slate-700 font-normal">{m.center}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
