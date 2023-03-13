import React from 'react'
import './TeamStyles.css'
import logo from '../assets/images/logo.png'

const Team = () => {
  return (
    <div>
        <section className="team" id="team">
            <h2 className="heading"> Our Team </h2>
            <div className="team-grid">
                <div className="team-member">
                    <div className="member-image">
                        <img src={logo} alt=''></img>
                    </div>
                    <div className="member-details">
                        <span>Team Member Name</span>
                        <p>Team Member Position</p>
                    </div>
                </div>
        
                <div className="team-member">
                    <div className="member-image">
                        <img src={logo} alt=''></img>
                    </div>
                    <div className="member-details">
                        <span>Team Member Name</span>
                        <p>Team Member Position</p>
                    </div>
                </div>
        
                <div className="team-member">
                    <div className="member-image">
                        <img src={logo} alt=''></img>
                    </div>
                    <div className="member-details">
                        <span>Team Member Name</span>
                        <p>Team Member Position</p>
                    </div>
                </div>
        
                <div className="team-member">
                    <div className="member-image">
                        <img src={logo} alt=''></img>
                    </div>
                    <div className="member-details">
                        <span>Team Member Name</span>
                        <p>Team Member Position</p>
                    </div>
                </div>
        
                <div className="team-member">
                    <div className="member-image">
                        <img src={logo} alt=''></img>
                    </div>
                    <div className="member-details">
                        <span>Team Member Name</span>
                        <p>Team Member Position</p>
                    </div>
                </div>
        
                <div className="team-member">
                    <div className="member-image">
                        <img src={logo} alt=''></img>
                    </div>
                    <div className="member-details">
                        <span>Team Member Name</span>
                        <p>Team Member Position</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team
