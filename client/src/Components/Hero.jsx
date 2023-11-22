import Button from './Button'

function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <div className="text-center flex flex-col justify-center h-full container mx-auto px-2 leading-loose font-black">
        {/* MAIN HEADING */}
        <h1 className="text-3xl mb-6">
          Chart your career path with{' '}
          <span className="text-lavender font-sans ">
            INSIDER SIGHTS
          </span>{' '}
          and{' '}
          <span className="text-lavender font-sans   font-bold">
            COLLECTIVE LEARNING.
          </span>{' '}
        </h1>

        {/* SUB HEADING */}
        <p className="max-w-sm mx-auto mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ad at excepturi nemo enim, expedita dicta velit libero architecto veritatis molestias quisquam reprehenderit ut nesciunt perspiciatis repudiandae nisi repellat mollitia sequi optio.
        </p>

        {/* CALL TO ACTION */}
        <Button className='w-2' style={'primary'}>GET STARTED</Button>
      </div>
    </div>

  )
}

export default Hero