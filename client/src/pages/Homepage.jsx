import { useSelector } from 'react-redux'
import Hero from '../Components/Hero'
import Milestones from '../Components/Milestones'
import store from '../Slices/store';
import { selectUser } from '../Slices/userSlice';
import { useEffect } from 'react';
import './../../src/index.css'
import Steps from '../Components/Steps';
import LogoSection from '../Components/LogoSection';
import Features from '../Components/Features';
import { selectProfile } from '../Slices/profileSlice';

function Homepage() {

  const user = useSelector(selectUser);
  const profile = useSelector(selectProfile);

  useEffect(()=>{
    console.log(user)
    console.log(profile)
  },[user])
  return (
    <div>
      {/* <div className='top-0 -z-10 rounded-br-full w-[300px] h-[200px] bg-gradient-to-b from-light_gray to-lavender/50 absolute blur-2xl'></div> */}
      <div className='absolute top-[100px] w-[200px] h-[160px] -z-10 inset-0 gradient-01 md:w-[500px]'></div>
      <Hero />
      <LogoSection />
      <Milestones/>
      <Features/>
      <Steps />
    </div>
  )
}

export default Homepage