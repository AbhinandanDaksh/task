
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 mx-auto my-4 w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
      {children}
     
    </div>
  );
};

export default Card;
