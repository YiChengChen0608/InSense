import React from 'react'
import LandingPageImg from '../../images/mainpic03.jpg'
import { FiChevronDown } from "react-icons/fi";
import './landingPage.scss'
const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <img src={LandingPageImg} />
      <div className='landing-page-content'>
        <p>SENSE OF ELEGANCE</p>
        <p>SENSE OF FRAGRANCE</p>
        <div className='landing-page-subContent'>
          <p>Discover More</p>
          <FiChevronDown />
        </div>
      </div>
    </div>
  )
}

export default LandingPage