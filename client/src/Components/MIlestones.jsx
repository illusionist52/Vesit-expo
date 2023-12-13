import "./../../src/index.css";

function Milestones() {
  return (
    <div className="mx-5 mt-20 md:flex md:justify-center md:gap-[200px] md:w-80% md:mx-auto">
      <div>
        <div className="md:flex md:flex-col">
          <p className="text-slate-200/50 text-center">What AcademIQ provides</p>
          <h1 className="text-4xl font-bold text-slate-200 text-center md:text-6xl md:mb-10">You can get</h1>
        </div>
        <div className="mt-5 flex flex-col gap-4 md:mx-auto">
          <div className="max-w-lg flex gap-3 items-center rounded-lg md:flex md:justify-center md:gap-10 md:items-center md:text-center">
            <img
              className="border-2 bg-slate-200/10 border-slate-200/80 rounded-xl p-2 w-[100px]"
              src="./Milestone_Users.png"
              alt="NUMBER OF USERS"
            />
            <h3 className="text-lg">
              <span className="text-5xl font-bold">48</span> Students have
              joined.
            </h3>
          </div>
          <div className="max-w-lg flex gap-3 items-center rounded-lg md:flex md:justify-center md:gap-10 md:items-center md:text-center">
            <img
              className="border-2 bg-slate-200/10 border-slate-200/80 rounded-xl p-2 w-[100px]"
              src="./Milestone_Blog.png"
              alt="NUMBER OF USERS"
            />
            <h3 className="text-lg">
              <span className="text-5xl font-bold">12</span> Experiences is
              added.
            </h3>
          </div>
          <div className="max-w-lg flex gap-3 items-center rounded-lg md:flex md:justify-center md:gap-10 md:items-center md:text-center">
            <img
              className="border-2 bg-slate-200/10 border-slate-200/80 rounded-xl p-2 w-[100px]"
              src="./Milestone_Company.png"
              alt="NUMBER OF USERS"
            />
            <h3 className="text-lg">
              <span className="text-5xl font-bold">39</span> Companies are
              listed.
            </h3>
          </div>
        </div>
      </div>

      {/* GRADIENT */}
      <div className="absolute">
        <div className="md:w-[300px] md:h-[200px] md:mr-[300px] md:mt-[200px] gradient-01"></div>
      </div>
      <img
        className="w-[400px] md:w-[500px]"
        src="./SPIT_LOGO.png"
        alt="DEMO PHOTO"
      />
    </div>
  );
}

export default Milestones;
