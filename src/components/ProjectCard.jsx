import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <Card className='shadow card' onClick={() => window.open(props.liveProjectLink, '_blank')}>
        <Card.Img variant='top' src={props.projectImage} className='cardImage' />
        <Card.Body className='p-4 card-body'>
          <Card.Title className='fw-bold text-uppercase mb-3 fs-4'>
            {props.projectName}
          </Card.Title>
          <Card.Text>{props.projectDescription}</Card.Text>
          <Button className='shadow text-capitalize view-project-btn' onClick={(e) => {
            e.stopPropagation();
            window.open(props.repoLink, '_blank');
          }}>View Repository</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;