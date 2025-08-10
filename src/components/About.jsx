import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AboutSectionEvent({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className="modern-button"
    >
      {children}
    </button>
  );
}

const About = () => {
  return (
    <div className='text-light py-5' id='about'>
      <div className='container'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className='mb-5 text-center text-uppercase'>About Me</h2>
            <Accordion defaultActiveKey="">
                <Card className='text-center mainCardAccordion'>
                    <Card.Header className='mainCardHeader'>
                        <AboutSectionEvent eventKey="0">Tech Story</AboutSectionEvent>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='align-items-center'>
                            <ul>
                            <li className='mb-4'>
                                Currently based in Germany, I have gained a global perspective and adaptability through living in several countries. My passion for IT began in my school days and has driven my lifelong commitment to expanding my expertise in the field.
                            </li>
                            <li className='mb-4'>
                                I am a dedicated IT professional with a diverse educational background, holding a Diploma in Economy and Commerce (Banking Systems) from Damascus University and a Bachelor’s degree in Information Technology from Syrian Virtual University.
                            </li>
                            <li className='mb-4'>
                                With over five years of experience as an IT technician in Abu Dhabi, I honed my skills in technical support, system maintenance, and troubleshooting. My expertise was further solidified through a Diploma in Full Software Development from Code Institute, equipping me with comprehensive programming and development skills.
                            </li>
                            <li className='mb-4'>
                                I am passionate about leveraging my technical knowledge and problem-solving abilities to drive innovation and organizational success.
                            </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='text-center mainCardAccordion'>
                    <Card.Header className='mainCardHeader'>
                        <AboutSectionEvent eventKey="1">Tech Skills</AboutSectionEvent>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='align-items-center'>
                            <ul className='ohneDicoration'>
                            <li className='mb-4'>
                                <strong>Javascript</strong>
                                <ProgressBar now={90} label={`${90}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>Typescript</strong>
                                <ProgressBar now={80} label={`${80}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>Python</strong>
                                <ProgressBar now={75} label={`${75}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>PHP</strong>
                                <ProgressBar now={60} label={`${60}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>C#</strong>
                                <ProgressBar now={20} label={`${20}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>SQL</strong>
                                <ProgressBar now={75} label={`${75}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>HTML5</strong>
                                <ProgressBar now={90} label={`${90}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>CSS3</strong>
                                <ProgressBar now={85} label={`${85}%`} className='progressBarLanguages'/>
                            </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        </div>
    </div>
    );
}

export default About;
