import { useState } from 'react'
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
        <div className="bannertxt">
          <h1>Welcome To</h1>
          <h1>Transforming Foundation Church!</h1>
          <h2>Join In Person or Online At 10:30 AM Sunday and Tuesdays 7:00 PM</h2>
          <button className="calltoaction">Watch Live</button>
        </div>
         <img className="banner" src='./banner.png' />
      </div>

      
       <p className="wavetext"> (Romans 12: 2)</p>
      <p className="wavetext">"And be not conformed to this world: but be ye 
      transformed by the renewing of your mind"
      </p>
  
      <p className="wavetext">
      We are so pleased that you have chosen Transforming Foundation Church, as your place of worship. With the Grace of the Almighty, we are extremely blessed to Welcome you to Transforming Foundation Church. It is really our great pleasure to have you with us. We are happy to get the opportunity to pray with you. We pray that your faith and love for God increase every day. We are willing to support and walk with you as you move towards your purpose in Christ. We are a caring group of individuals who are willing to share God’s love and blessings with you. Thank you very much.
      </p>

      <p className="wavetext">
      Transforming Foundation Church is a Spirit-filled, Christ-centered and Family focused Church. A non-denominational church birthed out of a Prophetic cultural administration where the core belief is based on the foundational truths taught in the bible. All the teaching and ministry is rooted in and flows out of these biblical doctrines.
      </p>
      <div className="titlecontainer meetthepastor">
        <h1 className="wavetext title">Meet The Pastor</h1>
        <img src="./pastor.png" />
      </div>
      <p className="wavetext">
        I am Pastor Michelle Mason, A called, faithful woman of GOD, mother of two adult sons. I have served in ministry for over 25 years. Spear heading Bible Studies and starting Gospel Services around the world to help encourage soldiers while deployed. I have served over 21 years of service in the United States Army. With an education background of a degree in Applied Technology, Graduate of the Sonship School of the Firstborn and Completion of Beatitudes and the Kingdom of GOD at Christian Life School of Theology out of Columbus, GA.
      </p>

      <p className="wavetext">What We Believe</p>
      <p className="wavetext">  We believe there is one eternally existing GOD who has three distinct persons: GOD the Father, GOD the Son, and GOD the Holy Spirit. He is the creator of all that exists, both visible and invisible, and is therefore worthy of all glory and praise. GOD is perfect in love, power, holiness, goodness, knowledge, wisdom, justice, and mercy. He is unchangeable and therefore is the same yesterday, today, and forever.</p>
      <p className="wavetext">Our Mission</p>
      <p className="wavetext"> To advance the Kingdom, multiply the body of Christ, and make disciples for Christ.</p>
      <p className="wavetext">Our Vision</p>
      <p className="wavetext">  To be a body of believers that become the church, that know their identity, walk in their purpose, possess a passion to be disciples, make disciples and Transform generations one life at a time.</p>
      <p className="wavetext">John 1:12</p>
      <p className="wavetext"> “But as many as received Him, to them gave He power to become the sons of God, even to them that believe on His name:”</p>
      

  
      <div className="wavetext">
          <p>FaceBook</p>
        <div>Sundays 10:30 am Morning Worship</div>

        <div>Tuesdays 7:00 pm Bible Study</div>

        <div>Current Location: 1535 W. Stan Schlueter Loop Bldg. B Killeen TX 76549</div>
      </div>
    </div>
  )
}

export default App
