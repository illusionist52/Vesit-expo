import Button from "./Button";
import LogoSection from "./LogoSection";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="h-[50dvh]">
      <div className="flex flex-col justify-center h-[500px] container mx-auto p-6 font-black md:items-center">
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

        {/* SUB HEADING */}
        <motion.p initial={{opacity:0, x:40}} whileInView={{opacity:1, x: 0}} transition={{duration: 2}} className="mb-8 text-left text-sm font-medium md:max-w-2xl md:text-center md:text-lg ">
          Unlock senior student narratives, diverse company rosters, and a
          dynamic forum empowering you for confident placements and limitless
          career opportunities!
        </motion.p>

        {/* CALL TO ACTION */}
        <div className="">
          <motion.button initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} transition={{duration: 2}} className="md:py-2 md:px-5 py-2 px-4 bg-lavender rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple">Get Started</motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
