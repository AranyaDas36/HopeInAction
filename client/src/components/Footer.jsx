import React from 'react';
import './style.css';
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (

        <div className='footer'>
            <div>  
                <label>OUR PRIVACY POLICY</label>
                    <p> Copyright© 2010 Indreni Forum 
                        for Social Development</p>
                    <p>All rights reserved</p>
            </div>

            <div>
                <label>ADDRESS</label>
                    <p>Bardaghat Nagarpalika, 9 Nawalparasi </p>
                    <p>EMAIL</p>
                    <p>indreni@ntc.net.np</p>
            </div>

            <div>
                <label>MENU</label>
                    <p>Team</p>
            </div>

            <div>
                <label>ABOUT US</label>
                    <p>Courses</p>
                    <p>Contact: 0977-78-412151, 412151</p>
            </div>

            <div>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><BsFacebook></BsFacebook> fb </a> 
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><BsTwitter></BsTwitter> twitter</a> 
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><BsInstagram></BsInstagram> insta </a>
            </div>

        </div>

  )
}

export default Footer;