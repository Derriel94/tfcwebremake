import React from 'react'

const Events = () => {
	return (
		<div style={{marginTop: "20px"}} className="events">
		    <img style={{marginTop: "20px"}}className="banner eventsbanner" src='./banner.png' />
			<h1 className="wavetext	dancing-script-font"> UPCOMING EVENTS</h1>
			<div className="eventitems">
				<div className="eventitem">
					<h1 className="wavetext	dancing-script-font">Prayer Time</h1>
					<img className="eventsimgs" src="./event1.png" />
					<p className="wavetext">Every Tuesday at 10 AM</p>
				</div>
				<div className="eventitem">
					<h1 className="wavetext	dancing-script-font">Girl Talk</h1>
					<img className="eventsimgs" src="./event2.jpg" />
					<p className="wavetext">Saturday April 27th 2024 10 AM</p>
				</div>
			</div>
		</div>
	)
}

export default Events