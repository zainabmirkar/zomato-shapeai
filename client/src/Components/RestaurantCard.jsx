import React from 'react';
import {AiTwotoneStar} from 'react-icons/ai';

const RestaurantCard = (props) => {
    return (
        <>
            <div className="bg-white p-2 w-full  rounded-lg md:w-1/2 lg:w-1/4  lg:mr-12 lg:ml-12 lg:mt-12  hover:shadow-lg transition duration-700 ease-in-out">
               <div className="w-full h-56 lg:h-64 relative ">
               <div className="absolute w-full flex items-end justify-between bottom-4">
                    <div className="flex flex-col gap-2 items-start">{
                        props.isPro && <span className="bg-blue-400 text-white px-1 py-1 rounded text-sm">Pro extra 10% off</span>}
                        {props.isOff && (
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  ₹{`${props.isOff}`} OFF
                </span>
              )}
                   </div>
                   <span className="bg-white bg-opacity-75 p-1 rounded	mr-3">
              {props.durationOfDelivery} min
            </span>
               </div>
                 <img src={props.photos.length && props.photos[0]} alt="food"
                className="w-full h-full rounded-2xl"/>
               </div>

               <div className="flex flex-col my-2 gap-2">
                   <div className="flex items-center justify-between">
                       <h4 className="text-xl font-medium">{props.name}</h4>
                       <span className="bg-green-600 text-white px-1 rounded flex items-center  text-sm">{props.restaurantReviewValue} <AiTwotoneStar/></span>
                   </div>
                   <div className="flex items-center justify-between">
                       <p className="text-gray-500 ">{props.cuisine.join(", ")}</p>
                       <p className="text-gray-500 ">{props.averageCost} for one</p>
                   </div>
               </div>
            </div>
        </>
    )
}

export default RestaurantCard
