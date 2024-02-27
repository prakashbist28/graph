import React from "react";
import Images from "../Data/Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-4/5 m-auto h-4/5 mt-20">
      <h1 className="text-center font-bold text-[20px] md:text-[35px] lg:text-[50px] text-blue-500 ">
        - Explore and enjoy the blogs written by our passionate techies -
      </h1>
      <div className=" mt-10">
        <Slider {...settings}>
          {Images.map((i) => (
            <div
              key={i.name}
              className="bg-white flex flex-col mt-10 border-4 border-blue-500 text-black rounded-xl hover:bg-opacity-30 hover:shadow-xl bbv hover:shadow-gray-500 scale-90 hover:scale-9 duration-200 "
            >
              <div className="rounded-t-xl bg-blue-200 flex justify-center">
                <img
                  className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-full"
                  src={i.img}
                  alt="error"
                />
              </div>
              <p className="py-2 text-center overflow-hidden text-blue-500 font-semibold text-[12px] md:text-[18px] lg:text-[24px]  ">
                {i.title}
              </p>
              <p className="py-2 text-center overflow-hidden text-[10px] md:text-[16px] lg:text-[20px]">
                {i.text}
              </p>
              <a
                href={i.link}
                target="_blank"
                className=" flex items-center justify-center py-2"
              >
                <button className="border-2 text-center rounded-2xl font-medium border-blue-500 hover:bg-blue-500 hover:text-white text-[12px]  md:text-[20px] text-blue-500 p-1 ">
                  Read more
                </button>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
