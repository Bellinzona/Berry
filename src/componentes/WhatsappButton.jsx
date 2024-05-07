import React from 'react'
import "./WhatsappButton.css"
import whats from "../assets/Contacto1Verde.png"

export const WhatsappButton = () => {
  return (
    <div className='WhatsappButton'>
        
        <a href="https://api.whatsapp.com/send?phone=1234567890"><img src={whats} alt="" /></a>
        




    </div>
  )
}
