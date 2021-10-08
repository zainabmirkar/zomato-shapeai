import React from 'react'
import Slider from 'react-slick';
import NutritionCarousalCard from './NutritionCarousalCard';
const NutritionCarousal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Slider {...settings}>
            <NutritionCarousalCard/>
            <NutritionCarousalCard/>
            <NutritionCarousalCard/>
            <NutritionCarousalCard/>
            <NutritionCarousalCard/>
            <NutritionCarousalCard/>
        </Slider>
            
    
    )
}

export default NutritionCarousal
