import React from "react";
import aboutimg from "../assets/Aboutai.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <motion.img
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        src={aboutimg}
        className="mt-[100px]  lg:w-full h-[50%] md:w-[70%] md:h-[70%] lg:h-auto "
      />

      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col h-[100%] m-[20px] lg:mt-[150px] md:m-[80px] p-9 shadow-xl shadow-slate-400 border-2 border-blue-500 rounded-xl"
      >
        <h1 className=" text-center font-bold text-[20px] md:text-[35px] lg:text-[50px]">
          Who are we?
        </h1>
        <h1 className="text-[12px] md:text-[24px] lg:text-[36px] font-thin mt-4 text-center ">
          Founded in 2017, Bluetick Consultants is a technology-driven firm that
          has made a significant impact in the Indian and US startup ecosystems.
        </h1>

        <h1 className="text-[12px] md:text-[24px] lg:text-[36px] font-thin mt-4 text-center ">
          {" "}
          Transforming Enterprises with cutting-edge, scalable, privacy-focused
          Generative AI Solutions
        </h1>

        <a
          href="https://www.bluetickconsultants.com/generative-ai.html"
          target="_blank"
          className="text-center mt-4"
        >
          <button className="border-2 font-medium border-blue-500 hover:bg-blue-500 hover:text-white text-[12px]  md:text-[20px] text-blue-500 p-1 ">
            Know more
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default About;
