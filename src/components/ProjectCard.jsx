import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProjectCard = (project) => {
  const {projectName, projectDescription, projectImage, liveProjectLink, repoLink} = project;
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <Card className='shadow card'>
        <Card.Img variant='top' src={projectImage} className='cardImage' />
        <Card.Body className='p-4 card-body'>
          <Card.Title className='fw-bold text-uppercase mb-3 fs-4'>
            {projectName}
          </Card.Title>
          <Card.Text>{projectDescription}</Card.Text>
        </Card.Body>
        <Button className='shadow text-capitalize view-project-btn' onClick={() => window.open(repoLink, '_blank')}>View Repository</Button>
      </Card>
    </div>
  );
};

export default ProjectCard;