// libraries
import express from 'express';
import passport from 'passport';

// database modals
import {ReviewModel} from '../../database/allModels';

const Router = express.Router();


/*
  Route new
  description / add food rating / review
  params id, _foodId
  Access / public
  method / post

*/ 
Router.post("/new", async (req,res)=>{
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);

        return res.json({review:"Successfully Created Review!!"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});


/*
  Route delete review
  description / delete review
  params id
  Access / public
  method / delete

*/ 

Router.delete("/delete/:_id", async (req,res)=>{
       try {
           const {_id} = req.params;
           await ReviewModel.findByIdAndDelete(_id);
           return res.json({review:"Successfully Deleted the Review!!"});
           
       } catch (error) {
        return res.status(500).json({error:error.message});
       }
});

export default Router;