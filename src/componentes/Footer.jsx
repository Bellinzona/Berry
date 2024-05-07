import React from 'react'
import "./Footer.css"
import imgFooter from "../assets/BerryStudioslogo2.png"

export const Footer = () => {
  return (
    <div className='Footer'>



      <div className="FooterSector">

        <img src={imgFooter} alt="" />



        
          <div className="info">

            <h2>Contacto</h2>

            <h3>Ubicación</h3>
            <p>Buenos Aires, Argentina</p>

            <h3>Instagram</h3>
            <p>@Berry_studios1</p>

            <h3>Email</h3>
            <p>ventas@somoskiwi.com.ar </p>


          </div>





      </div>








    </div>
  )
}
