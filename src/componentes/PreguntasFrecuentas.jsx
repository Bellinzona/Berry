import React from 'react'
import "./PreguntasFrecuentes.css"

export const PreguntasFrecuentas = () => {
    return (
        <div className='PreguntasFrecuentes' id='PreguntasFrecuentes'>

            <h1>Preguntas Frecuentes</h1>

            <div className="PreguntasSector">


                <details >

                    <summary>¿Qué información necesitan de mi negocio para comenzar el desarrollo?</summary>
                    <p className='InfoPreguntas'>Realizamos un relevamiento de tu negocio para poder comprender tus necesidades y objetivos.
                     Este proceso grantiza qe el sitio web se desarrolle de manera efectiva.</p>

                </details>

                <details >

                    <summary>¿Cuánto tiempo tomará crear mi página web?</summary>
                    <p className='InfoPreguntas'>El tiempo de desarrollo de tu página web depende de varios factores, como la complejidad del diseño y
                     la funcionalidad que desees incorporar. Trabajaremos para completar tu sitio en el menor tiempo posible sin comprometer la calidad.
                      Una vez que comprendamos completamente tus necesidades, podremos proporcionarte una estimación más precisa del tiempo que tomará completar tu proyecto.</p>

                </details>

                <details >

                    <summary>¿La página web será compatible con dispositivos móviles?</summary>
                    <p className='InfoPreguntas'>Sí, absolutamente. Todos nuestros diseños de páginas web se optimizan para ser completamente compatibles 
                    con dispositivos móviles. Esto significa que tu sitio se verá y funcionará perfectamente en teléfonos inteligentes y tablets, garantizando una experiencia
                     de usuario consistente y satisfactoria sin importar el dispositivo que utilicen tus visitantes.</p>

                </details>


                <details >

                    <summary>¿Ofrecen servicios adicionales como hosting, Base de datos o integraciones con otras plataformas?</summary>
                    <p className='InfoPreguntas'>Sí, ofrecemos una gama completa de servicios adicionales para complementar
                     tu sitio web. Esto incluye opciones de hosting confiables para alojar tu sitio web en línea, registro de dominios 
                     para asegurar tu identidad en la web y diversas integraciones con otras plataformas según tus necesidades específicas
                     . Estamos aquí para proporcionarte todas las soluciones que requieras para que tu presencia en línea sea un éxito total.</p>

                </details>




            </div>








        </div>
    )
}
