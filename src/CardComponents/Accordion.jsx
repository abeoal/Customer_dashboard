import React, { useState } from "react";

const Accordion = ({ title, steps, status }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const getStatusImage = (index) => {
    if (status === "done") {
      return "green.jpg";
    } else if (status === "nonrefunded") {
      return index === 3 ? "red.png" : "green.jpg";
    } else if (status === "submitted" && index === 0) {
      return "green.png";
    } else if (status === "analyzing" && index <= 1) {
      return index === 1 ? "blue.png" : "green.jpg";
    } else if (status === "decision-taken" && index <= 2) {
      return index === 2 ? "blue.png" : "green.jpg";
    } else if (status === "refunded" && index <= 3) {
      return index === 3 ? "blue.png" : "green.jpg";
    } else {
      return "gray.jpg";
    }
  };

  const getColorClass = (imageName) => {
    switch (imageName) {
      case "green.jpg":
        return "bg-green-500";
      case "red.png":
        return "bg-red-500";
      case "blue.png":
        return "bg-blue-500";
      case "gray.png":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <div className="flex items-center">
          <span className="text-xl font-bold">{title}</span>
          <span className={`ml-3 px-3 py-1 text-sm bg-red-300 border border-red-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}>
            Info
          </span>
        </div>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>

      <div className="flex items-center pt-5">
        <img
          src="./src/assets/Calendar.png"
          className="w-6 h-6 text-gray-800 cursor-pointer p-2 hover:bg-blue-500 hover:rounded-md"
          alt="Calendar"
        />
        <div className="ml-4">
          <p className="text-sm text-gray-500">Submitted Date</p>
          <p className="text-sm text-gray-800">Date</p>
        </div>
      </div>

      <div className="my-4 h-[2px] w-full bg-gray-400" />

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative flex flex-col space-y-4 pl-6">

          {steps.map((step, index) => {
            const statusImage = getStatusImage(index);
            const colorClass = getColorClass(statusImage);

            return (
              <div key={index} className="flex items-center relative z-10">
                <img
                  src={`./pictures/${statusImage}`}
                  alt={`status-${index}`}
                  className="w-8 h-8 rounded-full"
                />

                {index < steps.length - 1 && (
                  <div className={`absolute left-4 top-8 h-full w-[2px] ${colorClass} z-0`}></div>
                )}

                <div className="ml-4">
                  <p className={`font-semibold text-${statusImage.split('.')[0]}`}>{step.label}</p>
                  {step.details && <p className="text-sm text-gray-600">{step.details}</p>}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Accordion;
