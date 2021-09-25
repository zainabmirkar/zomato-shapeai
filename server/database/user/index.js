import  mongoose  from "mongoose";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";


const UserSchema  = new mongoose.Schema({
    fullname : {type:String , required:true},
    email : {type:String , required:true},
    password : {type:String},                 // google doesnt provide password so we didnt write required
    address : [{details:{type:String}, for:{type:String}}],      // use an array to store multiple addreses ... details will contain the address for will contain the status like work, office, gym etc
    phoneNumber : [{type:Number}],

},
{timestamps: true,}

);

UserSchema.methods.generateJwtToken = function (){
    // generate jwt auth token
    return jwt.sign({user: this._id.toString()}, "ZomatoAPP"); 
};




// static method here defining our own function findByEmailAndPhone
UserSchema.statics.findByEmailAndPhone = async ({email,phoneNumber}) =>{
      // check whether the email exists
      const checkUserByEmail = await UserModel.findOne({email});      //The findOne() function is used to find one document according to the condition. If multiple documents match the condition, then it returns the first document satisfying the condition.
      const checkUserByPhone = await UserModel.findOne({phoneNumber});      

      if (checkUserByEmail||checkUserByPhone) {
          throw new Error("User already exists!!")      
      }
  return false;                      // bcoz the user doesnt exist
};

// for sign in we are creating methods
UserSchema.statics.findByEmailAndPassword = async ({email,password}) =>{
    
    const user = await UserModel.findOne({email});        // check whether the user exist by email 
    if (!user) throw new Error("User does not exist!!");    // email does not exist then throw error

    // comparing password
     const doesPasswordMatch = bcrypt.compare(password,user.password);       // compare the pw and what the user entered as pw
     
     if (!doesPasswordMatch) throw new Error("invalid password");

     return user;
};



UserSchema.pre("save", function(next){                 //a pre-save hook is middleware that is executed when a document is saved.
    const user = this;

    if(!user.isModified("password")) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);

        // hash the password
        bcrypt.hash(user.password,salt, (error,hash)=>{
            if(error) return next(error);

            //assigning the hashed password
            user.password = hash;
            return next();
        });
    });
});







// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
export const UserModel = mongoose.model("Users", UserSchema);