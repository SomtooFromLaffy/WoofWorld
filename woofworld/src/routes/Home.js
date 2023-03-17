import React from 'react';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
// import ServiceForm from '../components/ServiceForm';
import Services from '../components/Services'
import Team from '../components/Team';
import WelcomeSection from '../components/WelcomeSection'





const Home = () => {
  
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <Services />
      <Team />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
