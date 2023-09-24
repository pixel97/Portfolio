import React from "react";
import Card from "../../components/Card";

const Project = (props) => {
  let project = props.project;
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Anushka Jain Project Image" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
    </Card>
  );
};

export default Project;
/*<div className="portfolio__project-cta">
        {/* <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a> 
      </div>*/
