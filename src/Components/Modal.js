import React from 'react'
import './Modal.css'

export default function Modal({children}) {
  return (
    <div className="modal-backdrop">
        <div className= "modal">
            <h2>{children}</h2>
            
        </div>
      
    </div>
  )
}
