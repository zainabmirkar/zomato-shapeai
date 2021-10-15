// libraries
import express from 'express';
import passport from 'passport';

// database modals
import {RestaurantModel} from '../../database/allModels';


// validation
import { ValidateRestaurantId } from '../../validation/food';
import { ValidateRestaurantCity, ValidateRestaurantSearchString} from '../../validation/restaurant';

const Router = express.Router();


/*
  Route /
  description / get all restaurant details based on city
  params none
  Access / public
  method / get

*/ 

Router.get("/", async (req,res)=>{
      try {
          await ValidateRestaurantCity(req.query);
          const {city} = req.query;
          const restaurants = await RestaurantModel.find({city});
          return res.json({restaurants});
      } catch (error) {
          return res.status(500).json({error:error.message});
      }
});


// @Route   POST /restaurants/new
// @des     add new restaurant
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newRetaurant = await RestaurantModal.create(req.body.retaurantData);
      return res.json({ restaurants: newRetaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
/*
  Route /
  description / get  individual restaurant details based on id
  params none
  Access / public
  method / get

*/ 
Router.get("/:_id", async(req,res)=>{
    try {
        await ValidateRestaurantId(req.params);
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne({_id});

        // if restaurant was not found
        if (!restaurant) 
        return res.status(404).json({error:"Restaurant not found!!"});
        // otherwise return restaurant
        return res.json({restaurant});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})


/*
  Route /search
  description / get restaurant details based on search string
  params none
  body searchString
  Access / public
  method / get

*/ 
Router.get("/search", async (req,res)=>{
   try {
       await ValidateRestaurantSearchString(req.body);
       const {searchString} = req.body;
       const restaurants = await RestaurantModel.find({
           name : {$regex: searchString, $options:"i"},
       });
       if (!restaurants) 
        return res.status(404).json({error:`No restaurant matched with ${searchString}`});
        // otherwise return restaurant
        return res.json({restaurant});
   } catch (error) {
    return res.status(500).json({error:error.message});
   }
})



export default Router;