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
import "../../src/index.css"
import Button from "../Components/Button";

function ProfileDetails() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [project , setProject] = useState(false);
  const user = useSelector(selectUser);
  useEffect(
    function () {
      console.log(user);
    },
    [user],
  );

  function onAddP(){
   
    setProject(true)
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
    <div className="flex justify-center items-center my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-4" >
        <div className="input-wrapper">
        <input
          className="input"
          placeholder="Portfolio Website"
          type="text"
          name="portfolio"
          id="portfolioWebsite"
          {...register("portfolio")}
        />
        <label htmlFor="portfolioWebsite" className="label">Portfolio Website</label>
        </div>
        <br />
        <div className="input-wrapper">       
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
        <div className="input-wrapper">
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
        <div className="input-wrapper">

        
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
        <div className="input-wrapper">
        <textarea
          className="input w-96"
          placeholder="Long desc"
          type="text"
          name="year"
          {...register("longDesciption")}
        />
      
        <label htmlFor="longDesc" className="label" >Long desc</label>
        </div>
        <br />
        <div className="md:flex items-center gap-4">
        <label className="text-cyan text-lg">Projects</label>
        { !project && <Button onClick={onAddP} style={"tertiary"}>+ Add</Button>}
        
        </div>
        <br/>
        {project && <Progress register={register}/>}
       
        <br></br>
        <Button style={"tertiary"} type="submit">Submit</Button>
      </form>
      
    </div>
  );
}

export default ProfileDetails;
