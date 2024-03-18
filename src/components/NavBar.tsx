import {useState} from 'react'
import {Link} from 'react-router-dom';

import React from 'react'

const NavBar = () => {
	const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);

		const toggleMenu = () => {
			if (displayMobileNav == false) {
				setDisplayMobileNav(true)
			} else {
				setDisplayMobileNav(false)
			}
		}

	return (
		<div className="nav dancing-script-font">
			<div className="header">
				<div className="left-header logo">
					<Link to="/"><img src="./logo2.png" /></Link>
					<div className="wavetext dancing-script-font">Transforming Foundation Church</div>
				</div>
				<div className="mobilenavbutton">
					    <img className="icon" onClick={()=>toggleMenu()} src="./menuicon.png" />
				</div>
					{displayMobileNav
					?
			         <div className="mobileMenu">
			              <Link to="/">Home</Link>
			              <Link to="/welcome">Welcome</Link>
			              <Link to="/about">About</Link>
			              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/watch/pastormichellemason/">Lives</a>
			              <Link to="/give">Give</Link>
			              <a href="https://mailchi.mp/8778d9673a3e/transforming-foundation-church" target="_blank">Connect</a>
			          </div>
					:
					<div className="menucontainer">
			         <div className="Menu">
			              <Link to="/">Home</Link>
			              <Link to="/welcome">Welcome</Link>
			              <Link to="/about">About</Link>
			              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/watch/pastormichellemason/">Lives</a>
			              <Link to="/give">Give</Link>
			              <a href="https://mailchi.mp/8778d9673a3e/transforming-foundation-church" target="_blank">Connect</a>
			          </div>
					</div>
					}
		
			</div>
		
		</div>
	);
			
}

export default NavBar