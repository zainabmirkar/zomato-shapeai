// libraries
import express from 'express';
import passport from 'passport';
import multer from "multer";

// database modals
import {ImageModel} from '../../database/allModels';

// utilities
import {s3Upload} from "../../Utils/AWS/s3";

const Router = express.Router();

// MULTER config
const storage = multer.memoryStorage();
const upload = multer({storage});




/*
  Route /
  description / uploads given image to s3 bucket and saves file link to mongo db
  params none
  Access / public
  method / post

*/ 

Router.post("/", upload.single("file") ,async (req,res)=>{
    try {
        const file = req.file;

        // s3 bucket options
        const bucketOptions ={
           Bucket: "zomatoproject789",
           Key: file.originalname,
           Body: file.buffer,
           ContentType: file.mimetype,
           ACL: "public--read",
        };

      const uploadImage = await s3Upload(bucketOptions);


      return res.status(200).json({uploadImage});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})




export default Router;