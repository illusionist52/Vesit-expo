import { useSelector } from 'react-redux'
import Hero from '../Components/Hero'
import MIlestones from '../Components/MIlestones'
import store, { selectUser } from '../Users/userSlice'
import { useEffect } from 'react';

function Homepage() {

  const user = useSelector(selectUser);

  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <div>
      <Hero />
      <MIlestones/>
    </div>
  )
}

export default Homepage