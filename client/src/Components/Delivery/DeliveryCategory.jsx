import React from 'react';


// mobile device inspiration cards
const DeliverySmCard= ({image,title}) =>{
    return <>
            <div className=" bg-white shadow rounded-md md:w-56 w-24 lg:hidden">
              <div className="w-full h-24">
                  <img src={image} alt="food"
                      className="w-full h-full object-cover rounded-t-md"
                  />
              </div>
              <h3 className="text-sm font-light text-center my-1">{title}</h3>
           </div>
    </>
}

// large devices inspiration cards

const DeliveryLgCard = () =>{
    return <>
        <div className="hidden lg:block w-64 h-48 ">
              <div className="w-full h-full">
                  <img src="https://b.zmtcdn.com/data/pictures/chains/4/35004/75d199829038cdcd50e25bf3f43bc5eb_o2_featured_v2.jpg" alt="food"
                      className="w-full h-full object-cover shadow-lg rounded-md"
                  />
              </div>
              <h3 className="text-xl font-medium  my-1">HotDog</h3>
           </div>
    </>
}

const DeliveryCategory = (props) => {
    return (
        <>
            <DeliverySmCard {...props}/>
            <DeliveryLgCard {...props}/>
        </>
    )
}

export default DeliveryCategory;
