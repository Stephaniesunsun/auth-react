import {useState} from 'react';
import axios from 'axios';

const useLogin=()=>{
    const [credentials,setCredentials]=useState({
        email:'',
        password:''
    })
    const handleChange=e=>{
        const {name,value}=e.target;
        setCredentials({
            ...credentials,
            [name]:value
        })
    }
    const handleSubmit=e=>{
        e.preventDefault();
        axios.post('http://localhost:8080/api/user/login',credentials)
        .then((response)=>{
            console.log(response) 
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return{
        handleChange,
        handleSubmit,
        credentials
    }
}

export default useLogin;