import express from 'express';


// models
import { UserModel } from '../../database/user';

// for password hashing 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const Router = express.Router();   //The Express framework provides a router() method to create HTTP endpoints


// creating sign up route
/*
  Route /signup
  description / register
  params none
  Access / public
  method / post   POST requests are meant to submit data to a specified resource

*/ 