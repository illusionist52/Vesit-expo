import React from 'react'

function ProjectTile({project}) {
  return (
    <div className='border-2 rounded-lg border-dark_purple max-w-xs h-32 text-lavender m-4'>
      <div className='flex-col justify-center items-start mx-2 my-1 gap-3'>     
      <h2 className='text-3xl '>{project.projectTitle}</h2>
      <p className='text-lg ' >{project.projectDescription}</p>
      <p className='text-md '>{project.techStackUsed}</p>
      </div>
    </div>
  )
}

export default ProjectTile