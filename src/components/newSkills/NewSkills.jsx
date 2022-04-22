import React from 'react'
import './newskills.css'
import { FiCheckCircle } from "react-icons/fi"

function NewSkills() {
  return (
    <section id='services'>
        <h2>My Skills</h2>
        <div className='container services__container'>
            
            <article className='service'>
                <div className='service__head'>
                   <h3>Front End technologies</h3> 
                </div>
                <ul className='service__list'>
                    <li>
                          <FiCheckCircle className='service__list-icon'/>
                          <span>HTML</span>
                    </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>CSS</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>JavaScript</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>TailWind CSS</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>SCSS</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>React JS</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>TypeScript</span>
                      </li>
                </ul>
            </article>

              <article className='service'>
                  <div className='service__head'>
                      <h3>Back End technologies</h3>
                  </div>
                  <ul className='service__list'>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>Node JS</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>Express JS</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>Mongo DB</span>
                      </li>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>My SQL</span>
                      </li>
                  </ul>
              </article>

              <article className='service'>
                  <div className='service__head'>
                      <h3>Cloud & UI/UX Design</h3>
                  </div>
                  <ul className='service__list'>
                  <h3>Cloud Services</h3>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>AWS Cloud Services</span>
                      </li>
                      <h3>UI/UX Design</h3>
                      <li>
                          <FiCheckCircle className='service__list-icon' />
                          <span>Figma</span>
                      </li>
                  </ul>
              </article>


        </div>
    </section>
  )
}

export default NewSkills