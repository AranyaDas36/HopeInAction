import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.jpeg";
import { useNavigate } from 'react-router-dom';


import './style.css';

const Navbar = () => {

    const navigate = useNavigate();

    function clickHandler() {
        navigate('/signup');
    }

    function donorHandler(){
        navigate('/contact');
    }




  return (
    <div className='nav-div'>

        <nav className='navbar'>


            <NavLink to="/">
                <img className='logo' src={logo} alt='logo'/>
            </NavLink>

            <ul className='options'>
                <li >
                <NavLink className='navs' activeClassName="active" exact to="/home">Home</NavLink>
                </li>

                <li>
                <NavLink className='navs' activeClassName="active" to="/vision">Vision</NavLink>
                </li>

                <li>
                    <NavLink className='navs' activeClassName="active" to="/stories">Stories</NavLink>
                </li>

                <li>
                <NavLink className='navs' activeClassName="active" to="/contact">Contact</NavLink>
                </li>
            </ul>

        </nav>

        <button className='button' onClick={donorHandler}>Donate!</button>

        <button className='button' onClick={clickHandler}>Sign Up!</button>

        

    </div>
  )
}

export default Navbar