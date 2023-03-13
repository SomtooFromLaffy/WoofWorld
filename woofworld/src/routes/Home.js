import React from 'react';
import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar'
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
    </div>
  )
}

export default Home
