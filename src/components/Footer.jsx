import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../assets/images/alakel.png";
import LinkedInIcon from "../assets/images/linkedin.png";
import GitHubIcon from "../assets/images/github.png";
import XIcon from "../assets/images/x.png";
import TryHackMeIcon from "../assets/images/tryhackme.png";
import ExercismIcon from "../assets/images/exercism.png";

const Footer = () => {

    return (
        <Container id="footer" className="py-5 mt-4 text-light text-center">
            <Row>
                <Col>
                    <img src={Logo} alt="website logo" className="footer-logo"/>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="footer-icons">
                    <a href="https://www.linkedin.com/in/abdullah-alakel/" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn - Opens in a new tab">
                        <img src={LinkedInIcon} alt="LinkedIn" className="icon"/>
                    </a>
                    <a href="https://github.com/alakeldev" rel="noopener noreferrer" target="_blank" aria-label="GitHub - Opens in a new tab">
                        <img src={GitHubIcon} alt="GitHub" className="icon"/>
                    </a>
                    <a href="https://x.com/alakel993" rel="noopener noreferrer" target="_blank" aria-label="X - Opens in a new tab">
                        <img src={XIcon} alt="X" className="icon"/>
                    </a>
                    <a href="https://tryhackme.com/r/p/alakeldev01" rel="noopener noreferrer" target="_blank" aria-label="TryHackMe - Opens in a new tab">
                        <img src={TryHackMeIcon} alt="TryHackMe" className="icon"/>
                    </a>
                    <a href="https://exercism.org/profiles/AlakelDev01" rel="noopener noreferrer" target="_blank" aria-label="Exercism - Opens in a new tab">
                        <img src={ExercismIcon} alt="Exercism" className="icon"/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;