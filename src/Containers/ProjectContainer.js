import Projects from "../AppData/Projects";
import Project from "../Components/Project";

function ProjectContainer() {
  return (
    <>
      {Projects().map((proj, index, srcArray) => (
        <Project
          key={proj.title}
          title={proj.title}
          picture={proj.picture}
          description={proj.description}
          frontend_link={proj.frontend_link}
          backend_link={proj.backend_link}
          demo_link={proj.demo_link}
          projId={proj.projId}
          nextProj={srcArray[index + 1]?.projId}
        />
        
      ))}
    </>
  );
}

export default ProjectContainer;
