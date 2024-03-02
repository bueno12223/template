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
            <p className="text-2xl leading-normal ">
              Antes de implementar el{" "}
              <Mark> Sistema de Etiquetas a Medida</Mark>, pasábamos horas cada
              semana lidiando con el software genérico que nunca parecía
              ajustarse del todo a nuestras necesidades. Ahora, con una solución
              diseñada específicamente para nosotros, hemos reducido el tiempo
              de impresión de etiquetas en un 70%. La eficiencia y la precisión
              que hemos ganado han transformado nuestra operación logística,
              permitiéndonos enfocarnos en escalar nuestro negocio en lugar de
              pelearnos con la tecnología.
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
            <p className="text-2xl leading-normal ">
              Lanzar nuestra plataforma de e-commerce fue un desafío,
              especialmente en un mercado tan competitivo. Sin embargo, el
              desarrollo de un <Mark>sistema a medida</Mark> que integró pasarelas de pago
              seguras, servicios de entrega a domicilio y seguimiento de envíos
              en tiempo real, nos puso varios pasos adelante de la competencia.
              Nuestros clientes aman la transparencia y la facilidad de uso.
              Nuestras ventas han aumentado un 40% desde el lanzamiento, y la
              fidelidad del cliente nunca ha sido tan alta
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
            <p className="text-2xl leading-normal ">
              La implementación de un <Mark>Sistema de Bodega Integrado con Inteligencia Artificial</Mark> ha revolucionado la forma en que gestionamos nuestro inventario. Antes, las discrepancias de stock y los errores de pedido eran un problema constante. Ahora, la IA nos ayuda a predecir con precisión las necesidades de reabastecimiento, optimiza la disposición de la bodega y mejora la precisión del picking en un 95%. Esto no solo ha mejorado nuestra eficiencia operativa, sino que también ha elevado la satisfacción del cliente al garantizar entregas rápidas y precisas.
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
