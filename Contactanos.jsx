import React, { useState, useRef, useEffect } from 'react';
import "./Contactanos.css";
import contacto1 from "../assets/Contacto1.png";
import contacto2 from "../assets/Telefono.png";
import contacto3 from "../assets/mensaje.png";
import { LlamarForm } from './LlamarForm';
import { ConsultaForm } from './ConsultaForm';
import toast, { Toaster } from 'react-hot-toast';

export const Contactanos = () => {
  const [mostrarLlamarForm, setMostrarLlamarForm] = useState(false);
  const [mostrarConsultaForm, setMostrarConsultaForm] = useState(false);
  const contactosRef = useRef(null);

  const toggleMostrarLlamarForm = () => {
    setMostrarLlamarForm(!mostrarLlamarForm);
    if (!mostrarLlamarForm && contactosRef.current) {
        document.body.style.overflow = 'hidden';
      contactosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMostrarConsultaForm = () => {
    setMostrarConsultaForm(!mostrarConsultaForm)

  
    
  }


  useEffect(() => {
    document.body.style.overflow = 'auto';

  },[])


  
  return (
    <div className='Contactanos' id='Contactanos'>
      <div className="Contactos" >
        <h1>Elegí cómo preferís contactarnos</h1>

        
        <div className="contactosP">
          <a href="https://api.whatsapp.com/send?phone=541136181253" className="whatsapp">
          <div className='adentro' >
            <img src={contacto1} alt="" />
            <p>Chatear por WhatsApp</p>
          </div>
          </a>
          <div className="whatsapp" onClick={toggleMostrarLlamarForm} >
            <img src={contacto2} alt="" />
            <p>Quiero que me llamen</p>
          </div>
          <div className="whatsapp" onClick={toggleMostrarConsultaForm}>
            <img src={contacto3} alt="" />
            <p>Quiero dejar mi consulta</p>
          </div>
        </div>
      </div>
      {mostrarLlamarForm && <LlamarForm mostrarLlamarForm={mostrarLlamarForm} setMostrarLlamarForm={setMostrarLlamarForm} />}
      {mostrarConsultaForm && <ConsultaForm mostrarConsultaForm={mostrarConsultaForm} setMostrarConsultaForm={setMostrarConsultaForm} />}
    </div>
  );
};
