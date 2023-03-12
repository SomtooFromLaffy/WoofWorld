import React from 'react'
import {Link} from 'react-router-dom'
import welcomedog from '../assets/train3.jpg'
import './WelcomeSectionStyles.css'

const WelcomeSection = () => {
  return (
    <div>
        <section className="landing-page" id="landing-page">
            <div className="lbp-grid">
                <div className="welcome-text">
                    <span>Welcome to</span>
                    <h2>Woof World</h2>

                </div>
                <div class="welcome-image">

                </div>
            </div>
        </section>
    </div>
  )
}

export default WelcomeSection
