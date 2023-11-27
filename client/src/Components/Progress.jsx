import React from 'react'

function Progress({register}) {
  return (
    <div>
       <input placeholder='achievements' type='text' name='portfolio' {...register('achievements')}/>
      <br/>
      <input placeholder='projects' type='text' name='year' {...register('projects')} />
      <br/>
      <input placeholder='experience' type='text' name='branch' {...register('experience')} />
    </div>
  )
}

export default Progress