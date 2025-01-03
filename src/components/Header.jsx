import React from 'react';
import MyAvatar from '../assets/images/myavatar.png';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header className='pt-5 mainHeader' id='header'>
        <div className='container py-md-5'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column align-items-center justify-content-center mt-5 mt-md-0'>
                    <h3 className='fw-bold lh-1 secondaryTextHeader'>
                        ABDULLAH ALAKEL
                    </h3>
                    <h1 className='text-center lh-1 mb-5 mainTextHeader'>
                        IT Specialist & Full Stack Developer
                    </h1>
                    <a href='#projects'>
                        <Button className='btn viewMyProjectsBtn text-black'>View My Projects</Button>
                    </a>
                </div>
                <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
                    <img className='img-fluid w-75 rounded-circle custom-shadow my-5' src={MyAvatar} alt='my avatar'></img>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;