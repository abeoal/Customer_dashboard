import React from 'react'
import { useState } from 'react';
import SideBar1 from '../CardComponents/SideBar1';

const dropDownOptions = [
  {label: 'Option1', value: 'option1'},
  {label: 'Option2', value: 'option2'},
  {label: 'Option3', value: 'option3'},


]

export default function Claim() {
  return (
    <div>
     <div className="mt-9 flex flex-1 flex-col gap-[53px] md:self-stretch sm:gap-[26px]">
      <SideBar1/>
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="mb-[9px] flex w-[53%] flex-col items-start md:w-full">
              <h1 className='text-4xl'> New Claim</h1>
              <h2 className="mt-[21px] text-3xl">Your Vehicle</h2>
              <div className='h-[3px] w-[8%] bg-indigo-600'> 
                <div className='mt-[15px] self-stretch'>
                  <div className='flex flex-col gap-[30px] md:flex-row'>
                  <div className='flex w-full flex-col gap-5'>
                    <div className='flex flex-col items-start gap-1'>
                        <p className='text-black-900'>Vehicle type <span className='text-red-600'>*</span> </p>
                        
                        <select className='self-stretch rounded-lg border border-solid border-gray-600 sm:pr-5'>

                            <option value="Option3">option1</option>

                            <option value="Option2">option2</option>

                            <option value="Option1">option3</option>

                          </select>
                      </div>
                      <div className='flex flex-col items-start gap-0.5'>
                      <p className='text-black-900'>Insurance Type <span className='text-red-600'>*</span> </p>

                      <select className='self-stretch rounded-lg border border-solid border-gray-600 sm:pr-5'>

                        <option value="Option3">option1</option>

                        <option value="Option2">option2</option>

                        <option value="Option1">option3</option>

                      </select>
                      </div>
                      
                  </div>
                  <div className='flex w-full flex-col gap-5'> 
                    <div className='flex flex-col items-start gap-1'>
                      <p className='text-black-900'>Model <span className='text-red-600'>*</span> </p>
                      <input type="text" name="myinput"  className='self-stretch rounded-lg border border-solid border-gray-600 sm:pr-5'/>

                    </div>
                    <div className='flex flex-col items-start gap-1'>
                      <p className='text-black-900'>Registration <span className='text-red-600'>*</span> </p>
                      <input type="text" name="registtration" className='self-stretch rounded-lg border border-solid border-gray-600 sm:pr-5' />
                    </div>

                  </div>
                  <div className='flex w-full flex-col gap-5'> 
                    <div className='flex flex-col items-start gap-1'>
                      <p className='text-black-900'>Insurance ID <span className='text-red-600'>*</span> </p>
                      <input type="text" name="myinput"  className='self-stretch rounded-lg border border-solid border-gray-600 sm:pr-5'/>

                    </div>
                    <div className='flex flex-col items-start gap-1'>
                      <p className='text-black-900'>Expire date <span className='text-red-600'>*</span> </p>
                      <input type="text" name="registtration" className='self-stretch rounded-lg border border-solid border-gray-600 sm:pr-5' />
                    </div>

                  </div> 
                  <img src='pictures/car.png' alt='claimimg' className='flex items-end h-[206px] mx-20 '/>

                  </div>
                </div>

              </div>
            </div>
          
          <div className='flex w-full flex-col gap-[19px] md:w-[77%] '>
            <div className='flex w-full  flex-col items-start md:w-[21%]'>
              <h1>Select incident</h1>
              <div className='h-3px w-24% bg-indigo-600'/>
            </div>
            <div>
              

            </div><div className='flex flex-col items-start gap-[11px]'>
                <p className='text-3xl text-gray-800'> What type of incident occured? </p>
                <div className='flex flex-col gap-[25px] self-stretch md:flex-row'>
                  <button shape="round" className='ww-full border border-solid border-gray-400 font-semibond sm:px-5'>
                    Flooding
                  </button>
                  <button shape="round" className='ww-full border border-solid border-gray-400 font-semibond sm:px-5'>
                    Natural Disaster
                  </button>
                  <button shape="round" className='ww-full border border-solid border-gray-400 font-semibond sm:px-5'>
                    Accident 
                  </button>
                  <button shape="round" className='ww-full border border-solid border-gray-400 font-semibond sm:px-5'>
                    Fire
                  </button>
                  <button shape="round" className='ww-full border border-solid border-gray-400 font-semibond sm:px-5'>
                    Riot
                  </button>
                  <button shape="round" className='ww-full border border-solid border-gray-400 font-semibond sm:px-5'>
                    Terrorism
                  </button>

                </div>
              </div>

          </div>
          </div>
          



        </div>
    </div>
  )
}
