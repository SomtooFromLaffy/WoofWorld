// import React, { useState, useEffect } from 'react'
import React from 'react'
import './ServicesStyles.css'

import Serv from '../assets/json/services.json'




const Services = () => {
  const Servicedata = Serv;

  return (
    <div>
        <section className="services" id="services">
            <h2 className="heading"> Our Services </h2>
            <div className="services-grid">

                {Servicedata['services'].map((item) => (
                    <div className="service">
                        <div className="service-image">
                            <img src={require(`../assets${item['icon']}`)} alt='vet icon'></img>
                        </div>
                        <div className="service-details">
                            <span>{item['name']}</span>
                            <p>{item['description']}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </section>
    </div>
  )
}

export default Services
