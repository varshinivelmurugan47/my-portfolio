import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <ProjectCard
        title="Portfolio Website"
        description="A personal website built with React to showcase my skills and work."
        link="https://github.com/varshiniv/portfolio"
      />
      <ProjectCard
        title="Cybersecurity Dashboard"
        description="A project to visualize system vulnerabilities and logs."
        link="https://github.com/varshiniv/security-dashboard"
      />
      <ProjectCard
        title="Blog Website"
        description="A simple blog built with Node.js and MongoDB."
        link="https://github.com/varshiniv/blog"
      />
    </div>
  );
}

export default Projects;
