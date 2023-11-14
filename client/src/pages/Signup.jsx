import React from 'react'
import { useForm } from 'react-hook-form'
function Signup() {

  const {register, handleSubmit}= useForm()
  return (
    <div>
     <form onSubmit={handleSubmit((data)=>console.log(data))}>
      <label>Name:</label>
      <input type="text" id='name'{ ...register("name")} />
      <br/>
      <label>College email:</label>
      <input type="email" id='email' { ...register("email")} />
      <br/>
      <label>Password:</label>
      <input type="password" id='password' { ...register("password")} />
      <br/>
      <label>Confirm password:</label>
      <input type="password" id='confirmpassword' { ...register("confirmpassword")} />
      <br/>
      <button type='submit'>SIgn up</button>
     </form>
    </div>
  )
}

export default Signup