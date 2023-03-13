import React from 'react'
import {Link} from 'react-router-dom'
import welcomedog from '../assets/images/cbp.jpg'
import './WelcomeSectionStyles.css'

const WelcomeSection = () => {
  return (
    <div>
        <section className="landing-page" id="landing-page">
            <div className="lbp-grid">
                <div className="welcome-text">
                    <span>Welcome to</span>
                    <h2>Woof World</h2>
                    <p>We are having a sale on dog accessories all week</p>
                    <Link to= "/">Explore</Link>
                </div>
                <div className="welcome-image">
                    <img src={welcomedog} alt="Dog from unsplash"></img>
                </div>
            </div>
        </section>
    </div>
  )
}

export default WelcomeSection
