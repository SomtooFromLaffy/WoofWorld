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
                <form onSubmit={submitForm}>
                    <h2>Service Request Form</h2>

                    {[{'id':'Name', 'type':'text'},
                      {'id':'Phone', 'type':'tel'},
                      {'id':'Email', 'type':'email'},
                      {'id':'PetName', 'type':'text'}].map((data)=>{

                        return (
                          <div key = {data.id} className='datadiv'>
                              <label> {data.id} </label>
                              <input type={data.type}
                                     name = {data.id} 
                                     onChange = {onChangeHandle}
                                      required />
                          </div>
                        )

                      })}


                   <fieldset className='field'>
                        <legend>Select Service</legend>

                        {['Grooming', 'Vet', 'Boarding', 'Dog Walking', 'Vaccinations', 'Dog Adoption'].map((servic)=>{
                          return (
                            <label key={servic}> <input type="checkbox"  name='service' value={servic} onChange = {onChangeHandle} /> {servic} </label>
                          )
                        })}
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
        </section>
    </div>
  )
}

export default ServiceForm


