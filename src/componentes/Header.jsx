import React from 'react'
import "./Header.css";
import fotoPublicidad from "../assets/BerryPublicidad.png"

export const Header = () => {
  return (
    <div className='Header'>



        <div className='HeaderTexto'>


            <h1>Creamos la página web que necesitás, optimizada para tu negocio.</h1>


            <button className='btnContactanos'>Conoce Mas</button>




        </div>


        <div className="HeaderImg">

        <img src={fotoPublicidad} alt="" />


        </div>

        


    </div>
  )
}
