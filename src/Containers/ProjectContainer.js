import Projects from "../AppData/Projects";
import Project from "../Components/Project";

function ProjectContainer() {
  return (
    <div>
      {Projects().map((proj) => (
        <Project
          title={proj.title}
          picture={proj.picture}
          description={proj.description}
          github_link={proj.github_link}
          demo_link={proj.demo_link}
        />
      ))}
    </div>
  );
}

export default ProjectContainer;
