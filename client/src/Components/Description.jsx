import React from 'react'

function Description({register}) {
  return (
    <div>
       <input placeholder='short bio' type='text' name='portfolio' {...register('portfolio')}/>
      <br/>
      <input placeholder='long description' type='text' name='year' {...register('year')} />
      <br/>
      <input placeholder='skills' type='text' name='branch' {...register('branch')} />
    </div>
  )
}

export default Description