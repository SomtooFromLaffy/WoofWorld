import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServiceForm from '../components/ServiceForm'
// import { useNavigate } from 'react-router-dom'

const AppointmentPage = () => {
//   const navigate = useNavigate()
  return (
    <div>
        <Navbar />
        <ServiceForm closeForm={false}/>
        <Contact />
        <Footer />
    </div>
  )
}

export default AppointmentPage
