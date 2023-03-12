import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import WelcomeSection from '../components/WelcomeSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <Services />
    </div>
  )
}

export default Home
