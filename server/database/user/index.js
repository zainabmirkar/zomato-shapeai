import  mongoose  from "mongoose";



const UserSchema  = new mongoose.Schema({
    fullname : {type:String , required:true},
    email : {type:String , required:true},
    password : {type:String},                 // google doesnt provide password so we didnt write required
    address : [{details:{type:String}, for:{type:String}}],      // use an array to store multiple addreses ... details will contain the address for will contain the status like work, office, gym etc
    phoneNumber : [{type:Number}],

},
{timestamps: true,}

);








// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
export const UserModel = mongoose.model("Users", UserSchema);