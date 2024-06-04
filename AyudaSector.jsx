import React, { useEffect, useRef, useState } from 'react'
import "./AyudaSector.css"

export const AyudaSector = () => {
    const progressBarRef = useRef(null);
    const qualityIconsRef = useRef(null); // Referencia al contenedor de íconos de calidad
    const [isVisible, setIsVisible] = useState(false);


    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressHeight = (scrolled / scrollHeight) * 140;
        progressBarRef.current.style.height = `${progressHeight}%`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Si el contenedor de íconos de calidad es visible en el viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // Umbral de visibilidad (0: completamente fuera del viewport, 1: completamente dentro)
            }
        );

        if (qualityIconsRef.current) {
            observer.observe(qualityIconsRef.current);
        }

        return () => {
            if (qualityIconsRef.current) {
                observer.unobserve(qualityIconsRef.current);
            }
        };
    }, [qualityIconsRef]);


    return (
        <div className='AyudaSector' ref={qualityIconsRef} id='ayuda'>

            <h1>¡ Te asesoramos !</h1>

            <div className="TextoAsesoramiento">

                <div className="PrimerosDos">

                <div className={`Bloque1 animate__fadeInLeft ${isVisible ? '' : 'esconder'}`}>
                    <h1>1. Conversamos </h1>
                    <p>Sabemos que plasmar tus ideas en la web puede ser abrumador, pero no te preocupes, estamos aquí para hacerlo más fácil.
                        Comenzaremos con una charla informal para comprender tus necesidades y expectativas.
                        Queremos asegurarnos de entender al 100% tu visión para que juntos podamos crear el sitio web perfecto para tu negocio.</p>

                </div>


                <div className={`bloque2 Bloque4 animate__fadeInRight ${isVisible ? '' : 'esconder'}`}>

                    <h1>2. Proponemos</h1>
                    <p>Cada negocio es único, Por eso, te ofrecemos opciones personalizadas que se ajusten a tus necesidades específicas. Ya sea que necesites una tienda Online para vender tus productos o una página web informativa para promocionar tus servicios.</p>

                </div>



                </div>


                <div className="OtrosDos">

                <div className={`Bloque1 animate__fadeInLeft ${isVisible ? '' : 'esconder'}`}>
                    <h1>3. Manos a la obra </h1>
                    <p>Una vez que hayas elegido la forma de pago que mejor se adapte a ti, no perderemos tiempo en ponernos manos a la obra. Nuestro equipo de expertos estará listo para comenzar a trabajar en tu sitio web o tienda en línea, para que puedas ver resultados tangibles en el menor tiempo posible.</p>

                </div>


                <div className={`bloque2 Bloque4 animate__fadeInRight ${isVisible ? '' : 'esconder'}`}>

                    <h1>4. GANÁ</h1>
                    <p>Con una tienda online, puedes evitar los costos comerciales básicos asociados con un local físico, como el alquiler, los servicios públicos y el mantenimiento. Además, con un nivel bajo de inversión inicial, puedes comenzar a vender en línea y ver un retorno de la inversión rápidamente.</p>

                </div>



                </div>

                


                







                <div className='ProgressBar'>

                    <div className="Progress" ref={progressBarRef}>

                    </div>


                </div>


            </div>






        </div>
    )
}
