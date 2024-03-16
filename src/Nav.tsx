import {useState} from 'react'
import './App.css'

import React from 'react'

const Nav = () => {
	const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);

		const toggleMenu = () => {
			if (displayMobileNav == false) {
				setDisplayMobileNav(true)
			} else {
				setDisplayMobileNav(false)
			}
		}

	return (
		<div className="nav">
			<div className="header">
				<div className="left-header logo">
					<img src="./logo2.png" />
					<div className="wavetext">Transforming Foundation Church</div>
				</div>
				<div className="mobilenavbutton">
					    <img className="icon" onClick={()=>toggleMenu()} src="./menuicon.png" />
				</div>
					{displayMobileNav
					?
			         <div className="mobileMenu">
			              <p>Home</p>
			              <p><a href="#welcometag">Welcome</a></p>
			              <p><a href="#abouttag">About</a></p>
			              <p>Lives</p>
			              <p>Give</p>
			              <p>Connect</p>
			          </div>
					:
					<div className="menucontainer">
			         <div className="Menu">
			              <p>Home</p>
			              <p><a href="#welcometag">Welcome</a></p>
			              <p><a href="#abouttag">About</a></p>
			              <p>Lives</p>
			              <p>Give</p>
			              <p>Connect</p>
			          </div>
					</div>
			}
		
			</div>
		
		</div>
	);
			
}

export default Nav