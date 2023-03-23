// import React from 'react'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ResponseModal from './ResponseModal';

export default function ServiceFormModal({closeForm, formcall}) {
//   const [showFormDone, setShowFormDone] = useState(false)
  const [formData, setFormData ] = useState({
    Name : '',
    Phone: '',
    Email: '',
    Petname: '',
    Service: [],
    Instruction: ''
  });


  const [done, setDone] = useState(false);

  const onChangeHandle = (e) =>{
    if (e.target.name === 'service'){
      let copy = { ...formData }
      
      if (e.target.checked){ 
        copy.Service.push(e.target.value) 
      }else{
        copy.Service = copy.Service.filter(s => s !== e.target.value)
      }

      setFormData(copy)
    }else{
      setFormData(() =>({...formData, 
                            [e.target.name] : e.target.value}))
    }
  }

  const submitForm = (e) =>{
    e.preventDefault();
    if (formData.Service.length === 0){
       alert('Please pick a service')
    }else{
      console.log(formData);
      setDone(true)
    }
  }
  return (
    <div className='modal'>
        {!done && <section className="form">
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
                        <button type = 'button'><Link to='/'>Cancel</Link></button>
                        <button >Submit Booking</button>
                    </div> 
                    
                </form>
        </section>}


        {done && <ResponseModal Name={formData.Name} closeForm={closeForm} formcall={formcall} />}
      
    </div>
  )
}
