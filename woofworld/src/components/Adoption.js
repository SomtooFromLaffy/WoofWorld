import React, { useState } from 'react'
import './TeamStyles.css'
import rescue_data_var from '../assets/json/adoption.json'
import Modal from './Modal'
// import {Link} from 'react-router-dom'

const Adoption = () => {
  const [modCall , setModCall] = useState(false)
  const rescue_data = rescue_data_var["dogs"] 
  return (
    <div>
        <section className="rescue">
            <h2 className="heading drop"> Rescue/Adoption Program </h2>
            <p className='note'> Help these dogs get a new home. We would be happy to assist in amy way we
                can. <br/>  Schedule a time to visit and interact with them
            </p>
            <div className='call-form2'>
                <button onClick={()=>{setModCall(true)}}>Set Appointment</button>
                {/* <Link to='/appointment'>Set Appointment</Link> */}
            </div>
            <div className="rescue-grid">
                {rescue_data.map((item,index) => (
                    <div className="rescue-dog"  key={`rescue_"${index}`}>
                        <div className="rescue-image">
                            <img src = {require(`../assets/rescue/${item['icon']}`)} alt=''></img>
                        </div>
                        <div className="rescue-details">
                            <span>{item['name']}</span>
                            <p>{item['description']} <span> {item['age']} </span></p>
                        </div>
                    </div>
                ))}

            </div>
        </section>

        {modCall && <Modal />}
    </div>
  )
}

export default Adoption
