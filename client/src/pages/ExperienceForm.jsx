import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Components/Button';
import { createPosts } from '../services/apiPost';
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/userSlice';

function ExperienceForm() {
  const { register , handleSubmit } = useForm();
  const user = useSelector(selectUser)
  function onSubmit(data){
    console.log(data)
    createPosts(data, user.token)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-48 gap-2 mx-auto'>
        <input type='text' {...register("title")}/>
        <input type='text'{...register("summary")}/>
        <input type='text'{...register("domain")}/>
        <input type='date' {...register("date")} />
        <input type='float'{...register("cgpa")}/>
        <textarea type= "text" {...register("mainContent")}/>

        <Button type="submit">SUbmit</Button>
      </form>
    </div>
  )
}

export default ExperienceForm