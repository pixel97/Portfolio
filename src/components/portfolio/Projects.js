import React from "react";
import Project from "./Project";

const Projects = (props) => {
  return (
    <div className="portfolio__projects">
      {props.projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
