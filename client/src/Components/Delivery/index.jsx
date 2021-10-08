import React,{useState} from 'react'
// import Brand from './Brand';
import DeliveryCarousel from './DeliveryCarousel';
import RestaurantCard from '../RestaurantCard';
const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "12345",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/7/37327/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg"],
             name:"KFC",
             cuisine:["Burger","Fast-Food"],
             averageCost:200,
             isPro:true,
             isOff:80,
             durationOfDelivery:42,
             restaurantReviewValue:4.1,
        },
        {
            _id: "1234567",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/9/35079/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg"],
             name:"McDonalds",
             cuisine:["Burger","Fast-Food"],
             averageCost:200,
             isPro:true,
             isOff:40,
             durationOfDelivery:45,
             restaurantReviewValue:4.3,
        },
        {
            _id: "1234589",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/1/18368221/7d1d6155fa28b3864c1f71342eea8b1c_o2_featured_v2.jpg"],
             name:"Behrouz Biryani",
             cuisine:["Biryani","Kebabs"],
             averageCost:300,
             isPro:true,
             isOff:50,
             durationOfDelivery:22,
             restaurantReviewValue:3.9,
        },
    ]);
    return (
        <>
           <DeliveryCarousel/> 
           {/* <Brand/> */}
      <div className="flex flex-wrap justify-between lg:p-20 ">
      {restaurantList.map((restaurant)=>(
          <RestaurantCard {...restaurant} key={restaurant._id}/>
      ))}
      </div>
        </>
    )
}

export default Delivery;
