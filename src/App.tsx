import { useState } from 'react'
import { Church, ImportContacts, AssignmentSharp } from '@mui/icons-material'
import './App.css'
import Nav from './Nav.tsx'
import Layer from './Layer'

function App() {

  
  return (
    <div className="home">
      <div className="TopWave">
      </div>
      <Nav />
      {/*<Layer />*/}
      <div className="banner-container wavetext title">
        <div className="bannertxt" >
          <h1>Welcome To</h1>
          <h1 className="dancing-script-font" style={{color: "gold"}}>Transforming Foundation Church!</h1>
          <h2>Join In Person or Online At 10:30 AM Sunday and Tuesdays 7:00 PM</h2>
          <a rel="noreferrer" target="_blank" href="https://fb.watch/qSATZRWpV6/"><button className="calltoaction">Watch Live</button></a>
        </div>
         <img className="banner" src='./banner.png' />
      </div>

      <div className="three-section-info-container wavetext">
          
          <div className="bibleverse-section wavetext">
              <ImportContacts sx={{ fontSize: "5rem" }} />
              <h1> (Romans 12: 2)</h1>
              <p>"And be not conformed to this world: but be ye
              transformed by the renewing of your mind, that ye may prove what is that good, and
              acceptable, and perfect, will of GOD."</p>
          </div>  

          <div className="ourmission-section wavetext">
            <AssignmentSharp sx={{ fontSize: "5rem" }} />
            <h1>What We Believe</h1>
            <p>  We believe there is one eternally existing GOD who has three distinct persons: GOD the Father, GOD the Son, and GOD the Holy Spirit. He is the creator of all that exists, both visible and invisible, and is therefore worthy of all glory and praise. GOD is perfect in love, power, holiness, goodness, knowledge, wisdom, justice, and mercy. He is unchangeable and therefore is the same yesterday, today, and forever.</p>
            <h2>Our Mission</h2>
            <p> To Reach, Teach, Grow, Serve, Love, Disciple
            , Equip, Send, Transform and Impace lives as we journey together in Faith.</p>
            <h2>Our Vision</h2>
            <p>  A Family of Believers that grow into spiritual maturity
            and draw in souls into the family and love them with the love of GOD, to
            break up that hard ground of hurt and brokenness and replant with the Truth of GOD'S word.
            For Growth, Maturity and Development.</p>
            <h2>John 1:12</h2>
            <p> “But as many as received Him, to them gave He power to become the sons of God, even to them that believe on His name:”</p>
          </div>

      
          <div className="join-us-section wavetext">
            <Church sx={{ fontSize: "5rem" }} />
            <h1>Join In Person</h1>
            <p>Sundays 10:30 am Morning Worship</p>

            <p>Tuesdays 7:00 pm Bible Study</p>

            <p>Current Location: 1535 W. Stan Schlueter Loop Bldg. B Killeen TX 76549</p>
          </div>
      </div>

    </div>
  )
}

export default App
