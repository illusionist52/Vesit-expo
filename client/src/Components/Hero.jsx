import Button from "./Button";
import LogoSection from "./LogoSection";

function Hero() {
  return (
    <div className="h-[50dvh]">
      <div className="flex flex-col justify-center h-[500px] container mx-auto p-6 font-black md:items-center">
        {/* MAIN HEADING */}
        <h1 className="text-[40px] text-left mb-6 leading-[1.2] md:text-[4.5rem] md:leading-snug md:items-center md:text-center md:-mt-14">
          Empowerment through <br />{" "}
          <span className="text-lavender font-sans">COLLECTIVE</span> Wisdom
        </h1>

        {/* SUB HEADING */}
        <p className="mb-8 text-left text-sm font-medium md:max-w-2xl md:text-center md:text-lg ">
          Unlock senior student narratives, diverse company rosters, and a
          dynamic forum empowering you for confident placements and limitless
          career opportunities!
        </p>

        {/* CALL TO ACTION */}
        <div className=" flex justify-center mx-auto ">
          <Button style={"primary"}>GET STARTED</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
