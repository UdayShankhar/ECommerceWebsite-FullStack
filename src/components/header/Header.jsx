import React from 'react'
import './Header.css'
import CTA from './CTA'
import programming from '../../images/programming.svg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h2>Hi I'm</h2>
        <h1 style={{letterSpacing:'1px',marginLeft:'12px',fontSize:'50px'}}>Uday Shankhar</h1>
        <h3 className='text-light' style={{ fontSize: '26px', color:'azure'}}>Full Stack Developer</h3>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={programming} alt='programmer' className='programmer-img'></img>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header