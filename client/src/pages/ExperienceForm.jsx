import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import { createPosts } from "../services/apiPost";
import { useSelector } from "react-redux";
import { selectUser } from "../Slices/userSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function ExperienceForm() {
  const [value, setValue] = useState();
  const { register, handleSubmit } = useForm();
  const user = useSelector(selectUser);
  function onSubmit(data) {
    data = { ...data, mainContent: value };
    console.log(data);
    createPosts(data, user.token);
  }

  return (
    <div className="bg-inherit text-black m-5 md:m-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl flex flex-col items-center justify-center gap-y-4"
      >
        <div className="relative">
          <input
            className="input"
            placeholder="title hai idhar"
            type="text"
            {...register("title")}
          />
          <label className="label-fixed" htmlFor="Title">
            title
          </label>
        </div>

        <div className="relative">
          <input
            className="input"
            placeholder="Summary ayega idhar"
            type="text"
            {...register("summary")}
          />
          <label className="label-fixed" htmlFor="Summary">
            Summary
          </label>
        </div>

        <div className="relative">
          <input
            className="input"
            type="text"
            placeholder="Domain bata re baba"
            {...register("domain")}
          />
          <label className="label-fixed" htmlFor="Domain">
            Domain
          </label>
        </div>

        <div className="relative">
          <input className="input" type="date" {...register("date")} />
          <label htmlFor="Date" className="label-fixed">
            Date
          </label>
        </div>

        <div className="relative">
          <input
            className="input"
            type="float"
            placeholder="Enter your CGPA"
            {...register("cgpa")}
          />
          <label htmlFor="CGPA" className="label-fixed">CGPA</label>
        </div>

        <div className=" bg-tranperant text-slate-200 relative">
          <ReactQuill
            className="text-white rounded-3xl"  
            modules={modules}
            formats={formats}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          {/* <label className="label-fixed" htmlFor="Main Content">Data</label> */}
        </div>

        <Button type="submit">SUbmit</Button>
      </form>
    </div>
  );
}

export default ExperienceForm;
