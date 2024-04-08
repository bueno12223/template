import React from 'react'


const Step = ({ number, title, description }) => {
    return (
      <div className="bg-dark-blue rounded-2xl p-6 m-2 bg-trueGray-800 bg-custom-gradient">
        <h3 className="text-customYellow text-lg mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    );
  };

export default Step;