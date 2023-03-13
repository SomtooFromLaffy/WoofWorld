import React from 'react'
import './ContactStyles.css'
import {FaTiktok, FaInstagram, FaGithub, FaFacebook, FaLinkedin,FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
        <section className="Contact" id = "Contact">
            <h2 className="heading"> Contact Us </h2>
            <div className="contact">
                <div className = 'contact-item'>
                    <div className = 'contact-icon'>
                        <div className='bx bx-buildings' id="building"></div>
                    </div>
                    <div className='contact-info'>
                        <h4>Our Location</h4>
                        <p>101 Dalmatians Ave <br /> Canine Ave <br /> Dog World </p>
                    </div>
                </div>
            
                <div className = 'contact-item'>
                    <div className = 'contact-icon'>
                        <div className='bx bxs-phone' id = "phone"></div>
                    </div>
                    <div className = 'contact-info'>
                        <h4>Call Us</h4>
                        <p>(999)-999-9999</p>
                    </div>
                </div>
            
                <div className = 'contact-item'>
                    <div className = 'contact-icon'>
                        <div className='bx bxs-envelope' id = "email" ></div>
                    </div>
                    <div className = 'contact-info'>
                        <h4>Email Us</h4>
                        <p>world-wide-dog@dogmail.dog</p>
                    </div>
                </div>

                
            </div>
            <div className='social'>
                <FaLinkedin size={20} style={{color:'#000', marginRight: '2rem'}} />
                <FaGithub size={20} style={{color:'#000', marginRight: '2rem'}} />
                <FaTwitter size={20} style={{color:'#000', marginRight: '2rem'}} />
                <FaInstagram size={20} style={{color:'#000', marginRight: '2rem'}} />
                <FaFacebook size={20} style={{color:'#000', marginRight: '2rem'}} />
                <FaTiktok size={20} style={{color:'#000', marginRight: '2rem'}} />
            </div>


        </section>
    </div>
  )
}

export default Contact
