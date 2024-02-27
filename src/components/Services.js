import React from "react";
import scale from "../assets/scale.jpg";
import security from "../assets/security.png";
import end from "../assets/end2end.png";
import oppo from "../assets/aioppo.png";
import Images from "../Data/Images";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Services = () => {
  return (
    <div className="flex flex-col lg:bg-white bg-white pl-14 lg:pl-0 lg:items-center w-9/10 mt-10 ">
      <h1 className="text-center font-bold text-blue-500 text-[20px] md:text-[35px] lg:text-[50px] ">
        - WHAT WE OFFER -
      </h1>
      <div className="flex flex-col pt-4 items-center gap-4 ">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center lg:w-[80%] h-[100%] m-[30px] border-4 border-blue-500 hover:bg-blue-500 hover:bg-opacity-30 hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-200 rounded-2xl"
        >
          <img
            className="w-[140px] h-[100px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[400px]  "
            src={oppo}
            alt="sec"
          ></img>
          <h1 className="text-[12px] font-thin md:text-[18px] lg:text-[25px] flex text-center items-center ">
            Unlock the potential of generative AI by identifying tailored
            opportunities for integration within your organization, ensuring a
            strategic and efficient approach to AI implementation.
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center lg:w-[80%] h-[100%] m-[30px] border-4 border-blue-500 hover:bg-blue-500 hover:bg-opacity-30 hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-200 rounded-2xl"
        >
          <img
            className="w-[140px] h-[100px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[400px]  "
            src={security}
            alt="sec"
          ></img>
          <h1 className="text-[12px] font-thin md:text-[18px] lg:text-[25px] flex text-center items-center ">
            Prioritize data security and build trust in generative AI
            applications with a dedicated trust layer, emphasizing
            privacy-focused solutions that safeguard both organizational and
            customer data.
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center lg:w-[80%] h-[100%] m-[30px] border-4 border-blue-500 hover:bg-blue-500 hover:bg-opacity-30 hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-200 rounded-2xl"
        >
          <img
            className="w-[140px] h-[100px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[400px]  "
            src={scale}
            alt="sec"
          ></img>
          <h1 className="text-[12px] font-thin md:text-[18px] lg:text-[25px] flex text-center items-center ">
            Streamline and optimize business processes with comprehensive
            workflow automation, ensuring seamless integration of AI
            technologies from inception to execution for increased efficiency
            and productivity.
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center lg:w-[80%] h-[100%] m-[30px] border-4 border-blue-500 hover:bg-blue-500 hover:bg-opacity-30 hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-200 rounded-2xl"
        >
          <img
            className="w-[140px] h-[100px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[400px]  "
            src={end}
            alt="sec"
          ></img>
          <h1 className="text-[12px] font-thin md:text-[18px] lg:text-[25px] flex text-center items-center ">
            Implement cutting-edge, scalable generative AI solutions that not
            only meet current organizational needs but also adapt and grow with
            the evolving demands of your enterprise, providing a future-proof
            approach to AI integration.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
