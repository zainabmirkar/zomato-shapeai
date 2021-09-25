// libraries
import express from 'express';
import passport from 'passport';

// database modals
import {MenuMode, ImageModel} from '../../database/allModels';

const Router = express.Router();

/*
  Route /list
  description / get all list menu based on id
  params id
  Access / public
  method / get

*/ 

Router.get("/list/:_id", async (req,res)=>{
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})


/*
  Route /image
  description / get all  menu images based on id
  params id
  Access / public
  method / get

*/ 

Router.get("/image/:_id", async (req,res)=>{
    try {
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

export default Router;