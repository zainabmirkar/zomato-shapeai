import React from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io';
import {RiSearchLine} from 'react-icons/ri';
import {AiOutlineArrowLeft} from 'react-icons/ai';


// mobile devices
const MobileNav = () =>{
    return <div className="flex items-center w-full justify-between lg:hidden">
    <AiOutlineArrowLeft/>
        <div className="w-28 ">
              <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
              alt="logo"
              className="w-full h-full"
              />
          </div>

          <div className="flex items-center gap-2">
              <button className="bg-zomato-400 text-white px-1 py-1 rounded-full">Use App</button>
          <span className="border border-gray-300 text-zomato-400 p-2 rounded-full">
              <FaUserAlt/>
          </span>
          </div>
    </div>

};




// for large devices


// medium devices
const LargeNav = () =>{
   return <>
   <div className="hidden lg:inline container mx-auto px-44">
          <div className="hidden  w-full items-center gap-4 justify-between lg:flex">
          <div className="w-28  ">
              <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
              alt="logo"
              className="w-full h-full"
              />
          </div>

        <div className=" w-3/4 bg-white shadow-md border flex items-center border-gray-200 gap-3 rounded p-3">
            <div className="flex items-center border-r-2 border-gray-200 pr-2 gap-4">
                <span className="text-zomato-400"><HiLocationMarker/></span>
                <input type="text" placeholder="Silver Park, Mira-Road" className="focus:outline-none"/>
                <IoMdArrowDropdown/>
            </div>
        <div className="flex items-center gap-2 ">
            <RiSearchLine/>
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="w-72  focus:outline-none"/>
        </div>

        </div>
       
         <div className="flex gap-4 ml-28">
         <button className="text-gray-500 hover:text-gray-800 text-xl ">Login</button>
         <button className="text-gray-500 hover:text-gray-800 text-xl">Signup</button>
         </div>
          </div>
          </div>
   </>
};

const Navbar = () =>{
  return <>
      <nav className="p-4 flex items-center bg-white w-full shadow-md lg:shadow-none">
         
           <MobileNav/>
            <LargeNav/>
           

      </nav>
  </>
};

export default Navbar;