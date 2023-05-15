import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';


const Signup = () => {

  const { loader,signup } = useContext(AppContext);


  const navigate = useNavigate();

  const [formData, setFormData] = useState( {name:"",phone:"",email:"",
  donor:"false",password:""} )

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
    signup(formData);

  }

  const loginRedirecter = (event)=>{
      navigate("/login");
  }


  return (
    <div>

      {loader ? 
      (<Spinner></Spinner>)
      :
      (<div>
        <h1 className='head'>THE FORM</h1>

        <form className='form' onSubmit={submitHandler}>

        <input type="text" placeholder='name' name='name' onChange={changeHandler} value={formData.name}></input>
        <input type="number" placeholder='phone' name='phone' onChange={changeHandler} value={formData.phone}></input>
        <input type="text" placeholder='Email' name='email' onChange={changeHandler} value={formData.email}></input>
        <input type="text" placeholder='Password' name='password' onChange={changeHandler} value={formData.password}></input>
        <label htmlFor='donor'>Donor</label>
        <input type='checkbox' id='donor' name='donor' onChange={changeHandler} value={formData.donor}></input>

        

        <button>Submit</button>

        </form>

        <button onClick={loginRedirecter}>Registered?</button>

      </div>)

      }



      


    </div>
  )
}

export default Signup