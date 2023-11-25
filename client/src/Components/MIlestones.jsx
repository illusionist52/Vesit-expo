import { FaBuromobelexperte, FaTrophy, FaUser } from "react-icons/fa6";

function MIlestones() {
  return (
    <div className="bg-slate-200 text-dark_purple">
      <h2 className="flex justify-center py-5 text-4xl font-bold">
        Engagement Dashboard
      </h2>
      <div className="md:flex md:justify-around md:items-center py-6">
        <div className="m-5 max-w-md h-[13rem] p-2 flex-col items-center rounded-lg">
          <FaUser size={40} />
          <h3 className="mt-4 text-3xl font-semibold">
            48 Users have become member to date
          </h3>
        </div>
        <div className="m-5 max-w-md h-[13rem] p-2 flex-col items-center rounded-lg bg-light_blue">
          <FaBuromobelexperte size={40} />
          <h3 className="mt-4 text-3xl font-semibold">
            12 Experiences have been contributed so far
          </h3>
        </div>
        <div className="m-5 max-w-md h-[13rem] p-2 flex-col items-center rounded-lg">
          <FaTrophy size={40} />
          <h3 className="mt-4 text-3xl font-semibold">
            39 Companies have engaged our services for recruiting developers.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MIlestones;
