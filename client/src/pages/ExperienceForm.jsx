import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Components/Button';
import { createPosts } from '../services/apiPost';
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/userSlice';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

function ExperienceForm() {
  const [value, setValue] = useState();
  const { register , handleSubmit } = useForm();
  const user = useSelector(selectUser)
  function onSubmit(data){
    data = {...data, mainContent:value}
    console.log(data)
    createPosts(data, user.token)
  }

  return (
    <div className='bg-inherit text-black'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-4xl '>
        <input type='text' {...register("title")}/>
        <input type='text'{...register("summary")}/>
        <input type='text'{...register("domain")}/>
        <input type='date' {...register("date")} />
        <input type='float'{...register("cgpa")}/>
        <div className=' bg-slate-200 text-black'>
        <ReactQuill modules={modules} formats={formats} value={value} onChange={(newValue)=>setValue(newValue)}/>
        </div>

        <Button type="submit">SUbmit</Button>
      </form>
    </div>
  )
}

export default ExperienceForm