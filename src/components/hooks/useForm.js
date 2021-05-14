import {useState} from 'react'
import axios from 'axios';

const useForm=(validation)=>{
    const [values,setValues]=useState({ 
        name:'',
        email:'',
        password:''
    });
    const [error,setError]=useState({})
    const handleChange=e=>{
       const {name, value}=e.target;
        setValues({ 
            ...values,//important.spread all the fields(copy the whole object),then overwrite the name field.otherwise it will only display name.
            [name]:value
        })
    }
    const handleSubmit=e=>{//make request to serverside endpoint
        e.preventDefault();
        setError(validation(values))//update error
        axios.post('http://localhost:8080/api/user/register',values)//submit all the valid input fields
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
     }
     return {
         handleChange,
         handleSubmit,
         values,
         error
     }
}
export default useForm;