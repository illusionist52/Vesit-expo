import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({children,  style, className, to}) {
  const navigate = useNavigate();

  if(style==="secondary")
  return <button onClick={()=>{navigate(to)}} className='py-1 px-2 md:py-2 md:px-5 rounded-xl bg-inherit border-2 border-inherit border-solid hover:bg-light_purple hover:text-slate-200 active:bg-lavender'>{children}</button>
  return (
    <button className='md:py-2 md:px-5 py-2 px-4 bg-lavender rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple hover:shadow-cyan' onClick={()=>{navigate(to)}} >{children}</button>
  )
} 

export default Button