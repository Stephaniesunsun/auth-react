import React from 'react';
import {Link} from 'react-router-dom';
import '../App.scss';
import useForm from './useForm';
import validation from './validation'

const FormSignUp = () => {
    const {handleChange,handleSubmit,values,error}=useForm(validation);
   
    return (
        <div className="sign_up">
            <div className="container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <div className="reg username">
                            username:
                            <input type="text" name="name" value={values.name} onChange={handleChange}/>
                            {error.name? <p>{error.name}</p>:''}
                        </div>
                        <div className="reg email">
                            email:
                            <input type="text" name="email" value={values.email} onChange={handleChange}/>
                            {error.email? <p>{error.email}</p>:''}
                        </div>
                        <div className="reg password">
                            password:
                            <input type="text" name="password" value={values.password} onChange={handleChange}/> 
                            {error.password? <p>{error.password}</p>:''}
                        </div>
                    </div>
                    <button className="submit-register">SUBMIT</button>
                    <Link className="loginLink" to="/login">LOGIN</Link>
                </form>
            </div>
        </div>
    )
}

export default FormSignUp

