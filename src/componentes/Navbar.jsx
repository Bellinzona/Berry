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
            

            <p>Inicio</p>
            <p>Paginas web</p>
            <p>Preguntas Frecuentes</p>
            <button className='btnContactanos'>CONTACTANOS</button>





        </div>






        </div>







    </div>
  )
}
