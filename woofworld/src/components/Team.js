import React from 'react'
import './TeamStyles.css'
import team_data_var from '../assets/json/employee_data.json'

const Team = () => {
  const team_data = team_data_var["services"] 
  return (
    <div>
        <section className="team" id="team">
            <h2 className="heading"> Our Team </h2>
            <div className="team-grid">
                {team_data.map((item,index) => (
                    <div className="team-member"  key={`team_"${index}`}>
                        <div className="member-image">
                            <img src = {require(`../assets/images/${item['icon']}`)} alt=''></img>
                        </div>
                        <div className="member-details">
                            <span>Team Member Name</span>
                            <p>Team Member Position</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    </div>
  )
}

export default Team
