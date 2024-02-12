import { useState } from 'react'
import './App.css'
import Nav from './Nav.tsx'

function App() {

  
  const layer2a = <svg className="layer a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5EAA78" fillOpacity="1" d="M0,96L30,85.3C60,75,120,53,180,74.7C240,96,300,160,360,176C420,192,480,160,540,170.7C600,181,660,235,720,229.3C780,224,840,160,900,112C960,64,1020,32,1080,64C1140,96,1200,192,1260,213.3C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                  </svg>;
  const layer2b = <svg className="layer b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="#5EAA78" fillOpacity="1" d="M0,256L30,218.7C60,181,120,107,180,90.7C240,75,300,117,360,122.7C420,128,480,96,540,112C600,128,660,192,720,208C780,224,840,192,900,176C960,160,1020,160,1080,154.7C1140,149,1200,139,1260,144C1320,149,1380,171,1410,181.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>;

  const layer3a = <svg className="layer a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(144, 15, 15, 1.0)" fillOpacity="1" d="M0,96L30,85.3C60,75,120,53,180,74.7C240,96,300,160,360,176C420,192,480,160,540,170.7C600,181,660,235,720,229.3C780,224,840,160,900,112C960,64,1020,32,1080,64C1140,96,1200,192,1260,213.3C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
  
                  </svg>;
  const layer3b = <svg className="layer b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="rgba(144, 15, 15, 1.0)" fillOpacity="1" d="M0,256L30,218.7C60,181,120,107,180,90.7C240,75,300,117,360,122.7C420,128,480,96,540,112C600,128,660,192,720,208C780,224,840,192,900,176C960,160,1020,160,1080,154.7C1140,149,1200,139,1260,144C1320,149,1380,171,1410,181.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
              
                  </svg>;

  const layer4a = <svg className="layer a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5EAA78" fillOpacity="1" d="M0,96L30,85.3C60,75,120,53,180,74.7C240,96,300,160,360,176C420,192,480,160,540,170.7C600,181,660,235,720,229.3C780,224,840,160,900,112C960,64,1020,32,1080,64C1140,96,1200,192,1260,213.3C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                  </svg>;
  const layer4b = <svg className="layer b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="#5EAA78" fillOpacity="1" d="M0,256L30,218.7C60,181,120,107,180,90.7C240,75,300,117,360,122.7C420,128,480,96,540,112C600,128,660,192,720,208C780,224,840,192,900,176C960,160,1020,160,1080,154.7C1140,149,1200,139,1260,144C1320,149,1380,171,1410,181.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>;
  const layer1 = <svg className="layer  one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#BFE5EF" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,181.3C672,160,768,160,864,186.7C960,213,1056,267,1152,282.7C1248,299,1344,277,1392,266.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>;

  const layer5 = <svg className="layer bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#D5CEBA" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,181.3C672,160,768,160,864,186.7C960,213,1056,267,1152,282.7C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>;

  

  return (
    <div className="home">
      <div className="TopWave">
      {layer1}
      </div>
      <Nav />
      <div className="titlecontainer">
        <div><h1 className="wavetext title">Transforming Foundation Church</h1></div>
      </div>
      <div>{layer2a}</div>
      <div>{layer2b}</div>
       <p className="wavetext"> (Romans 12: 2)</p>

      <p className="wavetext">"And be not conformed to this world: but be ye 
      transformed by the renewing of your mind"
      </p>

       <div>{layer3a}</div>
      <div id="welcometag">{layer3b}</div>

      <p className="wavetext">
      We are so pleased that you have chosen Transforming Foundation Church, as your place of worship. With the Grace of the Almighty, we are extremely blessed to Welcome you to Transforming Foundation Church. It is really our great pleasure to have you with us. We are happy to get the opportunity to pray with you. We pray that your faith and love for God increase every day. We are willing to support and walk with you as you move towards your purpose in Christ. We are a caring group of individuals who are willing to share God’s love and blessings with you. Thank you very much.
      </p>

       <div>{layer2a}</div>
      <div id="abouttag">{layer2b}</div>
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

       <div>{layer3a}</div>
      <div>{layer3b}</div>

      <p className="wavetext">What We Believe</p>
      <p className="wavetext">  We believe there is one eternally existing GOD who has three distinct persons: GOD the Father, GOD the Son, and GOD the Holy Spirit. He is the creator of all that exists, both visible and invisible, and is therefore worthy of all glory and praise. GOD is perfect in love, power, holiness, goodness, knowledge, wisdom, justice, and mercy. He is unchangeable and therefore is the same yesterday, today, and forever.</p>
      <p className="wavetext">Our Mission</p>
      <p className="wavetext"> To advance the Kingdom, multiply the body of Christ, and make disciples for Christ.</p>
      <p className="wavetext">Our Vision</p>
      <p className="wavetext">  To be a body of believers that become the church, that know their identity, walk in their purpose, possess a passion to be disciples, make disciples and Transform generations one life at a time.</p>
      <p className="wavetext">John 1:12</p>
      <p className="wavetext"> “But as many as received Him, to them gave He power to become the sons of God, even to them that believe on His name:”</p>
      
      <div>{layer3a}</div>
      <div>{layer3b}</div>


      <div>{layer5}</div>
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
