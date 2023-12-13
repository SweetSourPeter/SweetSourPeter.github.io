import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    > 
    <a href="#work">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software developer with expertise in Java, Python, and
        JavaScript, along with proficiency in frameworks such as React, Spring
        Boot, and Docker. I hold a Bachelor's degree in Computer Engineering from{" "}
        <a
          className="underline text-[#915eff]"
          href="https://www.bu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boston University
        </a>{" "}
        and a Master's degree in Electrical Engineering from{" "}
        <a
          href="https://www.upenn.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#915eff]"
        >
          University of Pennsylvania
        </a>
        . Known for my quick learning ability, I collaborate closely with
        colleagues to create efficient, scalable, and user-friendly solutions
        that address real-world problems. {" "}
        <a
          href="https://www.linkedin.com/in/yaopu-wang-seeking-ng-sde-43824b249/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#915eff]"
        >
         Let's connect!
        </a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
