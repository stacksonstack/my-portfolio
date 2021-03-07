import Projects from "../AppData/Projects";
import Project from "../Components/Project";

function ProjectContainer() {
  return (
    <>
    <div className="project-container">
      {Projects().map((proj) => (
        <Project
          key={proj.title}
          title={proj.title}
          picture={proj.picture}
          description={proj.description}
          frontend_link={proj.frontend_link}
          backend_link={proj.backend_link}
          demo_link={proj.demo_link}
        />
      ))}
    </div>
    </>
  );
}

export default ProjectContainer;
