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
					<p className="wavetext">Every Tuesday @ 6 AM</p>
				</div>
				<div className="eventitem">
					<h1 className="wavetext	dancing-script-font">Girl Talk Event</h1>
					<img className="eventsimgs" src="./girl.png" />
					<p className="wavetext">Saturday April 27th 2024 @ 10 AM</p>
				</div>
				<div className="eventitem">
					<h1 className="wavetext	dancing-script-font">Bible Study</h1>
					<img className="eventsimgs" src="./tfc.jpg" />
					<p className="wavetext">Every Tuesday @ 7pm</p>
				</div>
				<div className="eventitem">
					<h1 className="wavetext	dancing-script-font">New Beginning</h1>
					<img className="eventsimgs" src="./freshstart.png" />
					<p className="wavetext">Every 2nd and 4th Sunday @ 9:30 AM</p>
				</div>
				<div className="eventitem">
					<h1 className="wavetext	dancing-script-font">Girl Talk</h1>
					<img className="eventsimgs" src="./event2.jpg" />
					<p className="wavetext">Every 3rd Thursday @ 7 PM</p>
				</div>
			</div>
		</div>
	)
}

export default Events