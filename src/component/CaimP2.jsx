import React, { useState } from "react";
import Card from "../CardComponents/card";
import Sidebar11 from "../CardComponents/SidebarClaimSend";

const ClaimP = () => {
  const [showAccidentTypes, setShowAccidentTypes] = useState(false);
  const [showInput, setInput] = useState(false);
  const [witnesses, setWitnesses] = useState([{ firstName: '', lastName: '', phone: '' }]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [otherAccidentType, setOtherAccidentType] = useState('');

  const toggleInput = () => {
    setInput(!showInput);
  };

  const toggleAccidentTypes = () => {
    setShowAccidentTypes(!showAccidentTypes);
  };

  const toggleAccidentTypesOther = () => {
    setShowAccidentTypes(false);
  };

  const handleWitnessChange = (index, event) => {
    const { name, value } = event.target;
    const newWitnesses = [...witnesses];
    newWitnesses[index][name] = value;
    setWitnesses(newWitnesses);
  };

  const addWitness = () => {
    setWitnesses([...witnesses, { firstName: '', lastName: '', phone: '' }]);
  };

  const removeWitness = (index) => {
    const newWitnesses = [...witnesses];
    newWitnesses.splice(index, 1);
    setWitnesses(newWitnesses);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = files.map(file => URL.createObjectURL(file));
    setUploadedImages([...uploadedImages, ...imagePreviews]);
  };

  const handleOtherAccidentTypeChange = (event) => {
    setOtherAccidentType(event.target.value);
  };

  return (
    <div className="container mx-auto py-8 w-full md:w-[90%]">
      <h2 className="text-2xl font-bold mb-4">New Claim</h2>
      <h2 className="mt-[21px] text-3xl font-bold">Your Vehicle</h2>
      <div className="h-[3px] w-[8%] bg-indigo-600" />
      <div className="flex flex-wrap -mx-4">
        {/* First Container */}
        <div className="w-full md:w-1/2 px-4 pt-5">
          <form>
            <div className="mb-6">
              <label
                htmlFor="inputfield"
                className="block text-sm font-medium text-gray-700 mb-2"
              ></label>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Insurance Type <span className="text-red-600">*</span>{" "}
                  </p>
                  <select className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Audi</option>
                    <option>Prado</option>
                    <option>Toyota</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Select Year <span className="text-red-600">*</span>{" "}
                  </p>
                  <select className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Audi</option>
                    <option>Prado</option>
                    <option>Toyota</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Model <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="model"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Insurance ID <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="insuranceId"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Registration Number <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="text"
                    name="registrationNumber"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Expiry Date <span className="text-red-600">*</span>{" "}
                  </p>
                  <input
                    type="date"
                    name="expiryDate"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-50"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Second Container */}
        <div className="w-full md:w-1/2 px-4">
          <img
            src="./pictures/car1.png"
            alt="Sample Vehicle"
            className="w-full rounded-md border-none"
          />
        </div>
        <div className="flex flex-col items-start gap-[11px] ">
          <p className="text-3xl text-gray-800"> What type of incident occurred? </p>
          <div className="flex flex-col gap-[25px] mt-5 self-stretch md:flex-row w-full">
            <button
              shape="round"
              onClick={toggleAccidentTypesOther}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Flooding
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypesOther}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Natural Disaster
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypes}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Accident
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypesOther}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Fire
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypesOther}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Riot
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypesOther}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Terrorism
            </button>
            <button
              shape="round"
              onClick={toggleInput}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Other
            </button>
          </div>
          {showInput && (
            <input
              placeholder="Describe type of accident"
              className="mt-4 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={otherAccidentType}
              onChange={handleOtherAccidentTypeChange}
            />
          )}
          {showAccidentTypes && (
            <div className="mt-5 flex flex-wrap gap-[15px] ">
              <Card icon={"./pictures/Acc1.PNG"} texts={"Car hit me parked"} />
              <Card icon={"./pictures/Acc11.PNG"} texts={"Hit a parked car"} />
              <Card icon={"./pictures/Acc4.PNG"} texts={"Hit moving car"} />
              <Card icon={"./pictures/Acc2.PNG"} texts={"Rear-ended"} />
              <Card icon={"./pictures/Acc5.PNG"} texts={"Side collision"} />
              <Card icon={"./pictures/Acc8.PNG"} texts={"Side-swiped while driving"} />
              <Card icon={"./pictures/Acc7.PNG"} texts={"Side-swiped while parked"} />
              <Card icon={"./pictures/Acc9.PNG"} texts={"Multiple vehicles"} />
              <Card icon={"./pictures/Acc6.PNG"} texts={"Pedestrian"} />
              <Card icon={"./pictures/Acc3.PNG"} texts={"Cyclist"} />
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-gray-300 mt-10" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-[50%] md:border-r border-gray-300 mt-10 pr-8 md:pr-10">
          <h2 className="text-3xl font-bold">Witness Information</h2>
          {witnesses.map((witness, index) => (
            <div key={index} className="flex flex-wrap -mx-2 mt-4">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <p className="text-black-900">
                  First Name <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  name="firstName"
                  value={witness.firstName}
                  onChange={(e) => handleWitnessChange(index, e)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <p className="text-black-900">
                  Last Name <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  name="lastName"
                  value={witness.lastName}
                  onChange={(e) => handleWitnessChange(index, e)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <p className="text-black-900">
                  Phone Number <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  name="phone"
                  value={witness.phone}
                  onChange={(e) => handleWitnessChange(index, e)}
                  className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {index > 0 && (
                <div className="w-full flex justify-end px-2">
                  <button
                    type="button"
                    onClick={() => removeWitness(index)}
                    className="text-red-600 hover:text-red-900 focus:outline-none"
                  >
                    Remove Witness
                  </button>
                </div>
              )}
            </div>
          ))}
          <div className="w-full flex justify-end px-2 mb-4">
            <button
              type="button"
              onClick={addWitness}
              className="text-blue-600 hover:text-blue-900 focus:outline-none"
            >
              Add Witness
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%] mt-10 px-2 md:pl-10 flex flex-col">
          <h2 className="text-3xl font-bold">Add Image</h2>
          <p className="text-gray-500">Please add any images that may be relevant to the claim.</p>
          <div className="mt-4">
            <input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer inline-block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Upload Images
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {uploadedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Uploaded Preview ${index}`}
                className="w-32 h-32 object-cover border border-gray-300 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimP;
