import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import HamNav from '../Components/HamNav';

function Applayout() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <div>
      <Navbar setToggleHamburger={setToggleHamburger} toggleHamburger={toggleHamburger}/>
      <HamNav toggleHamburger={toggleHamburger} setToggleHamburger={setToggleHamburger} />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Applayout