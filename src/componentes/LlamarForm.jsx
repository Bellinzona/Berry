import React, { useEffect, useRef, useState } from 'react';
import axios from "axios"
import "./LlamarForm.css";
import Swal from 'sweetalert2'

export const LlamarForm = ({ mostrarLlamarForm, setMostrarLlamarForm }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [name, setNombre] = useState('');
  const [message, setWhatsapp] = useState('');
  const contactosRef = useRef(null);
  const [cargando, setCargando] = useState(false)

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
    setMostrarLlamarForm(false); // Modifica el estado mostrarLlamarForm a false
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      message
    };
    enviarDatos(formData);
    setCargando(true)
  };

  const enviarDatos = async (data) => {
    try {
      const response = await axios.post('https://serverberry.onrender.com/api/send-phone', data);
      console.log('Respuesta del servidor:', response.data);
      setCargando(false)
      Swal.fire({
        position: "bottom",
        icon: "success",
        title: "Se envio correctamente",
        showConfirmButton: false,
        timer: 2000,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }


      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  useEffect(() => {
    // Agregar overflow: hidden al body cuando se monta el componente
    document.body.style.overflow = 'hidden';

    // Ajustar el vh de la página para que el FormContainer sea completamente visible
    if (contactosRef.current) {
      contactosRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Limpiar la propiedad cuando el componente se desmonta
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    mostrarLlamarForm && (
      <div className='FormContainer'>
        <form className='LlamarForm animate__fadeIn' ref={contactosRef} onSubmit={handleSubmit}>
          <h3>Quiero que me llamen</h3>
          <input type="text" placeholder='Tu nombre' value={name} onChange={(e) => setNombre(e.target.value)} />
          <input type="text" placeholder='Tu Whatsapp' value={message} onChange={(e) => setWhatsapp(e.target.value)} />
          <button className='QuieroLlamen' type="submit">Quiero que me llamen</button>
          <p className='Cerrar' onClick={cerrarFormulario}>X</p>



          {cargando && <div className="cargando">

            <l-tailspin
              size="40"
              stroke="5"
              speed="0.9"
              color="black"
            ></l-tailspin>


          </div>}



        </form>


      </div>
    )
  );
};
