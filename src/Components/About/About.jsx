import React from 'react'
import './About.css';
import theme_pattern from '../../../public/assets/theme_pattern.svg';
// import profile_img from '../../assets/image.jpeg';
import img_profile from '../../../public/assets/image.jpeg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={img_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Recently started my journey as a MERN Stack Developer, excited to learn and grow.</p>
                <p>Passionate Data Analyst enthusiastic about uncovering insights through data-driven decisions. Skilled in Power BI for creating impactful dashboards and visualizations.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS </p><hr style={{ width : '50% '}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{ width : '70% '}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{ width : '50% '}}/></div>
                <div className="about-skill"><p>Node Js</p><hr style={{ width : '70% '}}/></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{ width : '60% '}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{ width : '50% '}}/></div>
                <div className="about-skill"><p>Angular Js</p><hr style={{ width : '60% '}}/></div>
                <div className="about-skill"><p>JAVA DEVELOPER</p><hr style={{ width : '80% '}}/></div>
            </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Fresher</h1>
            <p>CUROSITY TO LEARN</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        {/* <div className="about-achievement">
            <h1>DEVELOPER</h1>
        </div> */}
      </div>
    </div>
  )
}

export default About
