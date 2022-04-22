import React, { useRef } from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css"
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i31u58o', 'template_h6bll1l', form.current, 'EiwWzQBVAkMPWXFJt')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me </h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Uday Shankhar</h5>
            <a href='https://www.linkedin.com/in/uday-shankhar-853955233/' target="_blank" rel='noreferrer' >
              View profile
            </a>
          </article>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>EMAIL</h4>
            <h5>shankhar87@gmail.com</h5>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WHATSAPP</h4>
            <h5>7299558340</h5>
            <a href='https://api.whatsapp.com/send?phone=7299558340' target="_blank" rel='noreferrer'>
              Send a message
            </a>
          </article>
        </div>
        <div>
          <form onSubmit={sendEmail} ref={form}>
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary' >Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact