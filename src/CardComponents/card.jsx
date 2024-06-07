import React from 'react';

const Card = ({icon, texts}) => {
  return (
    <div className="flex justify-center p-4">
      <button className='w-full max-w-xs bg-white border border-gray-300 rounded-md shadow-sm py-4 px-6 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'>
        <img src={icon} className='h-12 mx-auto mb-4 object-contain' alt="icon" />
        <p className='text-center'>{texts}</p>
      </button>
    </div>
  );
}

export default Card;