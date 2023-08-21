import React from 'react'
import '../styles/landingPage.css'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
    let Navigate=useNavigate()
  return (
    <div>
      <div className="container">
        <section className="left">
            <img src="..\lens-1418954.png" alt="" />
        </section>
        <section className="right">
            <h3>10 Team 04</h3>
            <button onClick={()=>Navigate('/post')}>ENTER</button>
        </section>
      </div>
    </div>
  )
}

export default LandingPage
