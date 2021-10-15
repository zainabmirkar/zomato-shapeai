import React from 'react';
import FloatMenuBtn from '../../restaurant/Order-Online/FloatMenuBtn';
import {AiOutlineCompass} from"react-icons/ai";
import {BiTimeFive} from "react-icons/bi";
import MenuListContainer from '../../restaurant/Order-Online/MenuListContainer';
// import FoodItem from '../../restaurant/Order-Online/FoodItem';
import FoodList from '../../restaurant/Order-Online/FoodList';
const OrderOnline = () => {
    return (
        <>
          <div className="w-full h-screen flex">
           <aside className="hidden md:flex flex-col gap-3 border-r overflow border-gray-200 h-screen w-1/4">
               <MenuListContainer/>
                <MenuListContainer/>
           </aside>
           <div className="w-full h-screen px-3 md:w-3/4">
               <div className="pl-3 mb-4">
               <h2 className="text-xl font-semibold">Order Online</h2>
           <h4 className="flex items-center gap-2 font-light text-gray-500">
               <AiOutlineCompass/>Live Track Your Order | <BiTimeFive/>45 min
           </h4>
           </div>
           <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
             <FoodList
                 title="Recommended"
                 items={[
                 {
                 price:"315",
                 rating:3,
                 description:"Who doesn’t love a good bowl of Hakka Noodles with their food?",
                 title:"Supreme Hakka Noodles",
                 image:"https://b.zmtcdn.com/data/dish_photos/9e8/1e1ca8b551f8b40b022ac7504095e9e8.jpg?fit=around|130:130&crop=130:130;*,*",
                 },
                ]}
               />
             <FoodList
                
                 items={[
                 {
                 price:"323",
                 rating:3,
                 description:"Who doesn’t love a good bowl of Hakka Noodles with their food?",
                 title:"Pizza Hut",
                 image:"https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg?output-format=webp",
                 },
                ]}
               />
             <FoodList
                
                 items={[
                 {
                 price:"323",
                 rating:3,
                 description:"Who doesn’t love a good bowl of Hakka Noodles with their food?",
                 title:"Pizza Hut",
                 image:"https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg?output-format=webp",
                 },
                ]}
               />
            
             <FoodList
                
                 items={[
                 {
                 price:"315",
                 rating:3,
                 description:"Who doesn’t love a good bowl of Hakka Noodles with their food?",
                 title:"Supreme Hakka Noodles",
                 image:"https://b.zmtcdn.com/data/dish_photos/9e8/1e1ca8b551f8b40b022ac7504095e9e8.jpg?fit=around|130:130&crop=130:130;*,*",
                 },
                ]}
               />
             <FoodList
               
                 items={[
                 {
                 price:"315",
                 rating:3,
                 description:"Who doesn’t love a good bowl of Hakka Noodles with their food?",
                 title:"Supreme Hakka Noodles",
                 image:"https://b.zmtcdn.com/data/dish_photos/9e8/1e1ca8b551f8b40b022ac7504095e9e8.jpg?fit=around|130:130&crop=130:130;*,*",
                 },
                ]}
               />
            
           </section>
           </div>
        </div>
        <FloatMenuBtn/>
        </>
    )
}

export default OrderOnline;
