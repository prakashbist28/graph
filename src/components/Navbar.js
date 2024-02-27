import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { TiInputChecked } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [select, setselect] = useState(null);
  let [open, setOpen] = useState(false);

  const handleClick = (iconname) => {
    setselect(iconname);
  };

  return (
    <nav className="flex flex-col md:flex-row fixed w-full h-[10%] justify-between bg-white z-[10] shadow-xl">
      <div className="flex ml-10 mt-5 flex-row justify-between">
        <div className="flex flex-row">
          <TiInputChecked className="text-[40px] md:text-[60px]  text-blue-500" />
          <h1 className="flex flex-col text-[25px] md:text-[35px] font-bold leading-5 md:leading-7">
            {" "}
            Bluetick{" "}
            <span className="text-[16px] md:text-[25px] font-light">
              Consultants
            </span>
          </h1>
        </div>
        <button onClick={() => setOpen(!open)}>
          <TiThMenu
            name={open ? "close" : "menu"}
            className="text-blue-400 text-[40px] md:hidden"
          />
        </button>
      </div>

      <ul
        className={`order-last absolute w-full text-center md:text-justify md:w-auto left-0 md:shadow-sm shadow-xl shadow-blue-400 md:static flex-col md:flex-row md:z-auto z-[10] bg-white font-semibold flex gap-8 mt-5 text-[12px] md:text-[24px] lg:text-[30px] mr-20 transition-all duration-500 ease-in ${
          open ? "top-20 " : "top-[-400px]"
        }`}
      >
        <Link
          to="Home"
          activeClass="active"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          <li
            className={`${
              select === "Home"
                ? "  cursor-pointer rounded-lg p-1 text-center "
                : "p-1 hover:cursor-pointer hover:text-blue-300"
            }`}
            onClick={() => handleClick("Home")}
          >
            Home
          </li>
        </Link>

        <Link
          to="Services"
          activeClass="active"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          <li
            className={`${
              select === "Services"
                ? " cursor-pointer rounded-lg p-1 text-center "
                : "p-1 hover:cursor-pointer hover:text-blue-300"
            }`}
            onClick={() => handleClick("Services")}
          >
            Services
          </li>
        </Link>

        <Link
          to="Blogs"
          activeClass="active"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          <li
            className={`${
              select === "Blogs"
                ? " rounded-lg p-1 cursor-pointer text-center "
                : "p-1 hover:cursor-pointer hover:text-blue-300"
            }`}
            onClick={() => handleClick("Blogs")}
          >
            Blogs
          </li>
        </Link>

        <Link
          to="Contact"
          activeClass="active"
          offset={-80}
          spy={true}
          smooth={true}
          duration={500}
        >
          <li
            className={`${
              select === "Contact"
                ? " rounded-lg p-1 cursor-pointer text-center "
                : "p-1 hover:cursor-pointer hover:text-blue-300"
            } `}
            onClick={() => handleClick("Contact")}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
