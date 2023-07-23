import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import {IoMdNotificationsOutline} from 'react-icons/io'

const Profile = () => {
  const [dropdown, setdropdown] = useState(false);

  const handleDropdownToggle = () => {
    setdropdown(!dropdown);
  };

  const handleOptionSelect = (option) => {
    console.log(`Selected option: ${option}`);

    setdropdown(false);
  };

  return (
    <div className="flex flex-col lg:bg-gray-200 bg-white pl-14  lg:pl-0 lg:items-center w-screen lg:w-[100%] lg:h-screen">
      <div className=" pt-10 flex flex-row justify-between">
        <img className="w-10" src={Logo} alt="img" />
          <div className="flex flex-col flex-grow">
          <h1 className="font-bold text-[24px] "> Hi Mike,</h1>
          <p className=" font-extralight text-[16px]">Welcome back</p>
          </div>
          <div className="lg:hidden fixed right-0 text-[40px] pr-10 z-10">
          <IoMdNotificationsOutline className=" border-2 rounded-full bg-white"/>
          </div>
        
      </div>
      
      <div className=" flex flex-col items-start pt-10">
        <div className="bg-gray-200 lg:bg-inherit rounded-lg pt-4 lg:pt-0 pr-4 lg:pr-0 pl-4 lg:pl-0 pb-4 lg:pb-0 w-[90%] lg:w-full ">
        <h1 className=" font-bold flex-start text-[16px]">Today</h1>
        <h1 className=" font-bold text-[55px] lg:text-[30px]">$19,892</h1>
        <h3 className=" font-extralight text-[22px] lg:text-[14px] text-gray-400">
          Account Balance
        </h3>

        <div className="flex lg:flex-col">
        <div className="lg:pt-2 pt-6">
          <h1 className=" font-bold text-[24px] lg:text-[18px]">$4,000</h1>
          <h3 className=" font-extralight text-[18px] lg:text-[14px] text-gray-400 flex">
            Year-to-Date {" "} 
            <span className="lg:flex hidden ml-1">Contributions</span>
          </h3>
        </div>

        <div className="lg:pt-2 pt-6 pl-10 lg:pl-0">
          <h1 className=" font-bold text-[24px] lg:text-[18px]">$1,892</h1>
          <h3 className=" font-extralight text-[18px] lg:text-[14px] text-gray-400">
            Total Interest
          </h3>
        </div>
        </div>

        <div className="relative pt-6 lg:pt-2 ">
          <button
            className="bg-blue-600 text-white rounded-lg p-2 flex text-center justify-center items-center w-[100%] lg:w-[60%]"
            onClick={handleDropdownToggle}
          >I want to
            <span className="text-white pl-3 text-[10px] lg:flex hidden"> &#9660; </span>{" "}
          </button>
          {dropdown && (
            <div className="absolute top-12 left-0 w-full lg:w-[60%] bg-white border border-gray-300 rounded-lg p-2">
              <ul>
                <li className=" hover:bg-gray-300 cursor-pointer" onClick={() => handleOptionSelect("Option 1")}>Option 1</li>
                <li className=" hover:bg-gray-300 cursor-pointer"  onClick={() => handleOptionSelect("Option 2")}>Option 2</li>
              </ul>
            </div>
          )}
        </div>
        </div>

        <div className=" flex flex-col pt-12">
        <div className=" bg-gray-200 lg:bg-inherit rounded-lg pt-4 lg:pt-0 pr-4 lg:pr-0 pl-4 lg:pl-0 pb-4 lg:pb-0 w-[110%] lg:w-full">
          <h1 className="font-bold text-[20px] lg:text-[18px] tracking-wide"> Recent Transactions </h1>
          <div className=" border-b-2 border-gray-300 pb-3 pt-4 ">
            <h3 className=" font-extralight text-[14px] lg:text-[12px] text-gray-400 tracking-wide">
              2020-08-07
            </h3>
            <h2 className=" font-bold text-[14px] lg:text-[12px] tracking-wider ">
              {" "}
              Withdrawl Transfer to Bank-XXX11
            </h2>
          </div>
          <div className="lg:flex lg:flex-col hidden border-b-2 border-gray-300 pb-3 pt-4 ">
            <h3 className=" font-extralight text-[12px] text-gray-400">
              2020-08-07
            </h3>
            <h2 className=" font-bold text-[12px]">
              {" "}
              Withdrawl Transfer to Bank-XXX11
            </h2>
          </div>
          <div className="lg:flex lg:flex-col hidden border-b-2 border-gray-300 pb-3  pt-4">
            <h3 className=" font-extralight text-[12px] text-gray-400">
              2020-08-07
            </h3>
            <h2 className=" font-bold text-[12px]">
              {" "}
              Withdrawl Transfer to Bank-XXX11
            </h2>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
