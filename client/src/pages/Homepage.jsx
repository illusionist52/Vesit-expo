import Hero from '../Components/Hero'
import Milestones from '../Components/Milestones'
import './../../src/index.css'
import Steps from '../Components/Steps';
// import LogoSection from '../Components/LogoSection';
import Features from '../Components/Features';

function Homepage() {

  return (
    <div>
      <div className='top-0 -z-10 rounded-br-full w-[300px] h-[200px] bg-gradient-to-b from-light_gray to-lavender/50 absolute blur-2xl'></div>
      <Hero />
      {/* <LogoSection /> */}
      <Milestones/>
      <Steps />
      <Features/>
    </div>
  )
}

export default Homepage