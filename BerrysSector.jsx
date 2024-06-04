import React, { useRef, useEffect, useState } from 'react';
import "./BerrysSector.css";
import foto3 from "../assets/circuloPrueb.png";
import foto4 from "../assets/TelefonoBerry.png";
import foto5 from "../assets/MantenimientoBerry.png";
import foto6 from "../assets/IntegrcionesPng.png";

export const BerrysSector = () => {
    const qualityIconsRef = useRef(null); // Referencia al contenedor de íconos de calidad
    const [isVisible, setIsVisible] = useState(false);

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
        <div className='BerrySector'>
            <h3>¡ Destaca en línea con Berry Studios !</h3>
            <div className="texto">
                <p>¿Aún no tienes presencia en la web? Los clientes están buscando en Google, en redes sociales y en plataformas como MercadoLibre. 
                ¡No pierdas la oportunidad de ser encontrado! 
                Comienza hoy mismo y lleva tu negocio al mundo digital. 🚀</p>
                <div className="EstandaresCalidad" ref={qualityIconsRef}>
                    <div className={`CalidadIcons animate__fadeInUp ${isVisible ? 'mostrar' : ''}`}>
                        <img src={foto3} alt="" />
                        <p>Atención 24hs</p>
                    </div>
                    <div className={`CalidadIcons animate__fadeInUp ${isVisible ? 'mostrar' : ''}`}>
                        <img src={foto4} alt="" />
                        <p>Diseño Mobile</p>
                    </div>
                    <div className={`CalidadIcons animate__fadeInUp ${isVisible ? 'mostrar' : ''}`}>
                        <img src={foto5} alt="" />
                        <p>Mantenimiento</p>
                    </div>
                    <div className={`CalidadIcons animate__fadeInUp ${isVisible ? 'mostrar' : ''}`}>
                        <img src={foto6} alt="" />
                        <p>Mercado Pago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
