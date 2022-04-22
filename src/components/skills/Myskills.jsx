import React from 'react'
import './Myskills.css'
import { HiOutlineBadgeCheck } from "react-icons/hi";

function Myskills() {
  return (
    <section id='myskills'>
          <h2>My Skills</h2>
          <div className='container experience__container'>
              <div className='experience__frontend'>
                  <h3>Frontend Development</h3>
                  <div className='experience__content'>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                          <h4>HTML</h4>
                      </article>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon' />
                          <h4>CSS</h4>
                      </article>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                          <h4>JavaScript</h4>
                      </article>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                          <h4>BootStrap</h4>
                      </article>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                          <h4>TailWind CSS</h4>
                      </article>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                          <h4>React JS</h4>
                      </article>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                          <h4>TypeScript</h4>
                      </article>
                      <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                          <h4>SCSS</h4>
                      </article>
                  </div>

              </div>

                  <div className='experience__backend'>
                      <h3>Backend Development</h3>
                      <div className='experience__content'>
                          <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                              <h4>Node JS</h4>
                          </article>
                          <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                              <h4>Mongo DB</h4>
                          </article>
                          <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                              <h4>My SQL</h4>
                          </article>
                          <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                              <h4>Express JS</h4>
                          </article>
                          <article className='experience__details'>
                          <HiOutlineBadgeCheck className='experience__details-icon'/>
                              <h4>React JS</h4>
                          </article>
                      </div>
                  </div>
              </div>
          
    </section>
  )
}

export default Myskills