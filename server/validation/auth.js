import joi from "joi";

// sign up
export const ValidateSignup = (userData) =>{
    const Schema =joi.object({
        fullname :joi.string().min(5).required(),
        email: joi.string().email().required(),
        password: joi.string().min(5),
        address: joi.array().items(joi.object({detail:joi.string(), for:joi.string()})),
        phoneNumber: joi.number(),
    });

    return Schema.validateAsync(userData);
};

// sign in
export const ValidateSignin = (userData) =>{
    const Schema =joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
        
    });

    return Schema.validateAsync(userData);
};