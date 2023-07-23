import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { userData } from "../chartdata";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Chart = () => {

  const [userdata, setuserdata] = useState({
    labels: userData.map((data) => data.value), 
    datasets: [
      {
        label: "Employer",
        data: userData.map((data) => data.employer),
        backgroundColor: "#2E2EFF",
      },
      {
        label: "Employee",
        data: userData.map((data) => data.employee),
        backgroundColor: "#5C5CFF",
      },
      {
        label: "Total interest",
        data: userData.map((data) => data.totalinterest),
        backgroundColor: "#8A8AFF",
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: false,
        ticks: {
          stepSize: 100,
          callback: function (value, index, values) {
            return "$" + value;
          },
        },
      },
    },
  };


  return (
    <div className="flex flex-col pl-[55px] lg:pl-[80px] pt-16 pr-[30px] w-screen h-full lg:w-[100%] lg:h-screen">
      <div>
        <h1 className="font-bold text-[18px] text-indigo-500">
          Retirement Income{" "}
        </h1>
        <h1 className="font-semibold text-[30px] ">Starting Year 2056 </h1>
      </div>

      <div className="flex flex-col lg:flex-row pt-4">
        <div className="flex flex-col border-b-2 border-indigo-500 ">
          <h1 className="font-bold text-[36px]">$300,000</h1>
          <h3 className="font-normal text-[16px] pb-2 text-gray-400">
            My Goal
          </h3>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col lg:pl-10 pr-6 ">
            <div className="border-b-2 border-indigo-500">
              <h1 className="font-bold text-[36px]">59%</h1>
              <h3 className="font-normal text-[16px] pb-2 text-gray-400">
                Goal Achieved
              </h3>
            </div>
          </div>
          <div className="flex flex-col lg:pl-10 pr-6 ">
            <div className="border-b-2 border-indigo-500">
              <h1 className="font-bold text-[36px]">$300</h1>
              <h3 className="font-normal text-[16px] pb-2 text-gray-400">
                Est. Monthly Income
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1 className=" text-[18px] font-bold "> Contributions Overtime</h1>
        </div>
        <div className=" w-[80%] h-64 ">
        <Bar
  data={userdata}
  options={options}
  height='150px'
/>
        </div>


      <div className="pt-10">
        <div>
          <h1 className="text-[18px] font-bold ">
            How do I compare to my peers?
          </h1>
          <h3 className="font-normal text-[15px] pb-2 text-gray-400">
            These numbers represent current goal achievements
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row pt-4">
          <div className="flex flex-col pr-4">
            <div className="flex flex-row items-center  border-b-2 pb-2  ">
              <h1 className="font-bold">Age:</h1>
              <select className=" border-2 border-white pl-6">
                <option>Under 30</option>
                <option>Under 40</option>
                <option>Under 50</option>
              </select>
            </div>
            <div className="flex flex-row items-center border-b-2 pb-2 ">
              <h1 className="font-bold">Salary: </h1>
              <select className=" border-2 border-white pl-2">
                <option>K 20 - k 30</option>
                <option>K 30 - k 40</option>
                <option>K 40 - k 50</option>
              </select>
            </div>
            <div className="flex flex-row items-center border-b-2 pb-2 ">
              <h1 className="font-bold">Gender: </h1>
              <select className=" border-2 border-white ">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between lg:justify-center lg:pl-6 pt-6 lg:pt-0">
            <div className="w-[100px] h-[100px] items-center flex flex-col">
              <CircularProgressbar
                value={70}
                text={"70%"}
                styles={{
                  trail: { stroke: "#e2fee2" },
                  path: { stroke: "#00FA9A" },
                  text: { fill: "black", fontSize: "20px" },
                }}
              />
              <h1 className="">Average</h1>
            </div>
            <div className="w-[100px] h-[100px] items-center flex flex-col">
              <CircularProgressbar
                value={90}
                text={"90%"}
                styles={{
                  trail: { stroke: "#e2fee2" },
                  path: { stroke: "#00FA9A" },
                  text: { fill: "black", fontSize: "20px" },
                }}
              />
              <h1 className="">Top</h1>
            </div>
            <div className="w-[100px] h-[100px] items-center flex flex-col">
              <CircularProgressbar
                value={56}
                text={"56%"}
                styles={{
                  trail: { stroke: "#e2fee2" },
                  path: { stroke: "#00FA9A" },
                  text: { fill: "black", fontSize: "20px" },
                }}
              />
              <h1 className="">Me</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
