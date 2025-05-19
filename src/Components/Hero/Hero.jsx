import React from 'react'
import './Hero.css';
import profile_img from '../../../public/assets/bindu_logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div 
   id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Hima Bindu Gorre</span>  a MERN Stack Developer</h1>
      <p>A passionate and motivated MERN Stack Developer ready to kickstart my career.</p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
