import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { NextArrow,PrevArrow } from '../../Components/CarousalArrow';
import MenuSimilarRestaurantcard from '../../restaurant/MenuSimilarRestaurantcard';
import ReviewCard from '../../restaurant/Reviews/reviewCard';
import ReactStars from "react-rating-stars-component";
// components
import MenuCollection from '../../restaurant/MenuCollection';
import Slider from 'react-slick';
const Overview = () => {
    const {id} = useParams();
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };

      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
       
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
              <div className="w-full md:w-3/5">
                  <h2 className="font-semibold text-lg md:text-xl my-4">About This Place</h2>
                  <div className="flex justify-between items-center">
                      <h4 className="text-lg font-medium">Menu</h4>
                      <Link to={`/restaurant/${id}/menu`}>
                          <span className="flex items-center gap-1 text-zomato-400">See all Menu <IoMdArrowDropright/></span>
                      </Link>

                  </div>
                      <div className="flex flex-wrap gap-3"> 
            <MenuCollection menuTitle="Menu" pages="3 pages" image={[
                "https://i.pinimg.com/736x/89/bb/95/89bb9579c7618fd29b1613c25fc591d6.jpg",
                "https://i.pinimg.com/736x/89/bb/95/89bb9579c7618fd29b1613c25fc591d6.jpg",
                "https://i.pinimg.com/736x/89/bb/95/89bb9579c7618fd29b1613c25fc591d6.jpg"
            ]}/></div>
              <h4 className="text-lg font-medium my-4">Cuisines</h4>
              <div className="flex flex-wrap gap-2">
                  <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street Food </span>
                  <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Beverages </span>
                  <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Thai food </span>
              </div>
              <div className="my-4">
              <h4 className="text-lg font-medium">Average Cost</h4>
              <h6>₹ 300 for one order (approx)</h6>
              <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
              </div>


              <div className="my-4">
              <h4 className="text-lg font-medium">Similar Restaurants</h4>

              <Slider {...settings}>
                  <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg"
                      alt="img"
                  />
                  <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg"
                      alt="img"
                  />
                  <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg"
                      alt="img"
                  />
                  <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg"
                      alt="img"
                  />
                  <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg"
                      alt="img"
                  />
                  <MenuSimilarRestaurantcard image="https://b.zmtcdn.com/data/pictures/6/17430476/d942999a617e5321c280243d313ae93d_featured_v2.jpg"
                      alt="img"
                  />
              </Slider>
              </div>
              <div className="my-4">
              <h4 className="text-lg font-medium">Rate your delivery experience</h4>
              <ReactStars
                 count={5}
                 onChange={ratingChanged}
                   size={24}
                 activeColor="#ffd700"
                  />
              </div>
           <div className="my-4 flex flex-col gap-4">
             <ReviewCard/>
             <ReviewCard/>
             <ReviewCard/>
           </div>

              </div>



              <aside
              style={{height:"fit-content"}}
              className="hidden shadow-md rounded-xl md:block md:w-2/5 sticky top-2 bg-white p-3 shadow-xl"
              >
                    <div>
                    <h4 className="text-xl font-medium">Call</h4>
                     <h5 className="text-zomato-400 font-medium">+912387965787</h5>

                    </div>
                    <div>
                    <h4 className="text-xl font-medium">Direction</h4>

                    </div>

              </aside>
            </div>
        </>
    )
}

export default Overview;
