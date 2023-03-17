import React from 'react'
import Footer from '../components/Footer';
// import Navbar from '../components/Navbar'
import Adoption from '../components/Adoption';
import AdoptionLogo from '../components/AdoptionLogo'
import Contact from '../components/Contact'
import {Link} from 'react-router-dom'

const AdoptionPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <AdoptionLogo />
      <Link to = "/" className="logo2" >
        <i> Back to Main Page</i>
      </Link>
      <Adoption />
      <Contact />
      <Footer />
    </div>
  )
}

export default AdoptionPage
