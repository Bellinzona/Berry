import React from 'react'
import "./Navbar.css"
import logo from "../assets/BerryStudioLogo.png"
import 'animate.css';

export const Navbar = () => {
  return (
    <div className='Navbar animate__fadeInDown'>


        <div className="containerNavbar">

            <div className='MarcaSector'>
            <img src={logo} alt="" className='logoBerry' />
            <h1>Berry Studios</h1>


            </div>


            
        <div className='otros'>
            

            <a>Inicio</a>
            <a href='#Paginas'>Paginas web</a>
            <a href='#PreguntasFrecuentes'>Preguntas Frecuentes</a>
            <a className='btnContactanos' href='#Contactanos'>CONTACTANOS</a>





        </div>






        </div>







    </div>
  )
}
