import React, { useState } from 'react';
import { HiChevronLeft } from "react-icons/hi";
import Summary from '../component/summery';
import CoustmerSelect from '../component/CoustmerSelect';

const Sidebar22 = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'DashBoard', src: 'Chart_fill' },
    { title: 'My claim', src: 'Folder' },
    { title: 'Notification', src: 'chart' },
    { title: 'Help', src: 'Chat' },
  ];

  return (
    <div className='flex'>
      <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-indigo-600 relative`}>
        <HiChevronLeft 
          className={`text-3xl absolute cursor-pointer right-0 top-9 w-7 border-indigo-600 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} 
        />
        <div className='flex gap-x-4 items-center'>
          <h1 className='text-3xl'>Logo</h1>
          <h1 className={`text-white text-xl origin-left font-medium duration-300 ${!open && 'scale-0'}`}>
            Insuraflow
          </h1>
        </div>
        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md`}>
              <img src={`./src/assets/${menu.src}.png`} alt={`${menu.title} icon`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-1 h-screen overflow-auto p-7'>
        <CoustmerSelect />
      </div>
    </div>
  );
}

export default Sidebar22;
