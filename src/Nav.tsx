import {useState} from 'react'

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
		<div>
		<div className="mobilenavbutton">
			    <img className="icon" onClick={()=>toggleMenu()} src="./menuicon.png" />
		</div>
			{displayMobileNav
			?
			<div className="mobilenavcontainer">
	         <button className="mobileMenu">
	              <p>Home</p>
	              <p><a href="#welcometag">Welcome</a></p>
	              <p><a href="#abouttag">About</a></p>
	              <p>Lives</p>
	              <p>Give</p>
	              <p>Connect</p>
	          </button>
      		</div>
			:
			<div className="menucontainer">
	         <button className="Menu">
	              <p>Home</p>
	              <p><a href="#welcometag">Welcome</a></p>
	              <p><a href="#abouttag">About</a></p>
	              <p>Lives</p>
	              <p>Give</p>
	              <p>Connect</p>
	          </button>
      		</div>
			}
		

		</div>
	);
			
}

export default Nav