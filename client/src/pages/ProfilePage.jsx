import { useSelector } from "react-redux";
import AchievementsTile from "../Components/AchievementsTile";
import ProjectsTile from "../Components/ProjectsTile";
import Skill from "../Components/Skill";
import "./../../src/index.css";
import { selectProfile } from "../Slices/profileSlice";
import { selectUser } from "../Slices/userSlice";
import ErroreTextbox from "../Components/ErroreTextbox";
import { useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function ProfilePage() {

  const profile = useSelector(selectProfile);
  const user = useSelector(selectUser)
  const navigate = useNavigate();

  useEffect(function(){
    console.log(profile)
  },[profile])
  return (
    <div className="bg-gray mb-10">
      <div className="h-[150px] w-full bg-light_purple flex justify-center">
        <button onClick={()=>navigate(-1)} className="top-4 left-4 absolute"><IoMdArrowRoundBack size={30} color="black"  /></button>
      </div>
      <img
        className="p-6 bg-slate-300 rounded-full -mt-[50px] w-[150px] mx-auto"
        src={profile.avatar ? `http://localhost:3002/${profile.avatar}`:"/user.png"}
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
          {profile.longDesc ? profile.longDesc: <ErroreTextbox>You have not set the description yet</ErroreTextbox> }
        </p>
      </div>

      {/* PROJECTS */}
      <ul className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">PROJECTS</h1>
        {/* {profile.projects.map((project,index)=><ProjectsTile key={index} project={project}/>)} */}
        {profile.projects ? profile.projects.map((project,index)=><ProjectsTile key={index} project={project}/>): <ErroreTextbox>You have not added any projects yet</ErroreTextbox> }

      </ul>

      {/* SKILLS */}
      <div className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">SKILLS</h1>
        {profile?.skills.map((skill)=><Skill>{skill}</Skill>)}
        {/* {profile.skills ? profile.skills.map((skill)=>{<Skill>{skill}</Skill>}): <ErroreTextbox>You have not added any skills yet</ErroreTextbox> } */}
        

      </div>

      {/* ACHIEVEMENTS */}
      <ul className="mx-5 mt-10">
        <h1 className="text-4xl text-slate-200 font-bold mb-2">ACHIEVEMENTS</h1>
        {/* {profile?.achievements} */}
        {profile.achievements ? <p>{profile.achievements}</p>: <ErroreTextbox>You have not added any achievements yet</ErroreTextbox> }

      </ul>
    </div>
  );
}

export default ProfilePage;
