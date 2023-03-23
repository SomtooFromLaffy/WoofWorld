import React from 'react'
import { Link } from 'react-router-dom'
import './ModalStyles.css'

export default function ResponseModal({ Name, message }) {
  return (
<div className='msg'>
                            <p>Thanks {Name} !!!!<br/>
                            {message}</p><br/>

                            <button><Link to='/'>HomePage</Link></button>

                        </div>
  )
}
