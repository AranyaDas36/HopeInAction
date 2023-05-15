import React from 'react'
import { BsMailbox2 ,BsTelephoneOutbound} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div>

      <div class="wrapper">
              <div class="content">
                  <h2>Contact Us</h2>
                  <p>content
                  </p>
              </div>
              <div class="container">
                  <div class="contactInfo">
                      <div class="box">
                          <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                              <div class="text">
                                  <h3>Address</h3>
                                  <div class="wrapper">
        <div class="content">
            <p>content
            </p>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div class="text">
                            <h3><BsMailbox2></BsMailbox2>Address</h3>
                            <p>
                                Bardaghat Nagarpalika,9 Nawalparasi,Nepal
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                            <div class="text">
                                <h3><BsTelephoneOutbound></BsTelephoneOutbound>Phone</h3>
                                <p>
                                    0977-78-412151
                                </p>
                            </div>
                        </div>   
                        <div class="box">
                            <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                                <div class="text">
                                    <h3><AiOutlineMail></AiOutlineMail>Email</h3>
                                    <p>
                                        indreni@ntc.net.np
                                    </p>
                                </div>
                            </div>      
                        </div>
                        
                  </div>
             </div>
             </div>
             </div>
             </div>
    </div>
    </div>

    </div>
  )
}

export default ContactUs