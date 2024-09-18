import React from 'react';
import ViewMyResumeBtn from './ViewMyResumeBtn';
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

const AboutSection = () => {
  return (
    <div className='text-light py-5' id='about'>
      <div className='container'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className='mb-5 text-center text-uppercase'>About Me</h2>
            <Accordion defaultActiveKey="">
                <Card className='text-center mainCardAccordion'>
                    <Card.Header className='mainCardHeader'>
                        <AboutSectionEvent eventKey="0">My Tech Journey</AboutSectionEvent>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='align-items-center'>
                            <ul>
                            <li className='mb-4'>
                                Hello, I’m Abdullah Alakel. Currently residing in Germany, I have had the opportunity to live in several countries, enriching my cultural perspective and adaptability. My passion for IT has been unwavering since my school days, and I am dedicated to continuously expanding my knowledge and skills in this field.
                            </li>
                            <li className='mb-4'>
                                I am a dedicated and skilled IT professional with a diverse educational background and extensive experience in information technology. I hold a Diploma in Economy and Commerce with a major in Banking Systems from Damascus University, and a Bachelor’s degree in Information Technology from Syrian Virtual University.
                            </li>
                            <li className='mb-4'>
                                With over five years of hands-on experience as an IT technician in Abu Dhabi, I have developed a strong foundation in technical support, system maintenance, and troubleshooting. My expertise is further enhanced by a Diploma in Full Software Development from Code Institute, equipping me with comprehensive skills in software development and programming. I am passionate about leveraging my technical knowledge and problem-solving abilities to contribute to innovative projects and drive organizational success.
                            </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='text-center mainCardAccordion'>
                    <Card.Header className='mainCardHeader'>
                        <AboutSectionEvent eventKey="1">My Coding Skills</AboutSectionEvent>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='align-items-center'>
                            <ul className='ohneDicoration'>
                            <li className='mb-4'>
                                <strong>Javascript, Typescript, React, Bootstrap, jQuery</strong>
                                <ProgressBar now={90} label={`${90}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>Python, Django, Jinja, DRF, Flask</strong>
                                <ProgressBar now={80} label={`${80}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>C++</strong>
                                <ProgressBar now={55} label={`${55}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>C#</strong>
                                <ProgressBar now={40} label={`${40}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>HTML5, CSS3, SASS</strong>
                                <ProgressBar now={90} label={`${90}%`} className='progressBarLanguages'/>
                            </li>
                            <li className='mb-4'>
                                <strong>SQL, PostgresSQL, MySQL</strong>
                                <ProgressBar now={75} label={`${75}%`} className='progressBarLanguages'/>
                            </li>
                            </ul>
                            <ViewMyResumeBtn />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        </div>
    </div>
    );
}

export default AboutSection;
