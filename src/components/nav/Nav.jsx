import React,{useState} from 'react'
import './Nav.css'
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Nav() {
  const [activeNav,setactiveNav] = useState('#')
  return (
    <div className='navbar'>
      <a href='#' onClick={()=>setactiveNav('#')} className={activeNav==='#'?'active':''}><AiFillHome/></a>
      <a href='#about' onClick={()=>setactiveNav('#about')} className={activeNav==='#about'?'active':''}><FaUserAlt /></a>
      <a href='#experience' onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><WorkOutlineIcon style={{fontSize:'19px'}} /></a>
      <a href='#services' onClick={() => setactiveNav('#servies')} className={activeNav === '#services' ? 'active' : ''}><GiSkills /></a>
      <a href='#education' onClick={() => setactiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><GiGraduateCap/></a>
      <a href='#myportd' onClick={() => setactiveNav('#myportd')} className={activeNav === '#myportd' ? 'active' : ''}><RiComputerLine /></a>
      <a href='#contact' onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMail /></a>
    </div>
  )
}

export default Nav