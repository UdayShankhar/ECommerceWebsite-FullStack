import React from 'react'
import './education.css'
import education from '../../images/education.svg'
import { FaGraduationCap } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

function Education() {
  return (
    <section id='education'>
      <img src={education} alt='' />
      <div className='edu-details'>
        {/* <h4 id='page-title'>My Qualifications</h4> */}
        <h3 className='my-qual'>My Qualifications</h3>
        {/* <div className='ed-det'>
<h2 className='vertical'></h2>
        </div> */}
        <div className='education-detail1'>
          <article>
            <h5>X TH STANDARD</h5>
            <p>Velammal Matriculation Hr.Sec School</p>
            <ul>
              <li>Marks Obtained : 455</li>
              <li>Percentage : 91%</li>
            </ul>
          </article>
        </div>

        <div className='education-detail2'>
          <article>
            <h5>XII TH STANDARD</h5>
            <p>Maharishi Vidya Mandir</p>
            <ul>
              <li>Marks Obtained : 783</li>
              <li>Percentage : 68%</li>
            </ul>
          </article>
        </div>


        <div className='education-detail3'>
          <article>
            <h5>Bachelor's Of Engineering  <span className='dept'>(Electronics And Instrumentation)</span> </h5>
            <div className='edu-logo'>
              <span>
                <lord-icon
                  src="https://cdn.lordicon.com/lupuorrc.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#30e849"
                  style={{ width: '150px', height: '100px' }}>
                </lord-icon>
              </span>
              <div className='clg-mark'>
                <p>Jeppiaar Engineering College , Chennai</p>
                <ul>
                  <li>CGPA : 6.4</li>
                </ul>
              </div>
            </div>
          </article>
        </div>


        <div className='education-detail4'>
          <article className='final-edu'>
            <h5 className='degree' style={{marginLeft:'38px'}} >Bachelor's of Engineering</h5>
            <p style={{marginLeft:'35px'}} >Electronics And Instrumentation</p>
            <p style={{ marginLeft: '48px' }}>Jeppiaar Engineering College</p>
            <ul>
              <li>CGPA : 6.45</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education