import { NavLink } from "react-router-dom"
import Button from './Button'

function Navbar() {
  return (
    <nav className=' sm:text-xs p-8 md:mx-[15rem] md:rounded-3xl md:my-5 flex justify-between items-center h-20 md:text-2xl max-w-[70rem] text-lavender font-bold bg-slate-200'>
     <img className='w-[80px]' src='./../../public/img-1.jpg'/>
      <ul className='flex md:items-center md:h-5 gap-7 justify-around'>
        
        <li>
          <NavLink to="experiences" className='hidden'>Experiences</NavLink>
        </li>
        <li>
          <NavLink to="forums" className='hidden'>Forums</NavLink>
        </li>
        <li>
          <NavLink to="companies" className='hidden'>Companies</NavLink>
          
        </li>
      </ul>
        <div className='flex gap-2'>
        <Button to={"signup"} style={"secondary"}>Signup</Button>
        <Button to={"login"}>Login</Button>
        </div>
    </nav>
  )
}

export default Navbar