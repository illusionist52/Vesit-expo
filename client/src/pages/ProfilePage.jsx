import { useSelector } from "react-redux";
import AchievementsTile from "../Components/AchievementsTile";
import ProjectsTile from "../Components/ProjectsTile";
import Skill from "../Components/Skill";
import "./../../src/index.css";
import { selectProfile } from "../Slices/profileSlice";
import { selectUser } from "../Slices/userSlice";

function ProfilePage() {

  const profile = useSelector(selectProfile);
  const user = useSelector(selectUser)
  return (
    <div className="bg-gray mb-10">
      <div className="h-[150px] w-full bg-light_purple flex justify-center"></div>
      <img
        className="border-2 border-slate-200 p-1 rounded-full -mt-[50px] w-[150px] mx-auto"
        src={profile.avatar ? profile.avatar :"/user.png"}
        alt="USER PHOTO"
      />

      {/* DETAILS */}
      <div className="text-center">
        <h1 className="text-lg text-slate-200">{user?.name}</h1> {/* NAME */}
        <h3 className="text-md text-slate-200/70">{user?.email}</h3>{" "}
        {/* NAME */}
      </div>

      {/* LONG DESC */}
      <div className="text-left mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">KNOW ME</h1>
        <p className="">
          {profile?.longDesc}
        </p>
      </div>

      {/* PROJECTS */}
      <ul className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">PROJECTS</h1>
        {/* {profile?.projects.map((project,index)=><ProjectsTile key={index} project={project}/>)} */}
      </ul>

      {/* SKILLS */}
      <div className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">SKILLS</h1>
        {/* {profile?.skills.map((skill)=><Skill>{skill}</Skill>)} */}
      </div>

      {/* ACHIEVEMENTS */}
      <ul className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">ACHIEVEMENTS</h1>
        {profile?.achievements}
      </ul>
    </div>
  );
}

export default ProfilePage;
