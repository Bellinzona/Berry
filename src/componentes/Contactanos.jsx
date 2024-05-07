import React from 'react'
import "./Contactanos.css"
import contacto1 from "../assets/Contacto1.png"
import contacto2 from "../assets/Telefono.png"
import contacto3 from "../assets/mensaje.png"




export const Contactanos = () => {
  return (
    <div className='Contactanos' id='Contactanos'>

        

        <div className="Contactos">
        <h1>Elegí como preferis contactarnos</h1>

        <div className="contactos">


            <div className="whatsapp">
                <img src={contacto1} alt="" />

                <p>Chatear por whatsapp</p>


            </div>

            <div className="whatsapp">
                <img src={contacto2} alt="" />

                <p>Quiero que me llamen</p>


            </div>

            <div className="whatsapp">
                <img src={contacto3} alt="" />

                <p>Quiero dejar mi consulta</p>


            </div>




        </div>




        </div>

    



    </div>
  )
}
