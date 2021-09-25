// libraries
import express from 'express';
import passport from 'passport';

// database modals
import {UserModel} from '../../database/allModels';

const Router = express.Router();


/*
  Route /_id
  description / get user data
  params id
  body / none
  Access / public
  method / get

*/ 

Router.get("/:_id", async (req,res)=>{
      try {
        const {_id} = req.params;
        const getUser = await UserModel.findById(_id);
        return res.json({user:getUser});

      } catch (error) {
          return res.status(500).json({error:error.message});
      }

});


/*
  Route /update/:_id
  description / update user id
  params id
  body / userdata
  Access / public
  method / put

*/ 

Router.put("/update/:userId",async (req,res)=>{
    try {
        const {userId} = req .params;
        const {userData} = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(userId,{
            $set:userData,
        },{new:true});

        return res.json({user:updateUserData});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});





export default Router;