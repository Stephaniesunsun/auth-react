const jwt=require('jsonwebtoken');

//fetch token from header
//get user id
//set user property to 'verified'

const verifiedJWT=(req,res,next)=>{
    var token=req.header('auth-token');
    console.log(token);
    if(!token) return res.status(400).send('access denied');
    try{
        const verfied=jwt.verify(token, process.env.TOKEN_SECRET);
        next();
        //console.log(verified);
    }catch(err){
        return res.status(400).send('wrong token');
    }
}

module.exports.verifyJWT= verifiedJWT;