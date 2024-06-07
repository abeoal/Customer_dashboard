import React, { useState } from "react";
import Card from "../CardComponents/card";
import Sidebar11 from "../CardComponents/Sidebar11";

const ClaimP = () => {
  const [showAccidentTypes, setShowAccidentTypes] = useState(false);

  const[showInput, setInput]=useState(false);

  const toogleInput =() =>{
    setInput(!showInput)
  }

  const toggleAccidentTypes = () => {
    setShowAccidentTypes(!showAccidentTypes);
  };
  const toggleAccidentTypesother =()=>{
    setShowAccidentTypes(false);

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
                    name="myinput"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Insurance ID <span className="text-red-600">*</span>{" "}
                  </p>

                  <input
                    type="text"
                    name="myinput"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Registration Number <span className="text-red-600">*</span>{" "}
                  </p>

                  <input
                    type="text"
                    name="myinput"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <p className="text-black-900">
                    Expiry Date <span className="text-red-600">*</span>{" "}
                  </p>

                  <input
                    type="text"
                    name="myinput"
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
            className="w-full  rounded-md  border-none"
          />
        </div>
        <div className="flex flex-col items-start gap-[11px] ">
          <p className="text-3xl text-gray-800">
            {" "}
            What type of incident occured?{" "}
          </p>
          <div className="flex flex-col gap-[25px] mt-5 self-stretch md:flex-row w-full">
            <button
              shape="round"
              onClick={toggleAccidentTypesother}

              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Flooding
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypesother}

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
              onClick={toggleAccidentTypesother}

              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Fire
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypesother}

              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Riot
            </button>
            <button
              shape="round"
              onClick={toggleAccidentTypesother}

              className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold sm:px-5"
            >
              Terrorism
            </button>
          </div>
        </div>
        {showAccidentTypes && (<div className="flex flex-col mt-10">
          <p className="text-3xl text-gray-800 mt-[21px]"> Accident Type </p>

          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            <div className="flex flex-wrap gap-4">
              <Card icon={"./pictures/Acc10.PNG"} texts={"Car hit me moving"} />
              <Card icon={"./pictures/Acc1.PNG"} texts={"Hit an Object"} />
              <Card icon={"./pictures/Acc3.PNG"} texts={"I hiit object + 1 Car"} />
              <Card icon={"./pictures/Acc4.PNG"} texts={"I Slammed"} />

              <Card icon={"./pictures/Acc5.PNG"} texts={"Hit a pedestrian"} />
              <Card icon={"./pictures/Acc6.PNG"} texts={"Something fell on car"} />
              <Card icon={"./pictures/Acc7.PNG"} texts={"Hit an animal"} />
              <Card icon={"./pictures/Acc8.PNG"} texts={"Both moving"} />
            
            <div className="flex justify-center p-4">
              <button onClick={toogleInput} className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-6 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ">
                <p className="flex justify-center pt-5">Other</p>
              </button>
            </div>
            </div>
            
          </div>
          {showInput && <input type="text" className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-50 " placeholder="Please enter what kind of crush you got into "/>}

        </div>)}
        <div className="mt-10 w-full">
          <p className="text-3xl text-gray-800 mt-[21px]"> Upload Photos </p>
          <div class="flex items-center justify-center w-full mt-6">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-600 dark:hover:bg-bray-100 dark:bg-gray-100 hover:bg-gray-700 dark:border-gray-600 white:hover:border-gray-500 white:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-800 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>

        <div>
          <button className="bg-indigo-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimP;
