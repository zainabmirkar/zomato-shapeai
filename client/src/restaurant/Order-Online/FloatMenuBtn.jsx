import React,{useState} from 'react'
import { HiMenu } from "react-icons/hi";
import MenuListContainer from './MenuListContainer';
import { MdClose } from "react-icons/md";
const FloatMenuBtn = () => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => setIsClicked((prev) => !prev);

    return (
        <>
        <div className="fixed z-30 w-8/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden">
        {isClicked && (
          <div className="p-3 bg-white h-48 overflow-y-scroll">
            <MenuListContainer />
          </div>
        )}

            <button 
            onClick={toggleMenu}
            className="  bottom-2 text-white px-4 rounded-full py-1 flex items-center gap-2   bg-yellow-800 right-2 md:hidden">
                 {isClicked ? <MdClose /> : <HiMenu />} Menu
            </button>
        </div>
        </>
    )
}

export default FloatMenuBtn;
