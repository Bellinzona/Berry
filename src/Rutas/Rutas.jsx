import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../paginas/Home'


export const Rutas = () => {
  return (
    <div>

        <BrowserRouter>

        <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            



        </Routes>
        
        
        
        </BrowserRouter>





    </div>
  )
}
