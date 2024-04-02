import React, { useState, useEffect } from "react";
import Container from "./container";

const Testimonials = () => {
    const testimonials = [
        {
            text: "En LiviinX, nuestra nueva plataforma personalizada ha transformado la experiencia de vida. Desde la gestión de reservas hasta la comunicación interna, hemos creado una comunidad más unida y acogedora. <p>La satisfacción de los residentes se ha incrementado en un 3X</p>, ofreciendo un ambiente universitario excepcional.",
            name: "Pablo T., Directora de Residencia",
            title: "Equipo de Desarrollo LiviinX",
        },
        {
            name: "Alejandro G., Director de Tecnología",
            title: "Equipo del Stereo Picnic",
            text: "El Stereo Picnic ha sido revolucionado con nuestra aplicación personalizada. Desde la optimización de la gestión de entradas hasta la mejora en la comunicación con los asistentes, hemos logrado una significativa mejora en la logística del evento. <p>Se ha reducido el tiempo de espera en un 70%</p> a comparación de otros años, brindando una experiencia más satisfactoria. "
        },
        {
            name: "Santiago Espinosa, CEO de Foody Latam",
            title: "Equipo de Desarrollo Foody Latam",
            text: "En Foody Latam, nuestra aplicación personalizada ha transformado por completo el manejo de ventas en línea. Hemos simplificado procesos, permitiendo <p>mejorar la eficiencia y rentabilidad al doble</p> y ofrecer una experiencia de compra más rápida y conveniente."
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 7000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <Container  id='Testimonios'>
                    <div className="flex flex-col w-5/6 justify-center items-center m-auto h-full0 px-14 rounded-2xl text-center fade-in">
                        <p className="text-base leading-norm [&>p]:text-customYellow" dangerouslySetInnerHTML={{ __html: testimonials[index].text }} />
                        <Avatar
                            name={testimonials[index].name}
                            title={testimonials[index].title}
                        />
                    </div>
        </Container>
    );
};

function Avatar(props) {
    return (
        <div className="flex items-center text-center mt-8 space-x-3">
            <div>
                <div className="text-lg font-medium">{props.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
            </div>
        </div>
    );
}

export default Testimonials;