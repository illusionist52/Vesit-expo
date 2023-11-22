import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({children,  style, className, to}) {
  const navigate = useNavigate();

  if(style==="secondary")
  return <button onClick={()=>{navigate(to)}} className='sm:py-1 sm:px-2 md:py-2 md:px-5 rounded-xl bg-inherit border-2 border-lavender border-solid'>{children}</button>
  return (
    <button className='md:py-2 md:px-5 sm:py-1 sm:px-2 bg-lavender rounded-xl text-slate-200' onClick={()=>{navigate(to)}} >{children}</button>
  )
}

export default Button