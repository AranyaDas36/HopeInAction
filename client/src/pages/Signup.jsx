import React from 'react';
import { useState } from 'react';


const Signup = () => {


  const [formData, setFormData] = useState( {firstName:"",lastName:"",email:"",
  country:"India",password:""} )

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
    console.log(`Printing final object`);
    console.log(formData);
  }


  return (
    <div>

      <h1 className='head'>THE FORM</h1>

      <form className='form' onSubmit={submitHandler}>

      <input type="text" placeholder='First Name' name='firstName' onChange={changeHandler} value={formData.firstName}></input>
      <input type="text" placeholder='Last Name' name='lastName' onChange={changeHandler} value={formData.lastName}></input>
      <input type="text" placeholder='Email' name='email' onChange={changeHandler} value={formData.email}></input>
      <input type="text" placeholder='Password' name='password' onChange={changeHandler} value={formData.password}></input>
      <label htmlFor='country'>Country</label>
      <select id='country' name='country' onChange={changeHandler} value={formData.country}>
          <option>India</option>
          <option>Nepal</option>
          <option>Bhutan</option>
          <option>Bangladesh</option>
      </select>

      

      <button>Submit</button>

      </form>


    </div>
  )
}

export default Signup