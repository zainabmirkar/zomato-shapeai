import React from 'react'
import classnames from 'classnames';
import { useLocation, Link, useParams } from 'react-router-dom';
const Tab = (props) =>{
    const {id} = useParams();
    return <>
       <Link to={`/restaurant/${id}/${props.route}`}>
       <div className= {classnames("text-gray-500 font-light  ",{"text-zomato-400 font-semibold": props.isActive,})}>
     

        <h3 className="text-lg md:text-xl">{props.title}</h3>
        </div>
       </Link>
    </>
}
const TabContainer = (props) => {
    const Location = useLocation();
    const currentPath = Location.pathname;
    const tabs=[
        {
         title:"Overview",
         route:"overview",
         isActive: currentPath.includes("overview"),
    },
        {
         title:"Order Online",
         route:"order-online",
         isActive: currentPath.includes("order-online"),
    },
        {
         title:"Reviews",
         route:"reviews",
         isActive: currentPath.includes("reviews"),
    },
        {
         title:"Menu",
         route:"menu",
         isActive: currentPath.includes("menu"),
    },
        {
         title:"Photos",
         route:"photos",
         isActive: currentPath.includes("photos"),
    },
          ];


    return (
        <div className="flex  items-center gap-8  md:gap-8 overflow-x-scroll  border-b-2 pb-4">
           {tabs.map((tab)=><Tab {...tab} key={`123${tab.route}`}/>)}
        </div>
    )
}

export default TabContainer;
