import React, { useState } from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import useToast from "../hooks/useToast";

const ContactForm = () => {
  const [toastSuccess, toastError, toastWarning] = useToast();
  const [loading, setLoading] = useState(false);
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

  return (
    <Container id='contacto' className="!p-0">
            <SectionTitle
        pretitle="Contáctanos"
        title="Envíanos un mensaje"
      ></SectionTitle>
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
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
              placeholder="Jhon Doe"
            />
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
              placeholder="tucorreo@email.com"
            />
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
              placeholder="Escribe tu mensaje aquí"
            />
          </div>
          <button disabled={loading} type="submit" className={`px-8 py-3 text-2xl text-white rounded-md w-full ${loading ? 'bg-gray-400' : 'bg-customYellow'}`}>
            Enviar
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;