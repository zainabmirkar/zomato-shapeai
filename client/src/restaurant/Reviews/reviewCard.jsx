import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti';
const ReviewCard = () => {
    return (
        <>
           <div className="flex flex-col gap-3 py-3">
               <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full">
                       <img src="https://b.zmtcdn.com/data/user_profile_pictures/a79/d33aba50a4b98c156910b5e7b0f5ea79.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                           alt="img"
                           className="w-full h-full rounded-full object-cover"
                       />
                   </div>
                   <div className="flex flex-col gap-1">
                       <h3 className="text-lg font-semibold">Zainab Mirkar</h3>
                       <small className="text-gray-500">5 Reviews &#8226; 3 followers </small>
                   </div>
                   </div>
                   <button className="text-zomato-400  border border-zomato-400 rounded-lg py-2 px-4">Follow</button>
               </div>
          <div>
              <div className="flex items-center  gap-3">
                  <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1"> 
                  3 <TiStarFullOutline/></span>
                  <h5 className="font-regular uppercase">Delivery</h5>
                  <small className="text-gray-400 uppercase">3 days ago</small>
              </div>
              <div className="w-full">
                  <p className="text-gray-600 w-full font-light text-base ">
                      Really good food and vibes 
                  </p>
              </div>
          </div>
          
           </div> 
        </>
    )
}

export default ReviewCard;
