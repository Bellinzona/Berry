import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../assets/BerryStudioLogo.png";
import 'animate.css';
import menu from "../assets/menu.png";
import { PantallaNavbar } from './PantallaNavbar';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

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

        <div className="NavbarMobile">
          <img src={menu} alt="" className='menuResponsive' onClick={toggleMenu} />

          {showMenu && <PantallaNavbar setShowMenu={setShowMenu} />}
        </div>
      </div>
    </div>
  );
};
