import React from 'react'
import { NavLink } from "react-router-dom"
import Button from './Button'
function Navbar() {
  return (
    <nav className='sm:mx-10 sm:text-sm p-8 md:mx-[20rem] md:rounded-3xl md:my-5 h-20 md:text-2xl text-lavender font-bold bg-slate-200'>
      
      <ul className='flex items-center h-5 justify-around'>
        <li>
          EXPO
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <NavLink>Forums</NavLink>
        </li>
        <li>
          <NavLink>Experiences</NavLink>
        </li>
        <li>
          <NavLink>Companies</NavLink>
          
        </li>
        <Button style={"secondary"}>SIgnup</Button>
        <Button>Login</Button>
      </ul>
    </nav>
  )
}

export default Navbar