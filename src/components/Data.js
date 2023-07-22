import React from "react";
import { useState } from "react";

const Data = () => {

  const [value, setValue] = useState(12); // Set an initial value for the range slider

  const handleRangeChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <div className="felx flex-col pt-[20px]">
      <div className="bg-gray-100">
        <h1 className=" font-bold text-[18px]">Retirement Strategy</h1>
        <h2 className="font-semibold text-[14px]"> Employee Contribution </h2>
        <h2 className="font-semibold"> </h2>
      </div>
      <div className="flex flex-row items-center 0">
      <input
        type='range'
        className=" h-1 w-[50%] cursor-pointer appearance-none rounded-full bg-green-300  border-transparent "
        value={value}
        onChange={handleRangeChange}
      />
      <span className="pl-2">{value}</span>
    </div>

      <div className="pt-4">
        <div className="border-l-2 border-indigo-500 pl-4">
          <h2 className="text-[16px]"> Are you considering a </h2>
          <h1 className="font-bold text-[18px]"> Housing Advance?</h1>
          <h3 className="text-gray-400 text-[12px]">
            {" "}
            Limited time reduced interest
          </h3>
          <a href="#" className=" font-medium text-indigo-600 text-[14px]">
            {" "}
            <p>Learn more {">"} </p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Data;
