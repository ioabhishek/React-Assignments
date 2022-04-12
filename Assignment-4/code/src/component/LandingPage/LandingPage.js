import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='mainLandingPage'>
      <div>
        <img src="./Images/landing.jpg" alt="" width="400px"/>
      </div>
      <div>
        <h1>10X Team 04</h1>
        <Link to="/Postview"><button>Enter</button></Link>
      </div>
    </div>
  )
}

export default LandingPage;