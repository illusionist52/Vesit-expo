import AchievementsTile from "../Components/AchievementsTile";
import ProjectsTile from "../Components/ProjectsTile";
import Skill from "../Components/Skill";
import "./../../src/index.css";

function ProfilePage() {
  return (
    <div className="bg-gray mb-10">
      <div className="h-[150px] w-full bg-light_purple flex justify-center"></div>
      <img
        className="border-2 border-slate-200 p-1 rounded-full -mt-[50px] w-[150px] mx-auto"
        src="/user.png"
        alt="USER PHOTO"
      />

      {/* DETAILS */}
      <div className="text-center">
        <h1 className="text-lg text-slate-200">USMAAN MOGAL</h1> {/* NAME */}
        <h3 className="text-md text-slate-200/70">@usmaanm@ves.ac.in</h3>{" "}
        {/* NAME */}
      </div>

      {/* LONG DESC */}
      <div className="text-left mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">KNOW ME</h1>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          temporibus nesciunt nisi maiores voluptate ipsam saepe non
          necessitatibus id eligendi magni, aut quisquam officia. Fugiat
          mollitia maiores exercitationem, cupiditate at natus nostrum
          consectetur dolor est. Esse delectus vitae nobis, ...READ MORE
        </p>
      </div>

      {/* PROJECTS */}
      <ul className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">PROJECTS</h1>
        {<ProjectsTile />}
      </ul>

      {/* SKILLS */}
      <div className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">SKILLS</h1>
        <Skill>HTML</Skill>
        <Skill>REACT</Skill>
        <Skill>NODEJs</Skill>
        <Skill>MongoDb</Skill>
        <Skill>JavaScript</Skill>
      </div>

      {/* ACHIEVEMENTS */}
      <ul className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">ACHIEVEMENTS</h1>
        <AchievementsTile />
      </ul>
    </div>
  );
}

export default ProfilePage;
