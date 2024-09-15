import React, { useState, useEffect, useRef } from "react";
import Container from "./container";
import { useLanguage } from "../contexts/translate";

const Testimonials = () => {
  const {
    translations: {
      testimonials: { testimonials },
    },
  } = useLanguage();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
      //setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500);
  };

  return (
    <Container id="Testimonios" ref={testimonialRef}>
      <div className="relative flex flex-col w-5/6 justify-center items-center m-auto h-full px-14 rounded-2xl text-center">
        <div
          className={`transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className="text-base leading-norm [&>p]:text-customYellow"
            dangerouslySetInnerHTML={{ __html: testimonials[index].text }}
          />
          <Avatar
            name={testimonials[index].name}
            title={testimonials[index].title}
          />
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-md focus:outline-none"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-md focus:outline-none"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center justify-center text-center mt-8 space-x-3">
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400 text-center">
          {props.title}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
