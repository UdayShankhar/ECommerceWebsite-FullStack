import React from 'react'
import './About.css'
import aboutme2 from '../../images/aboutme2.svg'
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

function About() {
  return (
    <section id='about'>
      {/* <h4 style={{ textAlign: 'center' }}>Get to know</h4> */}
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={aboutme2} alt='' className='ab2-img'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about-icon' />
              <h4 style={{ color:'wheat'}}>Experiece</h4>
              <h5>3 Years Working</h5>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about-icon' />
              <h4 style={{ color: 'wheat' }}>Education</h4>
              <h5>Bachelor's of Engineering</h5>
            </article>

            <article className='about__card'>
              <BsLaptop className='about-icon' />
              <h4 style={{ color: 'wheat' }}>Projects</h4>
              <h>40+ Completed</h>
            </article>
          </div>
          <p style={{fontSize:'20px'}}>
            A hardworking and passionate <b>Full Stack Developer </b>  who can work on both the front
            end and the back end of a website and application and have created
            many projects involving databases, APIs and designed many user interfacing websites.

          </p>
<a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About