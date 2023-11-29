import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({children,  style, to, onClick, color, text, hover, active}) {
  const navigate = useNavigate();

  if(style==="custom")
  return <button onClick={onClick} className={`py-1 px-2 md:py-2 md:px-5 rounded-xl bg-${color} text-${text} border-2 border-inherit border-solid hover:bg-${hover} hover:text-slate-200 active:bg-${active}`}>{children}</button>

  if(style==="tertiary")
    return <button onClick={onClick} className='py-1 px-2 md:py-2 md:px-5 rounded-xl font-bold text-gray bg-cyan border-2 border-inherit border-solid hover:bg-light_blue hover:text-gray active:bg-blue'>{children}</button>

  if(style==="secondary")
  return <button onClick={()=>{navigate(to)}} className='py-1 px-2 md:py-2 md:px-5 rounded-xl bg-inherit border-2 border-inherit border-solid hover:bg-light_purple hover:text-slate-200 active:bg-lavender'>{children}</button>
  return (
    <button className='md:py-2 md:px-5 py-2 px-4 bg-lavender rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple hover:shadow-cyan' onClick={()=>{navigate(to)}} >{children}</button>
  )
} 

export default Button