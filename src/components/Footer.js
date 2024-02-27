import React from "react";
import { TiInputChecked } from "react-icons/ti";
import iso from "../assets/iso.png";
import glass from "../assets/glass.png";
import { BiLogoQuora } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[1/2] border-2 bg-slate-200 pt-4">
      <div className="lg:pl-10 pl-4 lg:w-[28%] ">
        <div className="flex flex-row w-full  ">
          <TiInputChecked className=" text-center text-[40px] md:text-[60px] text-blue-500" />
          <h1 className="flex flex-col   text-[24px] md:text-[35px] font-bold leading-tight md:leading-7">
            {" "}
            Bluetick
            <span className="text-[15px] md:text-[25px] font-light">
              Consultants
            </span>{" "}
          </h1>
        </div>

        <div className="pt-6">
          <h1 className="font-medium text-[14px] md:text-[16px] lg:text-[24px]">
            Bluetick Consultants LLP
          </h1>
          <h1 className="pt-4 font-semibold text-[16px] md:text-[10px] lg:text-[16px]">
            {" "}
            Contact@bluetickconsultants.com
          </h1>
        </div>

        <div className="flex flex-row pt-4 w-[100%] justify-center lg:justify-normal ">
          <a
            href="https://www.glassdoor.co.in/Overview/Working-at-Bluetick-Consultants-EI_IE3180317.11,31.htm"
            alt="err"
            target="_blank"
            className=" w-[60px]  text-center pt-3 md:w-[90px] lg:w-[120px] h-[100%] lg:pt-8"
          >
            <img src={glass} alt="error" />
          </a>
          <img
            src={iso}
            alt="error"
            className="w-[60px]  md:w-[90px] lg:w-[120px] h-[90%]"
          />
        </div>
      </div>

      <div className="flex flex-col lg:w-[70%] pt-2 ">
        <div className="flex flex-row  justify-between  ">
          <div className="flex w-[40%] lg:w-auto justify-center lg:justify-normal">
            <h1 className="font-semibold text-[18px] md:text-[20px] lg:text-[28px] flex flex-col">
              RESOURCES
              <a
                href="https://www.bluetickconsultants.com/blogs.html"
                alt="err"
                target="_blank"
                className=" md:pt-4 lg:pt-8 font-normal text-[14px] md:text-[16px] lg:text-[22px] flex flex-row hover:text-blue-500"
              >
                <IoArrowForwardCircleSharp className=" h-6 w-5 lg:mt-[2px] md:h-6 md:w-6 lg:h-8 lg:w-10 hover:text-blue-500" />{" "}
                Blogs
              </a>
            </h1>
          </div>

          <div className=" ">
            <h1 className="font-semibold text-[18px] md:text-[20px] lg:text-[28px] flex flex-col">
              PRODUCTS
            </h1>
            <div className=" flex-row gap-2 md:gap-10 flex lg:w-auto   ">
              <div className="flex flex-col lg:flex-row lg:gap-10">
                <a
                  href="https://talktocode.bluetickconsultants.com/"
                  alt="err"
                  target="_blank"
                  className="pt-2 md:pt-4 lg:pt-8 font-normal text-[14px] md:text-[16px] lg:text-[22px] flex flex-row hover:text-blue-500"
                >
                  <IoArrowForwardCircleSharp className=" h-5 w-5 lg:mt-[2px] md:h-6 md:w-6 lg:h-8 lg:w-10 hover:text-blue-500" />{" "}
                  Talk To Code
                </a>
                <a
                  href="https://interviewgpt.bluetickconsultants.com/"
                  alt="err"
                  target="_blank"
                  className="pt-2 md:pt-4 lg:pt-8 font-normal text-[14px] md:text-[16px] lg:text-[22px] flex flex-row hover:text-blue-500"
                >
                  <IoArrowForwardCircleSharp className=" h-5 w-5 lg:mt-[2px] md:h-6 md:w-6 lg:h-8 lg:w-10 hover:text-blue-500" />{" "}
                  InterviewGPT
                </a>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-10">
                <a
                  href="https://pdf.bluetickconsultants.com/"
                  alt="err"
                  target="_blank"
                  className="pt-2 md:pt-4 lg:pt-8 font-normal text-[14px] md:text-[16px] lg:text-[22px] flex flex-row hover:text-blue-500"
                >
                  <IoArrowForwardCircleSharp className=" h-5 w-5 lg:mt-[2px] md:h-6 md:w-6 lg:h-8 lg:w-10 hover:text-blue-500" />{" "}
                  PrivacyDoc
                </a>
                <a
                  href="https://salescalleval.bluetickconsultants.com/"
                  alt="err"
                  target="_blank"
                  className="pt-2 md:pt-4 lg:pt-8 font-normal text-[14px] md:text-[16px] lg:text-[22px] flex flex-row hover:text-blue-500"
                >
                  <IoArrowForwardCircleSharp className=" h-5 w-5 lg:mt-[2px] md:h-6 md:w-6 lg:h-8 lg:w-10 hover:text-blue-500" />{" "}
                  Sales Call Evaluator
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-4 md:pt-6 lg:pt-10 text-center lg:text-left">
          <div className="gap-2 md:gap-6 lg:gap-10 text-[25px] md:text-[30px] lg:text-[50px] flex flex-row w-[100%] justify-center lg:justify-normal">
            <a
              href="https://www.quora.com/profile/Bluetick-Consultants"
              alt="err"
              target="_blank"
            >
              <BiLogoQuora className="border-2 border-gray-300 rounded-full p-[1px] lg:p-2 shadow-lg hover:bg-blue-400/70 hover:scale-125" />
            </a>
            <a
              href="https://www.facebook.com/bluetickconsultants/"
              alt="err"
              target="_blank"
            >
              <CiFacebook className="border-2 border-gray-300 rounded-full p-[1px] lg:p-2 shadow-lg hover:bg-blue-400/70 hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/company/bluetick-consultants/"
              alt="err"
              target="_blank"
            >
              <CiLinkedin className="border-2 border-gray-300 rounded-full p-[1px] lg:p-2 shadow-lg hover:bg-blue-400/70 hover:scale-125" />
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FBluetickConsult"
              alt="err"
              target="_blank"
            >
              <AiFillTwitterCircle className="border-2 border-gray-300 rounded-full p-[1px] lg:p-2 shadow-lg hover:bg-blue-400/70 hover:scale-125" />
            </a>
            <a
              href="https://www.instagram.com/bluetickconsultants/"
              alt="err"
              target="_blank"
            >
              <IoLogoInstagram className="border-2 border-gray-300 rounded-full lg:p-2 p-[1px] shadow-lg hover:bg-blue-400/70 hover:scale-125" />
            </a>
            <a
              href="https://www.threads.net/@bluetickconsultants"
              alt="err"
              target="_blank"
            >
              <FaThreads className="border-2 border-gray-300 rounded-full p-[1px] lg:p-2 shadow-lg hover:bg-blue-400/70 hover:scale-125" />
            </a>
          </div>
          <h1 className="text-[8px] md:text-[10px] lg:text-[14px] pt-[3px] md:pt-4 lg:pt-6 ">
            {" "}
            2024 ©️ All rights reserved by Bluetick Consultants LLP
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
