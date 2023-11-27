import React from 'react'

function AcademicDetails({register}) {
  return (
    <div>
      <input placeholder='portfolio website' type='text' name='portfolio' {...register('portfolio')}/>
      <br/>
      <input placeholder='college start year' type='text' name='year' {...register('year')} />
      <br/>
      <input placeholder='branch' type='text' name='branch' {...register('branch')} />
    </div>
  )
}

export default AcademicDetails