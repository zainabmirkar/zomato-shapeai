import React,{useState,useEffect} from 'react';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoFastFoodOutline, IoNutritionOutline } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import classnames from 'classnames';
import { useParams, Link} from 'react-router-dom';

// mobile tabs

const MobileTabs = () =>{
  
    const[allTypes,setAllTypes] = useState([
        {
            id:"delivery",
            icon: <RiShoppingBag3Line/>,
            name: "Delivery",
            // isActive:false,
        },
        {
            id:"dining",
            icon: <IoFastFoodOutline/>,
            name: "Dining out",
            // isActive:false,
        },
        {
            id:"nightlife",
            icon:  <BiDrink/>,
            name: "Night life",
            // isActive:false,
        },
        {
            id:"nutrition",
            icon: <IoNutritionOutline/>,
            name: "Nutrition",
            // isActive:false,
        },
    ])
    const {type} = useParams();

  
    return (
        <>
               <div className="lg:hidden bg-white shadow-lg p-3 bottom-0 fixed z-10 w-full flex items-center justify-between text-gray-500 md:justify-evenly">
                
               {
                   allTypes.map((items)=>(
                       <Link to={`/${items.id}`}>
                    <div className={type===items.id?"flex flex-col relative items-center text-xl text-zomato-400 ":"flex flex-col items-center text-xl"}>
                    <div className={type===items.id &&"absolute -top-3 w-full h-2 border-t-2 border-zomato-400"}/>
                   {items.icon}
                <h5 className="text-sm">{items.name}</h5>
                </div>
                </Link>
                   ))
               }


               </div>
    </>
    )
}

// large screen tabs

const LargeTabs = () =>{

    const[allTypes,setAllTypes] = useState([
        {
            id:"delivery",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
            name: "Delivery",
            activeColor: "yellow",
        },
        {
            id:"dining",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name: "Dining out",
            activeColor: "blue",
            
        },
        {
            id:"nightlife",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name: "Night life",
            activeColor: "purple",
            
        },
        {
            id:"nutrition",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            name: "Nutrition",
            activeColor: "yellow",
           
        },
    ])

    const {type} = useParams();


    return <>
<div className="hidden lg:flex container px-48  gap-14 mx-auto">
{allTypes.map((items)=>(
    <Link to={`/${items.id}`}>
    <div className={classnames("flex items-center gap-3 pb-2 transition duration-700 ease-in-out",{"border-b-2 border-zomato-400":type===items.id})}>
    <div className={`w-16 h-16 bg-${type===items.id? items.activeColor:"gray"}-100 p-2 rounded-full`}>
    <img
              src={type===items.id? items.imageActive: items.imageDefault}
              alt="delivery" 
              className="w-full h-full"
              />
    </div>
    <h3 className={
                type===items.id
                ? "text-xl text-zomato-400"
                :"text-xl text-gray-700"
            }
            >
             {items.name}
        </h3>
</div></Link>
)

)}





</div>


    </>;
}

 const FoodTab = () => {
    return (
        <>
            <div>
            <MobileTabs/>
            <LargeTabs/>
            </div>
        </>
    )
}

export default FoodTab;
