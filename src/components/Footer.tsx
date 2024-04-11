import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-leftside">
			<h2 className="dancing-script-font">Contact</h2>
				<h4>tfclive22@gmail.com</h4>
				<h4>1535 W. Stan Schlueter Loop Bldg. B Killeen TX 76549</h4>
			</div>
			<div className="vertical-line"></div>
			<div className="footer-rightside">
						<h2 className="dancing-script-font">Navigate</h2>
			              <h4><Link to="/">Home</Link></h4>
			              <h4><Link to="/welcome">Welcome</Link></h4>
			              <h4><Link to="/about">About</Link></h4>
			              <h4><a rel="noreferrer" target="_blank" href="https://www.facebook.com/watch/pastormichellemason/">Lives</a></h4>
			              <h4><Link to="/give">Give</Link></h4>
			              <h4><a rel="noreferrer" target="_blank" href="https://mailchi.mp/8778d9673a3e/transforming-foundation-church">Connect</a></h4>
			</div>
		</div>
	)
}

export default Footer