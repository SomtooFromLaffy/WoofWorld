import React, {useState} from 'react'
import './NavbarStyles.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/images/logo.png'


const Navbar = () => {

  const[click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div>
        <header>
            <Link to = "/" className="logo" >
                <img src={logo} alt="Woof World Logo"></img>
            </Link>
            {/* <div class="bx bx-menu" id="menu-icon"></div> */}

            <ul className={click ? "navbar active" : "navbar"}>
                <li><Link to = "#landing-page">Home</Link></li>
                <li><Link to = "#services">Services</Link></li>
                <li><Link to = "#team">The Team</Link></li>
                <li><Link to = "#About">About Us</Link></li>
                <li><Link to = "#Contact">Contact Us</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} />) : (<FaBars size={25} />) }
                
            </div>
        </header>
    </div>
  )
}

export default Navbar
