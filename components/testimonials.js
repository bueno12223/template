import React, { useState, useEffect } from "react";
import Container from "./container";
import { useLanguage } from "../contexts/translate";

const Testimonials = () => {
    const { translations: { testimonials: { testimonials } } } = useLanguage();
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