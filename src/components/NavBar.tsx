import {useState} from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

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

		const spring = {
 		 type: "spring",
 		 damping: 0,
 		 stiffness: 0,
		}


	return (
		<div className="nav dancing-script-font">
			<div className="header">
				<div className="left-header logo">
					<Link to="/"><motion.img 
					initial={{y: -10}}
      				animate={{y: 5}}
      				transition={{spring}}
					src="./logo2.png" />
					</Link>
					<motion.div
					initial={{opacity: 0}}
      				animate={{opacity: 1}}
      				exit={{opacity: 0}}
      				transition={{delay: .5, duration: 1}}
					className="wavetext dancing-script-font">Transforming Foundation Church</motion.div>
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