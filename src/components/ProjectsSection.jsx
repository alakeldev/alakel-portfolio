import React from 'react';
import ProjectsItems from './ProjectsItems';
import ProjectCard from './ProjectCard';


const ProjectsSection = () => {
  return (
    <div className='py-5' id='projects'>
        <div className='container'>
            <h2 className='mb-5'>MY PROJECTS</h2>
            <div className='row g-4'>
                {
                    ProjectsItems.map((project) => <ProjectCard
                    key={project.id}
                    projectImage={project.projectImg}
                    projectName={project.projectTitle}
                    projectDescription={project.projectDescription}
                    />)
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection;