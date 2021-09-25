import mongoose from "mongoose";

// when you run this function the database will be connected
export default async () => {
    return mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
  };