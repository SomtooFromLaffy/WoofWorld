import React, { useState, useEffect } from 'react'
import './ServiceFormStyles.css'

import { useNavigate } from 'react-router-dom'

  

function ServiceForm({closeForm}) {
  const navigate = useNavigate()
  const [formData, setFormData ] = useState({
    name : '',
    phone: '',
    email: '',
    petname: '',
    service: [],
    instruction: ''
  });

  const [cancel, setCancel] = useState(closeForm);
  const exit = () => {setCancel(!cancel)}
  
   useEffect(() =>{cancel ? navigate(-1) : console.log("Notyet")},
               [cancel, navigate]
             )


  const onChangeHandle = (e) =>{
    if (e.target.name === 'service'){
      let copy = { ...formData }
      
      if (e.target.checked){ 
        copy.service.push(e.target.value) 
      }else{
        copy.service = copy.service.filter(s => s !== e.target.value)
      }

      setFormData(copy)
    }else{
      setFormData(() =>({...formData, 
                            [e.target.name] : e.target.value}))
    }
  }

  const submitForm = (e) =>{
    e.preventDefault();
    if (formData.service.length === 0){
       alert('Please pick a service')
    }else{
      console.log(formData);
      // closeForm()
      exit()
      // navigate(-1)
    }
  }
  return (
    <div className='overlay-div'>
        <section className="form">
            <div className='bug-fix'>
                
                <form onSubmit={submitForm}>
                    <h2>Service Request Form</h2>
                    <label> Name </label>
                    <input type="text"
                           name = 'name' 
                           onChange = {onChangeHandle}
                           required />
                    
                    <label>Phone </label>
                    <input type="tel"
                           name = 'phone' 
                           onChange = {onChangeHandle}
                           required />
                    
                   <label>Email </label>
                   <input type="email"
                           name = 'email' 
                           onChange = {onChangeHandle}
                           required />

                    <label> Pet Name </label>
                    <input type="text"
                           name = 'petname' 
                           onChange = {onChangeHandle}
                           required />

                   <fieldset>
                        <legend>Select Service</legend>
                        <label> <input type="checkbox"  name='service' value='Grooming' onChange = {onChangeHandle} /> Grooming </label>
                        <label> <input type="checkbox" name='service' value='Vet' onChange = {onChangeHandle} /> Vet</label>
                        <label> <input type="checkbox" name='service' value='Boarding' onChange = {onChangeHandle} /> Boarding </label>
                        <label> <input type="checkbox" name='service' value='Dog Walk' onChange = {onChangeHandle} /> Dog Walking </label>
                        <label> <input type="checkbox" name='service' value='Vaccine' onChange = {onChangeHandle} /> Vaccinations </label>
                        <p><em>At this time, our accesory service will only be in store until our developer gets to building the online store </em></p>
                    </fieldset>
                   <p><em>Fill in appointment day and time below</em></p>

                    <label>Special Instructions</label>
                    <textarea                            
                            name = 'instruction' 
                           onChange = {onChangeHandle}
                           ></textarea>

                    <div className='options'>
                        <button type = 'button' onClick={exit}>Cancel</button>
                        <button >Submit Booking</button>
                    </div> 
                    
                </form>
            </div>
        </section>
    </div>
  )
}

export default ServiceForm


