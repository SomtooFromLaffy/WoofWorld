import React, { useState } from 'react'
// import React from 'react'
// import {Link} from 'react-router-dom'
import './ServicesStyles.css'

import Serv from '../assets/json/services.json'
import ServiceForm from './ServiceForm'




const Services = () => {
  const Servicedata = Serv;

    const [formcall,setFormcall] = useState(false);
    const handleCall = () => {setFormcall(!formcall);
                                console.log(formcall)}

  return (
    <div>
        <section className="services" id="services">
            <h2 className="heading"> Our Services </h2>
            <div className="services-grid">
                {Servicedata['services'].map((item,index) => (
                    <div className="service" key={`service_"${index}`}>
                        <div className="service-image">
                            <img src={require(`../assets/images/${item['icon']}`)} alt='vet icon'></img>
                        </div>
                        <div className="service-details">
                            <span>{item['name']}</span>
                            <p>{item['description']}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='call-form'>
                <button onClick={handleCall}>Set Appointment</button>
            </div>
        </section>

        {formcall && <ServiceForm closeForm = {handleCall}/>}

    </div>
  )
}

export default Services
