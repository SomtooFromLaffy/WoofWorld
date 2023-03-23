import React, { useState } from 'react'
import './ModalStyles.css'

import ResponseModal from './ResponseModal';

export default function Modal() {
    const [showResponse, setShowResponse] = useState(false)
    const [ appointmentData, setAppointmentData ] = useState({
        Name : '',
        Phone: '',
        Time: ''
        });

    const updateData = (e) =>{
        let copy2 = {...appointmentData, [e.target.name] : e.target.value }
        setAppointmentData(copy2)

    }


  return (
    <div className='modal'>
      {!showResponse && <form onSubmit={(e)=>{ e.preventDefault(); setShowResponse(true)}}>
            {[{'id':'Name', 'type':'text'},
              {'id':'Phone', 'type':'tel'},
              {'id':'Time', 'type':'datetime-local'}].map((data)=>{
                        return (
                          <div key = {data.id} className='adoption-datadiv'>
                              <label> {data.id} </label>
                              <input type={data.type}
                                     name = {data.id} 
                                      onChange = {updateData}
                                      required />
                          </div>
                        )

                      })}

            <button> Submit </button>

      </form>}

      { showResponse && <ResponseModal Name = {appointmentData.Name} message= 'We appreciate your kindness'/>}
    </div>
  )
}
