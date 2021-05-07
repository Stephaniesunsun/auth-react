import React,{useState} from 'react';
import useLogin from './useLogin';
import {Link} from 'react-router-dom'
import './Form.css';

const FormLogIn=()=>{
    const{handleChange,handleSubmit,credentials}=useLogin();
    return(
        <div>
            <h1>Welcome back!</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className="email" name="email" value={credentials.name} onChange={handleChange}/>EMAIL
                <input type="text" className="password" name="password" value={credentials.password} onChange={handleChange}/>PASSWORD
                <button className="smt">LOGIN</button>
            </form>
            <Link className="formLogin" to="/"> RETURN TO SIGN UP</Link>
        </div>
    )
}

export default FormLogIn;