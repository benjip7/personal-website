import React, {Component, useState} from 'react';
import headshot from "../global_images/headshot.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa" 
import './home-page.css'

function Homepage() {
    const [scrollTop, setScrollTop] = useState(0);
    const [blockNum, setBlockNum] = useState(1);

    const handleScroll = event => {
        setScrollTop(event.currentTarget.scrollTop)
        let current_block = Math.round(scrollTop+1/400)
        if (current_block != blockNum) {
            setBlockNum(blockNum)
            const element = document.getElementById(blockNum.toString());
            element.scrollIntoView()
            console.log(blockNum)
        }
    }

    const redirect = (url) => {
        window.open(url, '_blank', 'noreferrer');
    }

    const print = (mouse) => {
        console.log(mouse);
    }
      
    return (
        <body className='homepage-background' onClick={ (mouse) => print(mouse)} onScroll={(scroll) => handleScroll(scroll)}>
            <div className='main-block' id="1">
                <div className='info-block'>
                    <img src={headshot} alt="headshot"></img>
                    <FaLinkedinIn className='icon-link' onClick={ () => redirect('https://github.com/benjip7')}></FaLinkedinIn>
                    <FaGithub className='icon-link' onClick={ () => redirect('https://www.linkedin.com/in/benji-p-37b008123/')}></FaGithub>
                </div>
                <div className='about-block'>
                    <div>
                        Welcome to me site
                    </div>
                </div>
            </div>
            <div className='main-block' id="2">
                Experience
            </div>
        </body>
    );
  }



  export default Homepage;
