const Joi=require('@hapi/joi');

//we put the schema and validation function together for registration
const registerValidation=input=>{
    const schema=Joi.object({
        name:Joi.string().min(3).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    return schema.validate(input);
}
//we put the schema and validation function together for login
const loginValidation=input=>{
    const schema=Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    return schema.validate(input);
}
module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;


