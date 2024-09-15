import React, { useState } from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import useToast from "../hooks/useToast";
import Step from "./stepContainer";
import { useLanguage } from "../contexts/translate";

const ContactForm = () => {
  const {
    translations: { faq, contact },
  } = useLanguage();
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
  const handleClick = (event) => {
    event.preventDefault();

    const element = document.getElementById("contacto");
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className="!m-0 !p-0 w-full custom-opacity">
        <div className=" m-auto w-5/6 pb-8">
          <div className="flex flex-col md:flex-row w-full m-auto items-center justify-between px-10 md:px-32 pt-24">
            <h2 className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white mb-5">
              {faq.title}
            </h2>
            <div className="flex flex-nowrap items-center gap-4">
              <button
                onClick={handleClick}
                className={`px-8 flex gap-2 py-4 text-lg rounded-md font-medium text-center text-white bg-customYellow`}
              >
                {faq.button}
              </button>
              <a
                href="https://wa.me/50762288228"
                target="_blank"
                onClick={() => window.fbq("track", "Schedule")}
                className=" ml-2 text-lg font-medium text-center dark:text-white gap-2 hidden md:flex"
              >
                                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                {faq.secondButton}
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center bg-deep-blue p-8 mt-12 w-full m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {faq.cards.map((card, index) => (
                <Step
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionTitle pretitle={contact.pretitle} title={contact.title} />

    </>
  );
};

export default ContactForm;
