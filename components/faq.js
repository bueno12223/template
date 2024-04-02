import React, { useState } from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import useToast from "../hooks/useToast";
import Step from "./stepContainer";

const ContactForm = () => {
  const [toastSuccess, toastError, toastWarning] = useToast();
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event) => {
    setLoading(true);
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      toastError("Por favor, rellena todos los campos");
    }

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: formState }),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      toastError(errorMessage?.error?? "Hubo un error al enviar el mensaje");
    }

    setLoading(false);
    toastSuccess("Mensaje enviado correctamente");
  };

  const handleClick = (event) => {
    event.preventDefault();
    setShowForm(true);

    const element = document.getElementById('contacto');
    if(!element) return;
    element.scrollIntoView({ behavior: "smooth", block: 'center' });
  }

  return (
    <>
    <div className='!m-0 !p-0 w-full custom-opacity'>
      <div className=" m-auto w-5/6 pb-8">
      <div className="flex flex-row w-full m-auto items-center justify-between px-32 pt-24">
      <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Inicia a tu camino
        al éxito
      </h2>
      <div className="flex flex-nowrap items-center gap-4">
      <a
                       href="https://calendly.com/citrusoft/30min"
                       target="_blank"
        className={`px-8 flex gap-2 py-4 text-lg font-medium text-center text-white ${showForm ? '' : 'bg-customYellow'} rounded-md `}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        Agenda una llamada
      </a>
    <button
        onClick={handleClick}
      className=" ml-2 text-lg font-medium text-center dark:text-white flex gap-2"
      >
        Contactar
    </button>
    </div>
    </div>
    <div className="flex justify-center items-center bg-deep-blue p-8 mt-12 w-full m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Step
  number={1}
  title="Análisis y Exploración"
  description="Tomemos juntos los primeros pasos para dar forma a tu solución revolucionaria. Hemos ayudado a más de 100 clientes a alcanzar sus metas"
/>
<Step
  number={2}
  title="Diseño Innovador"
  description="Entendiendo tus necesidades y objetivos únicos, identificamos oportunidades y diseñamos estrategias a medida"
/>
<Step
  number={3}
  title="Construido para Prosperar"
  description="Nuestro equipo está comprometido a crear los mejores productos con la mayor calidad posible. Impulsar el crecimiento es nuestro objetivo"
/>
<Step
  number={4}
  title="Mide tu Crecimiento"
  description="Saber que tu desarrollo está en curso, proporcionamos soporte y datos para ayudarte a tomar mejores decisiones"
/>
      </div>
    </div>
    </div>
    </div>
    <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
          <SectionTitle
        pretitle="Contacto"
        title="Nos encantaría saber de ti, escríbenos"
      />
          <form id='contacto' onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-700 text-lg font-bold mb-2 dark:text-gray-300">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow text-lg appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Jhon Doe" />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2 dark:text-gray-300">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow text-lg appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="tucorreo@email.com" />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-gray-700 text-lg font-bold mb-2 dark:text-gray-300">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline h-32" // Aquí se ha añadido la clase h-32 para hacer el textarea más alto
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje aquí" />
            </div>
            <button disabled={loading} type="submit" className={`px-8 text-lg py-3 text-white bg-customYellow rounded-md w-full ${loading ? 'bg-gray-400' : ''}`}>
              Enviar
            </button>
          </form>

        </div>
    </>
  );
};

export default ContactForm;