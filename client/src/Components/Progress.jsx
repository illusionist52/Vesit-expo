import React from "react";
import "../../src/index.css"
function Progress({ register }) {
  return (
    <div className="flex-col gap-4">
      <div className="input-wrapper">
      <input
        placeholder="Project title"
        type="text"
        name="portfolio"
        className="input"
        {...register("projectTitle")}
      />
      <label className="label"> Project title </label>
      </div>
      <br />
      <div className="input-wrapper">
      <input
        className="input"
        placeholder="Project Description"
        type="text"
        name="year"
        {...register("projectDesc")}
      />
      <label className="label"> Project Description </label>
      </div>
      <br />
      <div className="input-wrapper">
      <input
        className="input"
        placeholder="Tech stack used"
        type="text"
        name="branch"
        {...register("techStackUsed")}
      />
      <label className="label"> Tech stack used  </label>
      </div>
    </div>
  );
}

export default Progress;
