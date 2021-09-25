// ENV variables
require("dotenv").config(); // since we will be running it directly we need to require it


// Libraries
import  express  from "express";
import cors from 'cors';     // cross origin request (req coming from other servers and not from the origin)
import helmet from 'helmet'; // few layers of security for your servers
const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

// microservice routes
import Auth from "./API/Auth";

// database connection
import ConnectDB from "./database/connection";

// application routes
zomato.use("/auth", Auth);


zomato.get("/",  (req,res) =>  res.json({message:"Setup done"}));

zomato.listen(4000, ()=> ConnectDB().then(() => console.log("server is running"))
.catch(()=>console.log("server is running but setup failed"))
);   // since it is a promise we use then bcoz we are reurning async fn which is eventually a promise
