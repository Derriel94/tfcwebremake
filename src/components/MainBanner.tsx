import React from 'react'

const MainBanner = () => {
	return (
	<div className="banner-container wavetext title">
        <img className="banner" src='./banner.png' />
        <div className="bannertxt" >
          <h1>Welcome To</h1>
          <h1 className="dancing-script-font" style={{color: "gold"}}>Transforming Foundation Church!</h1>
          <h2 >Join In Person or Online At 10:30 AM Sunday and Tuesdays 7:00 PM</h2>
          <a rel="noreferrer" target="_blank" href="https://fb.watch/qSATZRWpV6/"><button className="calltoaction dancing-script-font ">Watch Live</button></a>
        </div>
         <img className="banner" src='./banner.png' />
    </div>
	)
}

export default MainBanner