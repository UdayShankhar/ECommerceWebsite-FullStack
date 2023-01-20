import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div className='container experience-container'>
        <div className='experience-first'>
          <h3>Full Stack Developer</h3>
          <h5>Blooms Mobility Technologies</h5>
          <h5>May 2022 - Present</h5>
          <p>Job Description</p>
          <ul className='desc-list'>
            <li>Implemented Redux from scratch to the whole application for a better state management.</li>
            <li>Converted the whole Angular 8 application into a PWA app for an enhanced performance. </li>
            <li>Collaborated with product team members to implement new features in the application</li>
          </ul>
        </div>

        <div className='experience-second'>
          <h3>Full Stack Developer Intern</h3>
          <h5>Guvi Geeks Pvt.Ltd</h5>
          <h5>December 2021 - May 2022</h5>
          <p>Job Description</p>
          <ul className='desc-list'>
            <li>Developed and designed eye-catching UI for E-Commerce website and created a secure login.</li>
            <li>Implemented new website features including logic, data filters and pricing models.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience