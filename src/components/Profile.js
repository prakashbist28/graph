import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";

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
    <div className="flex flex-col lg:bg-gray-200 bg-white pl-12 lg:pl-0 lg:items-center w-screen lg:w-[100%] h-screen">
      <div className=" pt-10 flex flex-row ">
        <img className="w-10" src={Logo} alt="img" />
        <div className="pl-2">
          <h1 className=" font-bold text-[24px] "> Hi Mike,</h1>
          <p className=" font-extralight text-[16px]">Welcome back</p>
        </div>
      </div>

      
      <div className=" flex flex-col items-start pt-10">
        <div className="bg-gray-200 lg:bg-inherit rounded-lg pt-4 lg:pt-0 pr-4 lg:pr-0 pl-4 lg:pl-0 pb-4 lg:pb-0 w-[350px] lg:w-full ">
        <h1 className=" font-bold flex-start  text-[15px]">Today</h1>
        <h1 className=" font-bold text-[55px] ">$19,892</h1>
        <h3 className=" font-extralight text-[22px] text-gray-400">
          Account Balance
        </h3>

        <div className="flex lg:flex-col">
        <div className="lg:pt-2 pt-6">
          <h1 className=" font-bold text-[24px]">$4,000</h1>
          <h3 className=" font-extralight text-[18px] text-gray-400 flex">
            Year-to-Date {" "} 
            <span className="lg:flex hidden ml-1">Contributions</span>
          </h3>
        </div>

        <div className="lg:pt-2 pt-6 pl-10 lg:pl-0">
          <h1 className=" font-bold text-[24px]">$1,892</h1>
          <h3 className=" font-extralight text-[18px] text-gray-400">
            Total Interest
          </h3>
        </div>
        </div>

        <div className="relative pt-6 lg:pt-2 ">
          <button
            className="bg-blue-600 text-white rounded-lg p-2 flex text-center justify-center items-center w-[100%]"
            onClick={handleDropdownToggle}
          >I want to
            <span className="text-white pl-3 text-[10px] lg:flex hidden"> &#9660; </span>{" "}
          </button>
          {dropdown && (
            <div className="absolute top-12 left-0 bg-white border border-gray-300 rounded-lg p-2">
              <ul>
                <li onClick={() => handleOptionSelect("Option 1")}>Option 1</li>
                <li onClick={() => handleOptionSelect("Option 2")}>Option 2</li>
              </ul>
            </div>
          )}
        </div>
        </div>

        <div className="pt-12">
          <h1 className="font-bold text-[20px]"> Recent Transactions </h1>
          <div className=" border-b-2 border-gray-300 pb-3 pt-4 ">
            <h3 className=" font-extralight text-[14px] text-gray-400">
              2020-08-07
            </h3>
            <h2 className=" font-bold text-[14px] ">
              {" "}
              Withdrawl Transfer to Bank-XXX11
            </h2>
          </div>
          <div className="lg:flex lg:flex-col hidden border-b-2 border-gray-300 pb-3 pt-4 ">
            <h3 className=" font-extralight text-[10px] text-gray-400">
              2020-08-07
            </h3>
            <h2 className=" font-bold text-[10px]">
              {" "}
              Withdrawl Transfer to Bank-XXX11
            </h2>
          </div>
          <div className="lg:flex lg:flex-col hidden border-b-2 border-gray-300 pb-3  pt-4">
            <h3 className=" font-extralight text-[10px] text-gray-400">
              2020-08-07
            </h3>
            <h2 className=" font-bold text-[10px]">
              {" "}
              Withdrawl Transfer to Bank-XXX11
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;