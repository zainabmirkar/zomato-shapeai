// Libraries
import  express  from "express";
import cors from 'cors';     // cross origin request (req coming from other servers and not from the origin)
import helmet from 'helmet'; // few layers of security for your servers

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

const zomato = express();

zomato.get("/",  (req,res) =>  res.json({message:"Setup done"}));
zomato.listen(4000, console.log("Server is running"));