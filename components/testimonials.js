import Image from "next/image";
import React from "react";
import Container from "./container";


const Testimonials = () => {
  return (
<Container>
  <div id='Testimonios' className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
        <p className="text-base leading-normal">
          En LiviinX, nuestra nueva plataforma personalizada ha transformado la experiencia de vida. Desde la gestión de reservas hasta la comunicación interna, hemos creado una comunidad más unida y acogedora. <Mark>La satisfacción de los residentes se ha incrementado en un 3X</Mark>, ofreciendo un ambiente universitario excepcional.
        </p>
        <Avatar
          name="Pablo T., Directora de Residencia"
          title="Equipo de Desarrollo LiviinX"
        />
      </div>
    </div>
    <div className="">
      <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
        <p className="text-base leading-normal">
          El Stereo Picnic ha sido revolucionado con nuestra aplicación personalizada. Desde la optimización de la gestión de entradas hasta la mejora en la comunicación con los asistentes, hemos logrado una significativa mejora en la logística del evento. <Mark>Se ha reducido el tiempo de espera en un 70%</Mark>, brindando una experiencia más satisfactoria.
        </p>
        <Avatar
          name="Alejandro G., Director de Tecnología"
          title="Equipo de Desarrollo Stereo Picnic"
        />
      </div>
    </div>
    <div className="">
      <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
        <p className="text-base leading-normal">
          En Foody Latam, nuestra aplicación personalizada ha transformado por completo el manejo de ventas en línea. Hemos simplificado procesos, permitiendo <Mark>mejorar la eficiencia y rentabilidad al doble</Mark> y ofrecer una experiencia de compra más rápida y conveniente.
        </p>
        <Avatar
          name="Sofía R., CEO de Foody Latam"
          title="Equipo de Desarrollo"
        />
      </div>
    </div>
  </div>
</Container>


  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">

      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <span className=" text-customYellow">
        {props.children}
      </span>{" "}
    </>
  );
}

export default Testimonials;
