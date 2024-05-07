import React from 'react'
import { Navbar } from '../componentes/Navbar'
import { Header } from '../componentes/Header'
import { Productos } from '../componentes/Productos'
import { BerrysSector } from '../componentes/BerrysSector'
import { AyudaSector } from '../componentes/AyudaSector'
import { Contactanos } from '../componentes/Contactanos'
import { PreguntasFrecuentas } from '../componentes/PreguntasFrecuentas'
import { WhatsappButton } from '../componentes/WhatsappButton'
import { Footer } from '../componentes/Footer'

export const Home = () => {
  return (
    <div>

        <Navbar></Navbar>
        <Header></Header>
        <Productos></Productos>
        <BerrysSector></BerrysSector>
        <AyudaSector></AyudaSector>
        <Contactanos></Contactanos>
        <PreguntasFrecuentas></PreguntasFrecuentas>
        <WhatsappButton></WhatsappButton>
        <Footer></Footer>
        


    </div>
  )
}
