import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { userData } from "../chartdata";

const Chart = () => {
  const [userdata, setuserdata] = useState({
    labels: userData.map((data) => data.value), //creates array where only years of userdata are present
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
    <div className="flex flex-col pl-[55px] lg:pl-[80px] pt-[40px] pr-[30px] w-screen lg:w-[100%] lg:h-screen">
      <div>
        <h1 className="font-bold text-[18px] text-indigo-500">
          Retirement Income{" "}
        </h1>
        <h1 className="font-semibold text-[30px] ">Starting Year 2056 </h1>
      </div>

      <div className="flex flex-col lg:flex-row pt-4">
        <div className="flex flex-col border-b-2 border-indigo-500 ">
          <h1 className="font-bold text-[36px]">$300,000</h1>
          <h3 className="font-normal text-[16px] pb-2 text-gray-400">My Goal</h3>
        </div>
        <div className="flex flex-row justify-between ">
        <div className="flex flex-col lg:pl-10 pr-6 ">
          <div className="border-b-2 border-indigo-500">
            <h1 className="font-bold text-[36px]">59%</h1>
            <h3 className="font-normal text-[16px] pb-2 text-gray-400">Goal Achieved</h3>
          </div>
        </div>
        <div className="flex flex-col lg:pl-10 pr-6 ">
          <div className="border-b-2 border-indigo-500">
            <h1 className="font-bold text-[36px]">$300</h1>
            <h3 className="font-normal text-[16px] pb-2 text-gray-400">Est. Monthly Income</h3>
          </div>
          </div>
        </div>
      </div>

      <div className="pt-14">
        <h1 className=" text-[18px] font-bold "> Contributions Overtime</h1>
        <div className="chart-container w-full h-96 sm:h-64 md:h-80 lg:h-96 xl:h-120">
        <Bar data={userdata} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
