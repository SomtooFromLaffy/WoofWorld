// import React, { useState, useEffect } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import './ServicesStyles.css'

import Serv from '../assets/json/services.json'




const Services = () => {
  const Servicedata = Serv;

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
                <Link to= "/">Set Appointment</Link>
            </div>
        </section>
        <section className="form">
            <div>
                <form>
                    <h2>Service Request Form</h2>
                    <label for="customer_name">Name </label>
                    <input type="text" name="customer_name" id="customer_name" placeholder = "Name" required />
                    
                    <label for="phone_number">Phone </label>
                    <input type="tel" name="phone_number" id="phone_number" placeholder="Phone" />
                    
                    <label for="email_address">Email </label>
                    <input type="email" name="email_address" id="email_address" placeholder="Email" />

                    <label for="customer_name"> Pet Name </label>
                    <input type="text" name="customer_name" id="customer_name" placeholder="Dog's name" required />

                    <fieldset>
                        <legend>Select Service</legend>
                        <label> <input type="checkbox" name="extras" id="extras_baby" value="groom" /> Grooming </label>
                        <label> <input type="checkbox" name="extras" id="extras_wheel" value="vet" /> Vet Check Up </label>
                        <label> <input type="checkbox" name="extras" id="extras_tip" value="kennel" /> Kenneling </label>
                        <label> <input type="checkbox" name="extras" id="extras_tip" value="walk" /> Dog Walking </label>
                        <label> <input type="checkbox" name="extras" id="extras_tip" value="vaccine" /> Vaccinations </label>
                        <p><em>At this time, our accesory service will only be in store until our developer gets to building the online store </em></p>
                    </fieldset>

                    <label for="pickup_date">Pickup Date</label>
                    <input type="date" id="pickup" name="pickup time" value="2023-03-22" min="2023-03-23" max="2023-12-31" />

                    <label for="pickup_time">Pickup Time</label>
                    <input type="time" id="appt" name="appt" min="09:00" max="18:00" value="13:30" required />

                    <label for="comments">Special Instructions</label>
                    <textarea name="comments" id="comments" maxlength="500" placeholder="Special Instructions"></textarea>

                    <button>Submit Booking</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Services
