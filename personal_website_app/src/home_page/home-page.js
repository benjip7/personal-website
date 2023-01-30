import React, {Component} from 'react';
import headshot from "../global_images/headshot.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa" 
import './home-page.css'

function Homepage() {
    return (
        <body className='homepage-background' onClick={ (mouse) => print(mouse)}>
            <div className='main-block'>
                <div className='info-block'>
                    <img src={headshot} alt="headshot"></img>
                    <FaLinkedinIn className='icon-link' onClick={ () => redirect('https://github.com/benjip7')}></FaLinkedinIn>
                    <FaGithub className='icon-link' onClick={ () => redirect('https://www.linkedin.com/in/benji-p-37b008123/')}></FaGithub>
                </div>
                <div className='about-block'>
                    <h2>About</h2>
                </div>
            </div>
            <div className='main-block'>
            </div>
        </body>
    );
  }

const redirect = (url) => {
    window.open(url, '_blank', 'noreferrer');
}

const print = (mouse) => {
    console.log(mouse);
}
  
  export default Homepage;
