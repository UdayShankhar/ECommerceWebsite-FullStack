import React from 'react'
import './About.css'
import aboutme2 from '../../images/aboutme2.svg'
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

function About() {
  return (
    <section id='about'>
      <h4 style={{ textAlign: 'center' }}>Get to know</h4>
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
              <h5>Experiece</h5>
              <small>3 Years Working</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about-icon' />
              <h5>Education</h5>
              <small>Bachelor's of Engineering</small>
            </article>

            <article className='about__card'>
              <BsLaptop className='about-icon' />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>
          <p>
            I'm a passionate <b>Full Stack Developer</b> and I would like to secure a challenging position in an organization to expand my learning knowledge and skills also seeking for an   opportunity to fully utilize my training and skills while making a significant contribution to the success of the company.
          </p>
<a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About