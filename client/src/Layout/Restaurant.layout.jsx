import React from 'react';
// components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../restaurant/ImageGrid';
import RestaurantInfo from '../restaurant/RestaurantInfo';
import {TiStarOutline} from "react-icons/ti";
import {RiDirectionLine,RiShareForwardLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";
import InfoButtons from '../restaurant/InfoButtons';
import TabContainer from '../restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';
const RestaurantLayout = (props) => {
    return (
       <>
            <RestaurantNavbar/>
            <div className="container mx-auto px-4 lg:px-20  "> 
            <ImageGrid   
                 images={[
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
             
              ]} 
            />

<RestaurantInfo 
        name="Ginkgo Pan Asian Kitchen" restaurantRating="3.5"
        deliveryRating="3.5" cuisine="Asian , Chinese"
        address="Dadar East , Mumbai"
        />
        <div className="my-4 flex flex-wrap gap-3">
      <InfoButtons isActive>
         <TiStarOutline/>Add Review
      </InfoButtons>
      <InfoButtons >
         <RiDirectionLine/>Direction
      </InfoButtons>
      <InfoButtons>
         <BiBookmarkPlus/>Bookmark
      </InfoButtons>
      <InfoButtons>
         <RiDirectionLine/>Share
      </InfoButtons>
        </div>
       <div className="my-10"> <TabContainer>
         
       </TabContainer>
       </div>
      <div className="relative">
      {props.children}
      </div>
            </div>

            <CartContainer/>
       </>
    )
}

export default RestaurantLayout
