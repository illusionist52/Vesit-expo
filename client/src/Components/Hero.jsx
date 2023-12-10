import Button from "./Button";
import "./../../src/index.css";

function Hero() {
  return (
    <div className="h-[50dvh]">
      <div className="flex flex-col justify-center h-[500px] container mx-auto p-6 font-black md:items-center">
        {/* MAIN HEADING */}
        <h1 className="text-[40px] text-left mb-6 leading-[1.2] md:text-[4.5rem] md:leading-snug md:items-center md:text-center md:-mt-14">
          Empowerment through <br />{" "}
          <span className="text-lavender font-sans">COLLECTIVE</span> Wisdom
        </h1>

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
        <p className="mb-8 text-left text-sm font-medium md:max-w-2xl md:text-center md:text-lg ">
          Unlock senior student narratives, diverse company rosters, and a
          dynamic forum empowering you for confident placements and limitless
          career opportunities!
        </p>

        {/* PLACEMENT PHOTO */}
        <div className="absolute right-4 bottom-[180px] flex items-center justify-center md:bottom-[250px] md:right-[200px]">
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
        <div className="">
          <Button style={"primary"}>GET STARTED</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
