import Hero from '../Components/Hero'
import MIlestones from '../Components/MIlestones'
import store from '../Users/userSlice'

function Homepage() {
  console.log(store.getState())
  return (
    <div>
      <Hero />
      <MIlestones/>
    </div>
  )
}

export default Homepage