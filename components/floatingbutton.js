import React from 'react';

const FloatingButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-600 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default FloatingButton;
