import Button from './Button'

function Hero() {
  return (
    <div className="h-[90vh]">

      <div className='w-[70px] h-[100px] bg-gradient-to-br from-cyan to-lavender absolute blur-2xl'></div>

      <div className="text-center flex flex-col justify-center h-full container mx-auto px-2 font-black">
        {/* MAIN HEADING */}
        <h1 className="text-4xl mb-6 leading-11">
        Forge Ahead with <br />{' '}
          <span className="text-lavender font-sans">
          PEER-POWERED
          </span>{' '}
          Guidance
        </h1>

        {/* SUB HEADING */}
        <p className="max-w-sm mx-auto mb-4 text-sm">
          Unlock senior student narratives, diverse company rosters, and a dynamic forum empowering you for confident placements and limitless career opportunities!
        </p>

        {/* CALL TO ACTION */}
        <Button>GET STARTED</Button>
      </div>
    </div>

  )
}

export default Hero