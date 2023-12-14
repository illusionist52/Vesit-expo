import { motion } from "framer-motion";
import './../../src/index.css'
import { useNavigate } from "react-router-dom"
import { selectUser } from '../Slices/userSlice';
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Hero() {
  const navigate = useNavigate();
  const user = useSelector(selectUser)

  function cta(){
    if(!user.name){
      navigate("/signup")
    }else
    toast.success("You're already logged in")
  }



  return (
    <div className="my-[50px] md:my-[100px]">
      
      {/* GRADIENT DIV */}
      <div className='absolute top-[100px] w-[200px] h-[160px] -z-10 inset-0 gradient-01 md:w-[500px]'></div>

      <div className="flex flex-col justify-center mt-20 container mx-auto p-6 font-black md:items-center">
        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[40px] text-left mb-6 leading-[1.2] md:text-[4.5rem] md:leading-snug md:items-center md:text-center md:-mt-14"
        >
          Empowerment through <br />{" "}
          <span className="text-lavender font-sans">COLLECTIVE</span> Wisdom
        </motion.h1>

        {/* JOB PHOTO */}
        <div className="absolute top-[110px] left-[30px] flex items-center justify-center md:top-[250px] md:left-[180px]">
          <span className="animate-pulse rounded-full border-2 border-slate-300 absolute w-[30px] h-[30px] md:w-[70px] md:h-[70px]"></span>
          <span className="animate-pulse rounded-full border-2 border-slate-300 absolute w-[50px] h-[50px] md:w-[90px] md:h-[90px]"></span>
          <span className="animate-pulse rounded-full border-2 border-slate-300 absolute w-[70px] h-[70px] md:w-[110px] md:h-[110px]"></span>
          <img
            className="abolsute z-10 w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            src="./JOB.png"
            alt="GET YOUR JOBS CONFIRMED"
          />
        </div>

        {/* SUB HEADING */}
        <motion.p initial={{opacity:0, y:40}} whileInView={{opacity:1, y: 0}} transition={{duration: 2}} className="mb-8 text-left text-sm font-medium md:max-w-2xl md:text-center md:text-lg ">
          Unlock senior student narratives, diverse company rosters, and a
          dynamic forum empowering you for confident placements and limitless
          career opportunities!
        </motion.p>

        {/* PLACEMENT PHOTO */}
        <div className="absolute right-4 bottom-[170px] flex items-center justify-center md:bottom-[250px] md:right-[200px]">
          <span className="animate-pulse rounded-full border-2 border-slate-300 absolute w-[30px] h-[30px] md:w-[70px] md:h-[70px]"></span>
          <span className="animate-pulse rounded-full border-2 border-slate-300 absolute w-[50px] h-[50px] md:w-[90px] md:h-[90px]"></span>
          <span className="animate-pulse rounded-full border-2 border-slate-300 absolute w-[70px] h-[70px] md:w-[110px] md:h-[110px]"></span>
          <img
            className="abolsute z-10 w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            src="./PLACEMENT.png"
            alt="GET YOUR JOBS CONFIRMED"
          />
        </div>

        {/* CALL TO ACTION */}
        <div className="pt-5 flex flex-col md:flex-row gap-3 md:gap-5 md:py-10">
          <motion.button initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} transition={{duration: 2}} onClick={cta} className="md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple">Get Started</motion.button>
          <motion.button initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} transition={{duration: 2}} onClick={()=>navigate("/experiences")} className="md:text-[20px] md:py-4 md:px-4 py-2 px-4 border-2 border-solid border-slate-200 rounded-xl bg-light_gray">Explore more &rarr;</motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
