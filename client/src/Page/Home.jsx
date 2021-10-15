import React, {useEffect} from 'react'
import { useParams } from 'react-router';
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import Nightlife from '../Components/Nightlife';
// import Nutrition from '../Components/Nutrition';
import { useDispatch } from "react-redux";

// redux actions
import { getRestaurant } from '../Redux/Reducer/restaurant/restaurant.action';
 const Home = () => {
  const {type} = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

    return (
        <div className="my-5">{type==="delivery" &&  <Delivery/>}
        {type==="dining" &&  <Dining/>}
        {type==="nightlife" &&  <Nightlife/>}
        {/* {type==="nutrition" &&  <Nutrition/>} */}
        </div>
    )
}

export default Home;