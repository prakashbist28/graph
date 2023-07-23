import React from "react";
import { useState } from "react";
import './scroll.css'

const Data = () => {
  const [value, setValue] = useState(12);
  const [age,setage] = useState(65);

  return (
    <div className="felx flex-col pt-[250px] lg:pt-10 h-screen w-screen lg:w-[80%] pl-4 pr-6 lg:pr-0 lg:pl-0 ">
      <div className="bg-gray-100 p-4 rounded-xl">
        <h1 className=" font-bold text-[18px]">Retirement Strategy</h1>

        <div className="border-b-2 pb-4">
          <div className=" pt-6">
            <h2 className="font-semibold text-[16px]">
              {" "}
              Employee Contribution{" "}
            </h2>
            <div className="flex flex-row items-center pt-2">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className="slide h-2 w-[80%] cursor-pointer rounded-full accent-blue-600 "
                value={value}
                onChange={(e)=> setValue(e.target.value)}
              />
              <span className="pl-10 lg:pl-2 text-[16px] font-bold">{value}%</span>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="font-semibold text-[16px]"> Retirement Age </h2>
            <div className="flex flex-row items-center pt-2">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className=" h-2 w-[80%] cursor-pointer rounded-full accent-blue-600"
                value={age}
                onChange={(e)=>setage(e.target.value)}
              />
              <span className="pl-10 lg:pl-2 text-[16px] font-bold">{age}</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-row justify-between pr-6">
        <h1 className="text-[16px] font-semibold "> Employer Contribution </h1>
        <h1 className="text-[16px] font-bold"> 8.4% </h1>
      </div>

      <div className="pt-6 flex flex-row justify-between pr-6">
        <h1 className="text-[16px] font-semibold"> Interest Rate</h1>
        <h1 className="text-[16px] font-bold "> 8.4% </h1>
      </div>
      <div className="items-center justify-center pt-6">
      <button className=" bg-blue-600 text-white border-2 p-4 w-[100%] lg:w-[80%] rounded-xl text-[16px]">Update</button>
      </div>

      </div>


      <div className="hidden lg:flex pt-10">
        <div className="border-l-2 border-indigo-500 pl-4">
          <h2 className="text-[18px]"> Are you considering a </h2>
          <h1 className="font-bold text-[20px]"> Housing Advance?</h1>
          <h3 className="text-gray-400 text-[14px]">
            {" "}
            Limited time reduced interest
          </h3>
          <a href="#" className=" font-medium text-indigo-600 text-[16px]">
            {" "}
            <p>Learn more {">"} </p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Data;
