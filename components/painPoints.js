import React from 'react';
import Step from './stepContainer';

const PainPoints = () => {
    const handleClick = async(event) => {
        const element = document.getElementById("contacto");
        if (!element) return;
        element.scrollIntoView({ behavior: "smooth" });
    }
  
  const issues = [
    {
      title: 'Tu equipo pierde tiempo en tareas manuales y repetitivas.',
      icon: '🚫'
    },
    {
      title: 'Tienes demasiadas herramientas desconectadas que no se comunican entre sí.',
      icon: '🚫'
    },
    {
      title: 'No puedes escalar tu negocio sin que todo se vuelva más caótico.',
      icon: '🚫'
    },
    {
      title: 'No tienes visibilidad clara sobre la eficiencia y rendimiento de tus procesos.',
      icon: '🚫'
    },
    {
      title: 'Estás usando sistemas genéricos que no se adaptan completamente a tus necesidades específicas.',
      icon: '🚫'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto">
        <div className="flex justify-center items-center bg-deep-blue p-8 w-full m-auto">
            <div className="flex flex-col w-5/6 m-auto max-w-2xl text-center">
              {issues.map((card, index) => (
                <Step
                  key={index}
                  description={card.title}
                />
              ))}
            </div>
          </div>
      <button
               onClick={handleClick}
                className="px-8 py-4 text-lg flex gap-2 font-medium text-center text-white bg-customYellow rounded-md ">
    Quiero saber más
              </button>
    </div>
  );
};

export default PainPoints;
