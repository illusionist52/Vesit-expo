import './../../src/index.css'

function Steps() {
  return (
  <div className='mt-10'>
    <p className='text-slate-200/50 text-center'>How AcademIQ works</p>
    <h1 className='text-4xl font-bold text-slate-200 text-center md:text-6xl md:mb-10'>Write & share your Moments</h1>
    <div className="relative">
        <div className='h-[200px] w-56 gradient-02 -z-10'></div>
    </div>

    <div className='mt-5 mx-5 flex flex-col gap-y-5 md:flex-row md:mx-auto md:gap-x-5 md:w-[80%]'>
      <div className='bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10'>
        <img className='w-[100px]' src="./WRITE.png" alt="Write about your placemnt experiences" />
        <h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Bundled Experience</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quae tempora porro, facilis dignissimos possimus rerum cupiditate explicabo consequuntur asperiores.</p>
      </div>

      <div className="relative">
        <div className='h-[200px] w-56 gradient-03 -z-10'></div>
      </div>

      <div className='bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10'>
        <img className='w-[90px]' src="./UPLOAD.png" alt="Write about your placemnt experiences" />
        <h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Curated XYZ</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quae tempora porro, facilis dignissimos possimus rerum cupiditate explicabo consequuntur asperiores.</p>
      </div>

      <div className='bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10'>
        <img className='w-[100px]' src="./WRITE.png" alt="Write about your placemnt experiences" />
        <h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Bundled Experience</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quae tempora porro, facilis dignissimos possimus rerum cupiditate explicabo consequuntur asperiores.</p>
      </div>
    </div>
  </div>
  )
}

export default Steps