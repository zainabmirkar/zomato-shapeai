import express from 'express';

// for password hashing 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';

// models
import { UserModel } from '../../database/user';

// validation
import { ValidateSignup, ValidateSignin } from '../../validation/auth';



const Router = express.Router();   //The Express framework provides a router() method to create HTTP endpoints


// creating sign up route
/*
  Route /signup
  description / register
  params none
  Access / public
  method / post   POST requests are meant to submit data to a specified resource

*/ 

Router.post("/signup", async(req,res) =>{
  
    try {        
         await ValidateSignup(req.body.credentials);
  
           await UserModel.findByEmailAndPhone(req.body.credentials);                     // calling the model and finding and passing email and phone number
  
           // save to database
          const newUser =  await UserModel.create(req.body.credentials);
  
  
          // generate jwt auth token
           const token = newUser.generateJwtToken()                // token will be generated of new user
  
          // return the user
          return res.status(200).json({token, status:"success!!"});  //OK success status response code indicates that the request has succeeded
  
  
       } catch (error) {
       return res.status(500).json({error:error.message});
       }
  });

  // creating sign in route
/*
  Route /signin
  description / sign in with email and password
  params none
  Access / public
  method / post   POST requests are meant to submit data to a specified resource

*/ 
Router.post("/signin", async(req,res) =>{
    try {        
      await ValidateSignin(req.body.credentials);
         
       const user =  await UserModel.findByEmailAndPassword(req.body.credentials);     // calling the model and finding and passing email and password
  
        const token = user.generateJwtToken();             // token will be generated of user
  
       // return the user
       return res.status(200).json({token, status:"success!!"});  //OK success status response code indicates that the request has succeeded
  
  
    } catch (error) {
    return res.status(500).json({error:error.message});
    }
  });
  

  /*
  Route / google
  description / google sign in
  params none
  Access / public
  method / get

*/ 
Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      
      ],
    }
    )
  );
  
  
  /*
  Route     /google/callback
  Des       Google Signin Callback
  Params    none
  Access    Public
  Method    GET  
  */
  // after authenticating what will happen
  Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      return res.json(
       {token:req.session.passport.user.token}
      );
    }
  );
  


  export default Router;