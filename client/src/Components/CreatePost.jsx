import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useResolvedPath } from 'react-router-dom';
import { selectProfile } from '../Slices/profileSlice';
import { selectUser } from '../Slices/userSlice';
import { createPosts } from '../services/apiPost';

function CreatePost() {
  const {register, handleSubmit} = useForm();
  const user = useSelector(selectUser);
  async function onSubmit(data)
  {
    data = {
      ...data,
      imageCover: data.imageCover[0]
    }
    console.log(data)
    createPosts(data,user.token);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register("title")}/>
      <input type="text"{...register("summary")}/>
      <input type="file" {...register("imageCover")} />
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default CreatePost