var express = require('express');
var router = express.Router();
const User=require('../models/user.model');
const {registerValidation,loginValidation}=require('../middleware/validation');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

router.post('/register',async (req,res)=>{
  //validate data before creating users
  const {error}=registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  //check no duplicate email
  const emailExist=await User.findOne({email:req.body.email})
  if(emailExist) return res.status(400).send('email already exists!');
  //hash password
  const salt=await bcrypt.genSalt(10);
  const hashPassword=await bcrypt.hash(req.body.password,salt);
  //else
  const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:hashPassword
  });
  try{
    const savedUser= await user.save(); //can also create a new object
    res.status(200).send({id:user._id});
    
  }catch(err){
    res.status(400).send(err);
  }
})

router.post('/login',async (req,res)=>{
  const {error}=loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  //check if the email is registered

  const userFound=await User.findOne({email:req.body.email});
  if(!userFound) return res.status(400).send('email doesnt exist');
 
  //check if password match
  const matchPwd=await bcrypt.compare(req.body.password,userFound.password);
  if(!matchPwd) return res.status(400).send('password doesnt match!');
  //if(!matchPwd) return res.status(400).send('password doesnt match!');
  //generate jwt token on user ID, then send it back to the frontend.
   const token=jwt.sign({_id:userFound._id},process.env.TOKEN_SECRET);
   console.log(token);
   res.header('auth-token',token).send(token);
  //return res.status(200).send('login successfully!');

})

module.exports = router;
