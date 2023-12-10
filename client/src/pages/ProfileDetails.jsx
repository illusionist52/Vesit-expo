import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AcademicDetails from "../Components/AcademicDetails";
import Description from "../Components/Description";
import Progress from "../Components/ProjectDetails";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";
import store from "../Users/userSlice";
import createProfie from "../services/apiProfile";
import "../../src/index.css";
import Button from "../Components/Button";
import ProjectTile from "../Components/ProjectTile";
import Skill from "../Components/Skill";
import ProjectDetails from "../Components/ProjectDetails";
import AvatarUpload from "../Components/AvatarUpload";

function ProfileDetails() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [project, setProject] = useState(false);
  const [list, setList] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [techStackUsed, setTechStackUsed] = useState("");
  const [projectList, setProjectList] = useState([]);
  const user = useSelector(selectUser);
  const [availableSkills, setAvailableSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "SQL",
    "Redux",
    "Django",
    "Angular",
    "Web development",
    "App development",
    "Laravel",
    "Spring boot",
    "GoLang",
  ]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  useEffect(
    function () {
      console.log(user);
    },
    [user],
  );

  function onAddP(e) {
    setProject(true);
  }

  function addSkill(skill) {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  }
  function removeSkill(skill) {
    const updatedSkills = selectedSkills.filter(
      (selectedSkill) => selectedSkill !== skill,
    );
    setSelectedSkills(updatedSkills);
  }

  async function onSubmit(data) {
    data = {
      ...data,
      avatar:avatar,
      experience: [],
      projects: [projectList],
      achievements: [],
      skills: [...selectedSkills],
    };
    const apiData = await createProfie(data, user.id, user.token);
    if (apiData.success === "success") navigate("/");
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-3 md:max-w-3xl md:rounded-xl md:bg-light_gray md:my-10 md:mx-auto text-lavender">

      <h1 className="text-lavender text-5xl font-extrabold text-center" >Profile Details</h1>
      <p className="text-center"> Personalize your experience by providing some details about yourself. We respect your privacy, and this information will only be visible to others if you choose to make it public.</p>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center my-4">
        <AvatarUpload setAvatar={setAvatar}/>
      <label className="text-center">Your avatar</label>
        
        </div>
        <div className="md:flex gap-4">
          <div className="input-wrapper mx-6">
            <input
              className="input"
              placeholder="Portfolio Website"
              type="text"
              name="portfolio"
              id="portfolioWebsite"
              {...register("portfolio")}
            />
            <label htmlFor="portfolioWebsite" className="label">
              Portfolio Website
            </label>
          </div>
          <br />
          <div className="input-wrapper mx-6">
            <input
              className="input"
              placeholder="college start year"
              type="date"
              name="year"
              {...register("year")}
            />
            <label className="label">College start year</label>
          </div>
        </div>
        <br />
        <div className="md:flex gap-4">
          <div className="input-wrapper mx-6">
            <input
              className="input"
              placeholder="Branch"
              type="text"
              name="branch"
              {...register("branch")}
            />
            <label className="label">Branch</label>
          </div>
          <br />
          <div className="input-wrapper mx-6">
            <input
              className="input"
              placeholder="Bio"
              type="text"
              name="portfolio"
              {...register("shortBio")}
            />
            <label className="label">Short Bio</label>
          </div>
        </div>
        <br />
        <div className="input-wrapper mx-6">
          <textarea
            className="input w-72"
            placeholder="Long desc"
            type="text"
            name="year"
            {...register("longDesciption")}
          />

          <label htmlFor="longDesc" className="label">
            Long desc
          </label>
        </div>
        <br />
        <div className="flex mx-6 items-center gap-4">
          <h1 className="text-lavender text-3xl font-bold">Projects</h1>
          {!project && (
            <Button
              type={"button"}
              onClick={onAddP}
              style={"custom"}
              color="lavender"
              text="gray"
              className="font-bold"
              hover="dark_purple"
              active="light_purple"
            >
              + Add
            </Button>
          )}
        </div>
        <div className="mx-6 md:flex gap-2">
          {list &&
            projectList.map((project) => <ProjectTile project={project} />)}
        </div>
        <br />
        {project && (
          <ProjectDetails
            projectList={projectList}
            setProject={setProject}
            projectTitle={projectTitle}
            setProjectTitle={setProjectTitle}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
            techStackUsed={techStackUsed}
            setTechStackUsed={setTechStackUsed}
            setList={setList}
            setProjectList={setProjectList}
          />
        )}

        <label className="text-lavender text-3xl mx-6 my-3 font-bold ">Skills</label>
        {selectedSkills.map((skill, index) => (
          <Skill style={"Sefs"} onClick={() => removeSkill(skill)} key={index}>
            {skill}
          </Skill>
        ))}
        <br />
        <div className="mx-6">
          {availableSkills.map((skill, index) => (
            <Skill key={index} onClick={() => addSkill(skill)}>
              {skill}
            </Skill>
          ))}
        </div>
        <br />
        <div className="text-center">
          <Button style="custom" color="lavender" text="gray" className="font-bold " type="submit">
            Submit
          </Button>
         
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
