import React,{useState} from 'react'
import axios from 'axios';
//write a custom hook (function)
const useForm=(validation)=>{
    //where do i need submit and validation functions?
    const [values,setValues]=useState({ //declare a hook
        name:'',
        email:'',
        password:''
    });
    const [error,setError]=useState({})//declare another hook
    const handleChange=e=>{
       const {name, value}=e.target;
        setValues({ 
            ...values,//important.spread all the fields(copy the whole object),then overwrite the name field.otherwise it will only display name.
            [name]:value
        })
    }
    const handleSubmit=e=>{//we need to build API to pass it to the server side.
        e.preventDefault();
        setError(validation(values))//update error
        //console.log(values);
        axios.post('http://localhost:8080/api/user/register',values)
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
        //window.location to redirect to another page 
        //clear all the input field
     }
     return {
         handleChange,
         handleSubmit,
         values,
         error
     }
}
export default useForm;