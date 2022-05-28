import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectList = projects.map(((project)=> {
  return (
  <ProjectItem key={project.id} technologies={project.technologies}  name={project.name} about={project.about}/>
  )

}
))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
