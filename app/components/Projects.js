"use client";
import React from 'react'; 
import ProjectCard from './ProjectCard'; 

const Projects = ({ projects, accentColor }) => {
  return (
    <section id="projects" className="p-8 md:p-16 bg-darkBg text-lightText">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-lightText" style={{ color: accentColor }}>My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} accentColor={accentColor} />
        ))}
      </div>
    </section>
  );
};

export default Projects;