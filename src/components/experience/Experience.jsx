import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className='container experience-container'>
        <div className='experience-first'>
          <h3>Business Development Associate</h3>
          <h5>Napa's Handlooms</h5>
          <h5>July 2018 - September 2020</h5>
          <p>Job Description</p>
          <ul className='desc-list'>
            <li>Making cold calls to generateleads</li>
            <li>	Generating product leads from OpenMarket</li>
            <li>	Handling product queries and solving clientissues</li>
            <li>Monitor and improve business performance</li>
          </ul>
        </div>
        <div className='experience-second'>
          <h3>Trainee Engineer</h3>
          <h5>Candid Machines</h5>
          <h5>September 2020 - August 2021</h5>
          <p>Job Description</p>
          <ul className='desc-list'>
            <li>	Programmable Logic Control Programmer</li>
            <li>		Supervisory and Data AcquisitionEngineer</li>
            <li>		Human Machine InterfaceDesigner</li>
            <li>CADD Designer</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience