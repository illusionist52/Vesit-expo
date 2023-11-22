import React from 'react'

function Button({children, onClick, style}) {
  if(style==="secondary")
  return <button className='py-2 px-5 rounded-xl bg-slate-200 border-2 border-lavender border-solid'>{children}</button>
  return (
    <button className='py-2 px-5 bg-lavender rounded-xl text-slate-200' onClick={onClick} >{children}</button>
  )
}

export default Button