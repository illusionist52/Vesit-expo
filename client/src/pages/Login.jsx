import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { login } from '../Users/userSlice';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const {register, handleSubmit}= useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
        <form onSubmit={handleSubmit((data)=>{
            dispatch(login(data))
            navigate("/")
        })}>
     
      <label>College email:</label>
      <input type="email" id='email' { ...register("email")} />
      <br/>
      <label>Password:</label>
      <input type="password" id='password' { ...register("password")} />
      <br/>
        
      <Link>Forgot password?</Link>
      <button type='submit'>log in</button>
     </form>
    </div>
  )
}

export default Login