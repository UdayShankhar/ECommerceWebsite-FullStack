import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://github.com/UdayShankhar' target='_blank'><AiFillGithub/></a>
      <a href='https://www.linkedin.com/in/uday-shankhar-853955233/' target='_blank'><AiFillLinkedin/></a>
      {/* <a href='https://www.instagram.com/uday.shankhar/' target='_blank' ><BsInstagram/></a> */}
    </div>
  )
}

export default HeaderSocials