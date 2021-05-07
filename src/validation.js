import React from 'react';

const validation=values=>{
    const error={};
    //email required
    //email format-> regex
    //username required
    //password required
    //more than 10 char
    if(!values.email){
        error.email='email is required';
    }
    else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)){
        error.email='email not valid'; 
    }
    if(!values.name){
        error.name='username is required'; 
    }
    if(!values.password){
        error.password='password is required'; 
    }
    else if(values.password.length<10){
        error.password='password needs to be at least 10 characters';
    }
    
    return error;
}

export default validation;