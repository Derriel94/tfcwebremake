import React from 'react'
import { Church, ImportContacts, AssignmentSharp } from '@mui/icons-material'


const ThreeSectionInfoContainer = () => {
	return (
		<div className="three-section-info-container wavetext">
          
          <div className="bibleverse-section wavetext">
              <ImportContacts sx={{ fontSize: "5rem" }} />
              <h1 className="dancing-script-font"> (Romans 12: 2)</h1>
              <p>"And be not conformed to this world: but be ye
              transformed by the renewing of your mind, that ye may prove what is that good, and
              acceptable, and perfect, will of GOD."</p>
          </div>  

          <div className="ourmission-section wavetext">
            <AssignmentSharp sx={{ fontSize: "5rem" }} />
            <h1 className="dancing-script-font">What We Believe</h1>
            <p>  We believe there is one eternally existing GOD who has three distinct persons: GOD the Father, GOD the Son, and GOD the Holy Spirit. He is the creator of all that exists, both visible and invisible, and is therefore worthy of all glory and praise. GOD is perfect in love, power, holiness, goodness, knowledge, wisdom, justice, and mercy. He is unchangeable and therefore is the same yesterday, today, and forever.</p>
            
          </div>

      
          <div className="join-us-section wavetext">
            <Church sx={{ fontSize: "5rem" }} />
            <h1 className="dancing-script-font">Join In Person</h1>
            <p>Sundays 10:30 am Morning Worship</p>

            <p>Tuesdays 7:00 pm Bible Study</p>

            <p>Current Location: 1535 W. Stan Schlueter Loop Bldg. B Killeen TX 76549</p>
          </div>
          <a style={{marginLeft: "auto", marginRight:"auto"}}rel="noreferrer" target="_blank" href="https://give.tithe.ly/?formId=6a799053-6865-11ee-90fc-1260ab546d11"><button className="calltoaction dancing-script-font">Give Now</button></a>

      </div>
	)
}

export default ThreeSectionInfoContainer