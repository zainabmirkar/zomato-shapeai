// libraries
import express from 'express';
import passport from 'passport';

// database modals
import {OrderModel} from '../../database/allModels';

const Router = express.Router();


/*
  Route /
  description / get all orders based on id
  params id
  Access / public
  method / get

*/ 

Router.get("/:_id",passport.authenticate("jwt",{session:false}), async (req,res)=>{
     try {
         const {_id} = req.params;
         const getOrders = await OrderModel.findOne({user: _id});
         if(!getOrders){
            return res.status(404).json({error:"User not found"});
         }
         return res.status(200).json({orders:getOrders});
     } catch (error) {
        return res.status(500).json({error:error.message});
     }
});

/*
  Route /new
  description / add new order
  params id
  Access / public
  method / POST

*/ 

Router.post("/new/:_id", async (req,res)=>{
    try {
        const {_id} = req.params;
        const {orderDetails} = req.body;

        const AddNewOrder = await OrderModel.findOneAndUpdate(
        {
                user: _id,
        },
        {
           $push: {orderDetails},
        },
        {new:true}
        );

        return res.json({order: AddNewOrder});

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})








export default Router;