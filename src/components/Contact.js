import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Contact = () => {
  const handleClick = () => {
    alert("Message sent");
  };

  return (
    <section
      className="min-h-[80vh] lg:min-h-[75vh] flex items-center pt-20 my-20"
      id="Contact"
    >
      <div className="container mx-auto items-center">
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h3 className="uppercase text-gradient font-secondary mb-12 leading-none text-blue-400 font-normal text-[45px] lg:text-[90px] ">
                  {" "}
                  Contact US{" "}
                </h3>
              </div>
            </motion.div>
          </div>

          <motion.form
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 ml-5  rounded-2xl  flex-col gap-y-6 border-4 border-blue-400 pb-20 p-6 items-center font-tertiary shadow-xl shadow-neutral-400 "
          >
            <input
              name="user_name"
              className="bg-transparent border-b border-blue-400 py-3 outline-none  w-full placeholder:text-blue focus:border-blue-400 transition-all"
              type="text"
              placeholder=" FullName"
            />
            <input
              name="user_email"
              className="bg-transparent border-b border-blue-400 py-3 outline-none w-full placeholder:text-blue focus:border-blue-400 transition-all"
              type="email"
              placeholder=" Email"
            />
            <input
              name="user_email"
              className="bg-transparent border-b border-blue-400 py-3 outline-none w-full placeholder:text-blue focus:border-blue-400 transition-all"
              type="number"
              placeholder=" Contact"
            />
            <input
              name="user_email"
              className="bg-transparent border-b border-blue-400 py-3 outline-none w-full placeholder:text-blue focus:border-blue-400 transition-all"
              type="text"
              placeholder=" Subject"
            />
            <textarea
              name="message"
              className="bg-transparent border-b border-blue-400 py-3 outline-none w-full placeholder:text-blue focus:border-blue-400 transition-all resize-none mb-12"
              placeholder=" Message"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="btn btn-lg rounded-xl p-2 border-[3px] border-blue-500 hover:bg-cyan-200 hover:border-blue-500"
              onClick={handleClick}
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
