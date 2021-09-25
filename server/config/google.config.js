import googleOAuth from 'passport-google-oauth20';

import { UserModel } from '../database/user';

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) =>{
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback",
        },
          async(accessToken, refreshToken, profile, done) => {

            // creating a new user object
              const newUser = {
                  fullname: profile.displayName,
                  email :profile.emails[0].value,
                  profilePic: profile.photos[0].value,
              };
              try {
                  // check if the user exist
                  const user = await UserModel.findOne({email:newUser.email});
        
                  if (user) {
                       // generate token
                  const token = user.generateJwtToken();
                      // return user
                      done(null,{user:token}); 
                  } else{
                      
                      const user = await UserModel.create(newUser);   // if the user doesnt exist create a new user
                       // generate token
                  const token = user.generateJwtToken();
                    // return new user
                      done(null,{user,token});
                         
                  }
              } catch (error) {
                  done(error, null); // error returned to google and null for the callback route
              }
          } 
        )
    );

    passport.serializeUser((userData,done)=>done(null,{...userData}));
    passport.deserializeUser((id,done)=>done(null,id));
};
