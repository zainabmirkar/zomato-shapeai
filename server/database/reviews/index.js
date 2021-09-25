import  mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
       food:{type:mongoose.Types.ObjectId, ref:"Food"},
       restaurants:{type:mongoose.Types.ObjectId, ref:"Restaurants"},
       users:{type:mongoose.Types.ObjectId, ref:"Users"},
       rating:{type:Number, required:true},
       reviewText:{type:String, required:true},
       photos:[{type:mongoose.Types.ObjectId, ref:"Images"}],
       isRestaurantReview : Boolean,
       isFoodReview : Boolean,
},
{timestamps: true,}
);

export const ReviewsModel = mongoose.model("Review", ReviewSchema);
