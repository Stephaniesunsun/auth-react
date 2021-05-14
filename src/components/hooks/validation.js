//input validation:
    //email required
    //email format-> regex
    //username required
    //password required
    //password more than 10 char

const validation=values=>{
    const error={};
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