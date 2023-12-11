
function ProjectsTile({project}) {
  return (
    <li className="p-5 border-2 border-slate-200/50 rounded-lg bg-slate-200/10  mt-3 md:max-w-2xl">
      <h1 className="text-2xl text-lavender/80 font-bold">{project.projectTitle}</h1>
      <p className="mt-3">
        {project.projectDescription}
      </p>
      <p className="mt-3">{project.techStackUsed}</p>
    </li>
  );
}

export default ProjectsTile;
