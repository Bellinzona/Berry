import React from 'react'
import "./PantallaNavbar.css"

export const PantallaNavbar = ({ setShowMenu }) => {

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className='PantallaNavbar animate__fadeInDownBig'>

      <p className='cerrarBTN' onClick={closeMenu}>X</p>

      <a href="#Paginas">Paginas web</a>
      <a href="#PreguntasFrecuentes">Preguntas Frecuentes</a>
      <a className='btnContactanos responsive' href='#Contactanos'>CONTACTANOS</a>






    </div>
  )
}
