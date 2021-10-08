// ENV variables
require("dotenv").config(); // since we will be running it directly we need to require it


// Libraries
import  express  from "express";
import cors from 'cors';     // cross origin request (req coming from other servers and not from the origin)
import helmet from 'helmet'; // few layers of security for your servers
import passport from 'passport';

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());


// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurants";
import Food from "./API/Food";
import Order from "./API/orders";
import Review from "./API/reviews";
import User from "./API/User";
import Image from './API/Image';
import Menu from "./API/menu";


// import configs
import googleAuthConfig from './config/google.config';
import routeConfig from './config/route.config';


// passport configuration
googleAuthConfig(passport);
routeConfig(passport);

// database connection
import ConnectDB from "./database/connection";

// application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/order", Order);
zomato.use("/reviews", Review);
zomato.use("/user", User);
zomato.use("/image", Image);
zomato.use("/menu", Menu);



zomato.get("/",  (req,res) =>  res.json({message:"Setup done"}));

zomato.listen(4000, ()=> ConnectDB().then(() => console.log("server is running"))
.catch(()=>console.log("server is running but setup failed"))
);   // since it is a promise we use then bcoz we are reurning async fn which is eventually a promise
