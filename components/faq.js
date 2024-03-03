import React, { useState } from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";

const ContactForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <Container className="!p-0">
            <SectionTitle
        pretitle="Contáctanos"
        title="Envíanos un mensaje"
      ></SectionTitle>
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        <form onSubmit={handleSubmit}>
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
              placeholder="Bruce Wayne"
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
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" // Aquí se ha añadido la clase h-32 para hacer el textarea más alto
              value={formState.message}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje aquí"
            />
          </div>
          <button type="submit" className="px-8 py-3 text-2xl text-white bg-customYellow rounded-md w-full">
            Enviarsa
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;