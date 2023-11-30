import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AcademicDetails from "../Components/AcademicDetails";
import Description from "../Components/Description";
import Progress from "../Components/Progress";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";
import store from "../Users/userSlice";
import createProfie from "../services/apiProfile";
import "../../src/index.css";
import Button from "../Components/Button";
import ProjectTile from "../Components/ProjectTile";
import Skill from "../Components/Skill";

function ProfileDetails() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [project, setProject] = useState(false);
  const [list, setList] = useState(false);
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
      experience: [],
      projects: [],
      achievements: [],
      skills: [],
    };
    createProfie(data, user.id, user.token);
    console.log(data);
  }
  return (
    <div className="flex  justify-center  my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <label className="label">Bio</label>
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
          <p className="text-cyan text-lg">Projects</p>
          {!project && (
            <Button type={"button"} onClick={onAddP} style={"tertiary"}>
              + Add
            </Button>
          )}
        </div>
        <br />
        <div className="mx-6 md:flex gap-2">
          {list &&
            projectList.map((project) => <ProjectTile project={project} />)}
        </div>
        <br />
        {project && (
          <Progress
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

        <label className="text-cyan text-lg mx-6 my-3 ">Skills</label>
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
          <Button style={"tertiary"} type="submit">
            Submit
          </Button>
          <p>SUBMIT button ko thoda bada karna padega, bht chota dikh raha hai</p>
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
