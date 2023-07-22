import React from 'react'
import {BiHomeAlt, BiSearch} from 'react-icons/bi'
import {BsPerson, BsCardList} from 'react-icons/bs'
import {RiProfileLine} from 'react-icons/ri'
import {IoMdNotificationsOutline,IoIosLogOut} from 'react-icons/io'
import Logo from '../assets/logo.png'
import { useState } from 'react'

const Navbar = () => {
  const [select, setselect] = useState(null);

  const handleClick = (iconname) =>{
    setselect(iconname)
  }

  return (
    <nav className='flex bottom-0 lg:relative fixed flex-row lg:flex-col h-[50px] lg:h-screen w-screen lg:w-[100%] items-center justify-between bg-white'>
      <img className='pt-4 w-[30px] hidden lg:flex ' src={Logo} alt='logo' />
      
      <div className='order-last pr-10 lg:pr-0 lg:order-none lg:pt-10 text-[25px] '>
      <BiSearch className={`${select === "Search" ? "bg-blue-500 rounded-lg h-[100%] w-[100%] p-2 text-center text-white" : " hover:text-blue-600"}`} onClick={()=>handleClick('Search')}/>
      </div>
      <div className='pl-[40px] lg:pl-0 lg:pt-10 text-[25px]'>
      <BiHomeAlt className={`${select === "Home" ? "bg-blue-500 rounded-lg h-[100%] w-[100%] p-2 text-center text-white" : " hover:text-blue-600"}`} onClick={()=>handleClick('Home')}/>
      </div>
      <div className='lg:pt-5 text-[25px]'>
      <BsCardList className={`${select === "Card" ? "bg-blue-500 rounded-lg h-[100%] w-[100%] p-2 text-center text-white" : "hover:text-blue-600"}`} onClick={()=>handleClick('Card')}/>
      </div>
      <div className='lg:pt-5 text-[25px]'>
      <RiProfileLine  className={`${select === "Chart" ? "bg-blue-500 rounded-lg h-[100%] w-[100%] p-2 text-center text-white" : "hover:text-blue-600"}`} onClick={()=>handleClick('Chart')}/>
      </div >
      <div className='lg:pt-5 font-bold text-[25px]'>
      <BsPerson  className={`${select === "Person" ? "bg-blue-500 rounded-lg h-[100%] w-[100%] p-2 text-center text-white" : "hover:text-blue-600"}`} onClick={()=>handleClick('Person')}/>
      </div>
      <div className='hidden lg:flex lg:pt-[360px] text-[25px]'>
      <IoMdNotificationsOutline className={`${select === "Notification" ? "bg-blue-500 rounded-lg h-[100%] w-[100%] p-2 text-center text-white" : "hover:text-blue-600"}`} onClick={()=>handleClick('Notification')} />
      </div>
      <div className='hidden lg:flex pt-4 pb-6 text-[25px]  '>
      <IoIosLogOut className={`${select === "Exit" ? "bg-blue-500 rounded-lg h-[100%] w-[100%] p-2 text-center text-white" : "hover:text-blue-600"}`} onClick={()=>handleClick('Exit')}/>
      </div>
    </nav>
  )
}

export default Navbar