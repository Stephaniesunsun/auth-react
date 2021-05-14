const mongoose=require('mongoose');

const user=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    date:{
        type:Date,
        default:Date.now
    }
 
});

module.exports=mongoose.model('User',user);