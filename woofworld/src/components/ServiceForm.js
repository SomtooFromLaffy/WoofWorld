import React, { useState } from 'react'
import './ServiceFormStyles.css'


function ServiceForm({ closeForm }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [petname, setPetname] = useState('');
  const [instruction, setInstruction] = useState('');

  const submitForm = (e) =>{
    e.preventDefault();
    const formInfo = { name, phone, email, petname, instruction }
    console.log(formInfo);
  }
  return (
    <div>
        <section className="form">
            <div>
                <form>
                {/* <form onSubmit={submitForm}> */}
                    <h2>Service Request Form</h2>
                    <label> Name </label>
                    <input type="text"
                           value = {name} 
                           onChange = {(e) => setName(e.target.value)}
                           required />
                    
                    <label>Phone </label>
                    <input type="tel"
                           value = {phone} 
                           onChange = {(e) => setPhone(e.target.value)}
                           required />
                    
                   <label>Email </label>
                   <input type="email"
                           value = {email} 
                           onChange = {(e) => setEmail(e.target.value)}
                           required />

                    <label> Pet Name </label>
                    <input type="text"
                           value = {petname} 
                           onChange = {(e) => setPetname(e.target.value)}
                           required />

                   <fieldset>
                        <legend>Select Service</legend>
                        <label> <input type="checkbox" /> Grooming </label>
                        <label> <input type="checkbox" /> Vet</label>
                        <label> <input type="checkbox" /> Boarding </label>
                        <label> <input type="checkbox" /> Dog Walking </label>
                        <label> <input type="checkbox" /> Vaccinations </label>
                        <p><em>At this time, our accesory service will only be in store until our developer gets to building the online store </em></p>
                    </fieldset>
                   <p><em>Fill in appointment day and time below</em></p>

                    <label>Special Instructions</label>
                    <textarea                            
                            value = {instruction} 
                           onChange = {(e) => setInstruction(e.target.value)}
                           required></textarea>

                    <div className='options'>
                        <button type = 'button' onClick={closeForm}>Cancel</button>
                        <button >Submit Booking</button>
                    </div> 
                    
                </form>
            </div>
        </section>
    </div>
  )
}

export default ServiceForm
