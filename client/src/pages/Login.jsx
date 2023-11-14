import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {
  const {register, handleSubmit}= useForm();
  return (
    <div>
        <form onSubmit={handleSubmit((data)=>console.log(data))}>
     
      <label>College email:</label>
      <input type="email" id='email' { ...register("email")} />
      <br/>
      <label>Password:</label>
      <input type="password" id='password' { ...register("password")} />
      <br/>
    
      <button type='submit'>log in</button>
     </form>
    </div>
  )
}

export default Login