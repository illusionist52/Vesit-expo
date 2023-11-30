import React from "react";
import "../../src/index.css";
import Button from "./Button";
import { useForm } from "react-hook-form";
function Progress({
  techStackUsed,
  setTechStackUsed,
  projectDescription,
  setProjectDescription,
  projectTitle,
  setProjectTitle,
  setProject,
  setProjectList,
  setList,
  projectList,
}) {
  const { handleSubmit, reset } = useForm();

  function onSubmit(data) {
    setProject(false);
    setList(true);
    const newProjects = [...projectList, {projectTitle,projectDescription,techStackUsed}]
    setProjectList(newProjects);
  }

  return (
    <div className="flex-col justify-around items-center gap-3">
      <label className="text-cyan mx-6 my-6 text-lg ">Project Details</label>
      <div className="input-wrapper mx-6">
        <input
          placeholder="Project title"
          type="text"
          name="portfolio"
          className="input"
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <label className="label"> Project title </label>
      </div>
      <br />
      <div className="input-wrapper mx-6">
        <input
          className="input"
          placeholder="Project Description"
          type="text"
          name="year"
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <label className="label"> Project Description </label>
      </div>
      <br />
      <div className="input-wrapper mx-6">
        <input
          className="input"
          placeholder="Tech stack used"
          type="text"
          name="branch"
          onChange={(e) => setTechStackUsed(e.target.value)}
        />
        <label className="label"> Tech stack used </label>
      </div>
      <br />
      <div className="mx-6">
      <Button type={"submit"} onClick={onSubmit} style={"tertiary"}>
        Save
      </Button>
      </div>
    </div>
  );
}

export default Progress;
