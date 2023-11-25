import React from 'react'
import { FaBuromobelexperte, FaTrophy, FaUser } from "react-icons/fa6";


function MIlestones() {
  return (
    <div className='w-screen h-80 bg-slate-200 text-dark_purple '>
      
        <h2 className='mx-[35rem] pt-5 text-4xl font-bold'>
          Engagement Dashboard
        </h2>
        <div className='c md:flex md:justify-center md:items-center gap-4'>
    <div className=  'mx-5 my-5 max-w-lg h-[13rem] p-2 flex-col items-center rounded-lg '>
    <FaUser size={40} />
    <h3 className='mt-4 text-3xl font-semibold'>48 Users have become member to date</h3>
    </div>
    <div className=  'mx-5 my-5 max-w-lg h-[13rem] p-2 flex-col items-center rounded-lg bg-light_blue'>
    <FaBuromobelexperte size={40} />
    <h3 className='mt-4 text-3xl font-semibold'>12 Experiences have  been contributed so far</h3>
    
          </div>
    <div className=  'mx-5 my-5 max-w-lg h-[13rem]   flex-col rounded-lg items-center'>
    <FaTrophy size={40} />
    <h3 className='mt-4 text-3xl font-semibold'>39 Companies have engaged our services for recruiting developers.</h3>
    </div>
    </div>
    </div>
  )
}

export default MIlestones