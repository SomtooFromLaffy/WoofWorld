import React, { Component } from 'react'

import './NavbarStyles.css'
import {Link} from 'react-router-dom'
// import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/images/logo.png'

export class AdoptionLogo extends Component {
  render() {
    return (
      <div>

            <Link to = "/" className="logo2" >
                <img src={logo} alt="Woof World Logo"></img>
            </Link>
        
      </div>
    )
  }
}

export default AdoptionLogo
