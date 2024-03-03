import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-base   leading-normal ">
              Antes, lidiábamos con un software genérico que no se adaptaba a
              nuestras necesidades. Ahora, con el
              <Mark>Sistema de Etiquetas a Medida</Mark> , redujimos el tiempo
              de impresión en un 70%. Esta solución personalizada transformó
              nuestra operación logística, permitiéndonos enfocarnos en hacer
              crecer nuestro negocio en lugar de luchar con la tecnología.
            </p>

            <Avatar
              image={userOneImg}
              name="Alexa R."
              title="Gerente de
              Operaciones, Distribuidora Soluciones Integrales"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-base leading-normal ">
              Lanzar nuestra plataforma de e-commerce fue un desafío, pero el
              <Mark>desarrollo de un sistema a medida</Mark> que integra
              pasarelas de pago seguras, servicios de entrega y seguimiento en
              tiempo real nos colocó por delante de la competencia. Nuestros
              clientes adoran la transparencia y la facilidad de uso. Desde su
              lanzamiento, nuestras ventas han aumentado un 40% y la fidelidad
              del cliente nunca ha sido tan alta.
            </p>
            <Avatar
              image={userTwoImg}
              name="Marco T., Fundador"
              title="Tienda Online EcoModa"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-base leading-normal">
              La implementación del <Mark>Sistema de Bodega con Inteligencia
              Artificial</Mark> ha revolucionado nuestra gestión de inventario. Antes,
              las discrepancias y errores eran constantes, pero ahora la IA nos
              ayuda a prever necesidades, optimizar el espacio y mejorar la
              precisión en un 95% en el picking. Esto ha mejorado nuestra
              eficiencia operativa y la satisfacción del cliente con entregas
              más rápidas y precisas.
            </p>
            <Avatar
              image={userThreeImg}
              name="Tomas C., Director de Logística"
              title="Electrónicos Innovadores SA"
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
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
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
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
