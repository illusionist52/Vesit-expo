import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import AcademicDetails from '../Components/AcademicDetails';
import Description from '../Components/Description';
import Progress from '../Components/Progress';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../Users/userSlice';
import store from '../Users/userSlice';

function ProfileDetails() {

  const {register , handleSubmit, reset} = useForm();
  const navigate = useNavigate();
  console.log(store.getState())
  const user = useSelector(selectUser)
  console.log(user)
    return (
      <div className='flex justify-center items-center my-20'>
        <form onSubmit={handleSubmit((data)=>{
        console.log(data)
        })}>
        
        <input placeholder='portfolio website' type='text' name='portfolio' {...register('portfolio')}/>
      <br/>
      <input placeholder='college start year' type='text' name='year' {...register('year')} />
      <br/>
      <input placeholder='branch' type='text' name='branch' {...register('branch')} />
      <br/>
      <input placeholder='bio' type='text' name='portfolio' {...register('shortBio')}/>
      <br/>
      <input placeholder='long desc' type='text' name='year' {...register('longDesciption')} />
      <br/>
      <input placeholder='skills' type='text' name='branch' {...register('skills')} />
      <br/>
      <input placeholder='projects' type='text' name='portfolio' {...register('projects')}/>
      <br/>
      <input placeholder='experience' type='text' name='year' {...register('experience')} />
      <br/>
      <input placeholder='achivement' type='text' name='branch' {...register('achievements')} />
        <br>
        </br>

        <button type='submit'>Submit</button>
        </form>
        </div>
    );
   
}

export default ProfileDetails