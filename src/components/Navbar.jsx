import React, { useEffect, useState } from "react"
// import logo from "../img/logo.svg";
import { Link } from "gatsby"
import githubIcon from "../images/github-icon.svg"

const Navbar = () => {
	const [active, setActive] = useState(false)
	const [navBarActiveClass, setNavBarActiveClass] = useState("")

	useEffect(() => {
		active ? 
		setNavBarActiveClass("is-active") 
		: setNavBarActiveClass("")
	},
	[active])

	const toggleHamburger = () => {
		setActive(!active)
	}

	return (
		<nav
			className="navbar is-transparent"
			role="navigation"
			aria-label="main-navigation"
		>
			<div className="container">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item" alt="Logos" title="Logo">
						<img 
							src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg" 
							alt="Logos"/>
					</Link>
					<div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => toggleHamburger()}
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
          </div>
				</div>
				<div
					id="navMenu"
					className={`navbar-menu ${navBarActiveClass}`}>
					<div className="navbar-start has-text-centered">
						<Link className="navbar-item" to="/page-2">
							Page 2
						</Link>
					</div>
					<div className="navbar-end has-text-centered">
						<a
							className="navbar-item"
							href="https://github.com/helfo2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon">
								<img src={githubIcon} alt="Github"/>
							</span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar