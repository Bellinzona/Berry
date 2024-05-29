import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import "./ConsultaForm.css"
import { tailspin } from 'ldrs'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'


tailspin.register()



export const ConsultaForm = ({ setMostrarConsultaForm }) => {
  const contactosRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cargando, setCargando] = useState(false)





  const cerrarFormulario = () => {

    setMostrarConsultaForm(false); // Modifica el estado mostrarLlamarForm a false
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message
    };
    enviarDatos(formData);
    setCargando(true)
  };



  const enviarDatos = async (data) => {
    try {
      const response = await axios.post('https://serverberry.onrender.com/api/send-email', data);
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
    <div className='FormContainer'>



      <form action="" className='LlamarForm animate__fadeIn' ref={contactosRef} onSubmit={handleSubmit}>

        <h3>Dejar mi consulta</h3>
        <input type="text" placeholder='Tu nombre' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Tu email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea name="" id="" placeholder='¿ En que te podemos ayudar ?' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className='QuieroLlamen' type="submit">Quiero que me llamen</button>
        <p className='Cerrar' onClick={cerrarFormulario} >X</p>


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
}
