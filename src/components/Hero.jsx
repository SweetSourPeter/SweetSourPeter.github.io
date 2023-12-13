import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, Space } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <div className="flex items-center">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm
              <span className="text-[#915eff]"> Yaopu</span>
            </h1>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develope React & Flutter frontend
            <br className="sm:block hidden"></br>
            Python & Spring Boot backend
            <br className="sm:block hidden"></br>
            Welcome to my space
            <br></br>
            <br></br>
            Click
            <span className="text-[#915eff]"> Sphere </span>
            to begin 👇
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className='absolute top-60 xs:top-50 sm:top-50 w-full h-[80vh] sm:h-[100vh] xs:h-[50vh]'>
        <a href="#about">
        <Space/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
