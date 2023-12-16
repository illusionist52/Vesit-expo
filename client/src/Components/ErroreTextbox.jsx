import React from 'react'

function ErroreTextbox({children}) {
  return (
    <div className='text-slate-200 bg-light_gray border-2 m-1 border-slate-100 border-solid rounded-lg max-w-2xl '>
      <h2 className='text-xl font-semibold m-2 '>{children}</h2>
    </div>
  )
}

export default ErroreTextbox