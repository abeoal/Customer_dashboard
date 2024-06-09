// VehicleAccordion.js
import React, { useState } from 'react';

const VehicleAccordion = ({ vehicles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-2 text-left text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-lg focus:outline-none"
      >
        <span>Vehicles</span>
        <svg
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 14z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 bg-gray-100 rounded-lg p-4">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="border-b border-gray-300 py-2">
              <p className="text-gray-700"><strong>Model:</strong> {vehicle.model}</p>
              <p className="text-gray-700"><strong>Year:</strong> {vehicle.year}</p>
              <p className="text-gray-700"><strong>License Plate:</strong> {vehicle.licensePlate}</p>
              <p className="text-gray-700"><strong>Expiration Date:</strong> {vehicle.expiredate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleAccordion;
