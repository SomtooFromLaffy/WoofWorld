import React, {useState} from 'react'
import './NavbarStyles.css'
// import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/images/logo.png'

import { HashLink } from "react-router-hash-link"


const Navbar = () => {

  const[click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div>
        <header>
            <HashLink to = "#landing-page" className="logo" >
                <img src={logo} alt="Woof World Logo"></img>
            </HashLink>
            {/* <div class="bx bx-menu" id="menu-icon"></div> */}

            <ul className={click ? "navbar active" : "navbar"}>
                <li><HashLink to = "#landing-page" smooth onClick={handleClick}>Home</HashLink></li>
                <li><HashLink to = "#services" smooth onClick={handleClick}>Services</HashLink></li>
                <li><HashLink to = "#team" smooth onClick={handleClick}>The Team</HashLink></li>
                <li><HashLink to = "#About" smooth onClick={handleClick}>About Us</HashLink></li>
                <li><HashLink to = "#Contact" smooth onClick={handleClick}>Contact Us</HashLink></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} />) : (<FaBars size={25} />) }
                
            </div>
        </header>
    </div>
  )
}

export default Navbar
