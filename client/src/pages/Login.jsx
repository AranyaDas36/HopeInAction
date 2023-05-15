import React from 'react';
import { useState } from 'react';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';

const Login = () => {

  const { login,loader } = useContext(AppContext);


  const [formData, setFormData] = useState( {email:"",password:""} )

  const changeHandler = (event) =>{

    const {name,value,checked,type} = event.target;
    setFormData( (prevState)=>({
      ...prevState,
      [name]: type === "checkbox"? (checked) : (value)
    })
    )


  }

  const submitHandler = (event) =>{
    event.preventDefault();

    //here context usage
    console.log(`Printing final object`);
    console.log(formData);
    login(formData.email, formData.password);

  }

  return (
    <div>

      {loader ? 
        (<Spinner></Spinner>)
        :
        (<div> 
          <h1 className='head'>THE FORM</h1>

          <form className='form' onSubmit={submitHandler}>
    
            <input type="text" placeholder='Email' name='email' onChange={changeHandler} value={formData.email}></input>
            <input type="text" placeholder='Password' name='password' onChange={changeHandler} value={formData.password}></input>
    
            <button>Submit</button>
    
          </form>
        </div>)

      }

     

    </div>
  )
}

export default Login