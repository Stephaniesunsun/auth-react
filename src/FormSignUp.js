import React from 'react';
import {Link} from 'react-router-dom';
import './Form.css';
import useForm from './useForm';
import validation from './validation'

const FormSignUp = () => {
    const submit=()=>{ //API post call
        console.log('success!');
    }
    const {handleChange,handleSubmit,values,error}=useForm(validation);
    
    return (
        <div>
            <h1>CREATE YOUR ACCOUNT</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <div>
                        USERNAME:<input className="reg username" type="text" name="name" value={values.name} onChange={handleChange}/>
                        {error.name? <p>{error.name}</p>:''}
                    </div>
                    <div>
                        EMAIL:<input className="reg email" type="text" name="email" value={values.email} onChange={handleChange}/>
                        {error.email? <p>{error.email}</p>:''}
                    </div>
                    <div>
                        PASSWORD:<input className="reg password"type="text" name="password" value={values.password} onChange={handleChange}/> 
                        {error.password? <p>{error.password}</p>:''}
                    </div>
                </div>
                <button className="submit-register">SUBMIT</button>
                <Link className="formSignup" to="/login">LOGIN</Link>
            </form>
        </div>
    )
}

export default FormSignUp

