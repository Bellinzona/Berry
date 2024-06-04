import React from 'react'
import "./Productos.css"
import foto1 from "../assets/ImgenPubliBerry.jpg"
import foto2 from "../assets/ImgenPubliBerry2.jpg"

export const Productos = () => {
  return (
    <div className='productosSector' id='Paginas'>

        <h2>¿ Que necesito para mi negocio ?</h2>

        <div className='Productos'>

            <div className="Producto">

                <img src={foto1} alt="" />

            </div>



            <div className="Producto">
                <img src={foto2} alt="" />

            </div>




        </div>






    </div>
  )
}
