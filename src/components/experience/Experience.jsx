import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className='container experience-container'>
        <div className='experience-first'>
          <h3>Trainee Engineer</h3>
          <h5>Candid Machines</h5>
          <h5>September 2020 - August 2021</h5>
          <p>Job Description</p>
          <ul className='desc-list'>
            <li>Designed 15+ AutoCAD projects for our most-important clients</li>
            <li>Developed various HMI interface for our overseas clients </li>
            <li>Worked as a PLC programmer for various projects</li>
          </ul>
        </div>
        <div className='experience-second'>
          <h3>Business Development Associate</h3>
          <h5>Napa's Handlooms</h5>
          <h5>June 2018 - September 2020</h5>
          <p>Job Description</p>
          <ul className='desc-list'>
            <li>Worked for marketing the products through online which increased the sales of the organization by 35%</li>
            <li>Responsible for tracking and processing online orders</li>
            <li>Monitor and improved business performance</li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default Experience