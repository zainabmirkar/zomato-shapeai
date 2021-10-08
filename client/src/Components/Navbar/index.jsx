import React,{useState} from 'react';
import {FaUser} from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io';
import {RiSearchLine} from 'react-icons/ri';

import SignIn from '../Auth/SignIn';
import UserDropdown from './UserDropDown';
import SignUp from '../Auth/SignUp';
// mobile devices
const MobileNav = ({SignIn,SignUp}) =>{
    const [isDropDownOpen,setIsDropDownOpen]=useState(false);

    return <div className="flex items-center w-full justify-between lg:hidden">
        <div className="w-28 ">
              <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
              alt="logo"
              className="w-full h-full"
              />
          </div>

          <div className="flex items-center gap-2 relative">
              <button className="bg-zomato-400 text-white px-1 py-1 rounded-full">Use App</button>
              <span 
     onClick={()=>setIsDropDownOpen((prev)=>!prev)}
     className="border p-2 border-gray-300 text-zomato-400 rounded-full">
     <FaUser/>
     </span>
     {isDropDownOpen && (
     <div className="absolute shadow-lg py-3  -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
     <button onClick={SignIn}>Sign In</button>
     <button onClick={SignUp}>Sign Up</button> 
     </div>
     )}
         
          </div>
    </div>

};




// for large devices


const LargeNav = ({SignIn,SignUp}) =>{
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
         <button   onClick={SignIn} className="text-gray-500 hover:text-gray-800 text-xl ">Login</button>
         <button  onClick={SignUp} className="text-gray-500 hover:text-gray-800 text-xl">Signup</button>
         </div>
          </div>
          </div>
   </>
};

const Navbar = () =>{
    const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  return <>
   <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      {/* <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} /> */}
      <nav className="p-4 flex items-center bg-white w-full shadow-md lg:shadow-none">
         
           <MobileNav  SignIn={{openSignin, setOpenSignin}}/>
            <LargeNav SignIn={{openSignin, setOpenSignin}}/>
           

      </nav>
  </>
};

export default Navbar;