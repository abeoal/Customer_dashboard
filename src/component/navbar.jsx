import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu}from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className=' flex justify-between item-center h-24 max-w-[1240px] mx-auto px-4 pt-4 '>
      <h1 className='w-full text-3xl font-bold text-[#485d8f]'>Insuraflow</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        
        <li className='p-4'>Renwal</li>
        <li className='p-4'>Claims</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden   '>
        {!nav ? <AiOutlineClose size={20} color='black' /> : <AiOutlineMenu size={20} color='black'/>}
        
      </div>
      <div className={!nav ?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#787e78] ease-in-out duration-500' : 'Fixed hidden'}>
      <h1 className='w-full text-3xl font-bold text-[#485d8f] m-4'>Insuraflow</h1>

        
        <ul className='uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Renwal</li>
          <li className='p-4 border-b border-gray-600'>Claims</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
          <li className='p-4 border-b border-gray-600'>About us</li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
