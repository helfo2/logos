import React from "react"
import linkedinIcon from "../images/linkedin-icon.svg"
import { Link } from "gatsby"

const Footer = () => {
	return (
		<footer className="footer has-background-black has-text-white">
			<div className="content has-text-centered">
				<img 
					src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg"
					alt="Logos"
					style={{ width: "14em", height: "10em" }}/>
			</div>
			<div className="content has-text-centered has-background-black has-text-white-ter">
				<div style={{ maxWidth: "100vw" }} className="columns">
					<div className="column is-4">
						<section className="menu">
							<ul className="menu-list">
								<li>
									<Link to="/" className="navbar-item">
										Home
									</Link>
								</li>
								<li>
									<Link to="/page-2" className="navbar-item">
										Page 2
									</Link>
								</li>
								<li>
									<Link to="/page-2" className="navbar-item">
										Page 3
									</Link>
								</li>
							</ul>
						</section>
					</div>
					<div className="column is-4">
						<section className="menu">
							<ul className="menu-list">
								<li>
									<Link to="/" className="navbar-item">
										Contact
									</Link>
								</li>
							</ul>
						</section>
					</div>
					<div className="column is-4 social">
						<a 
							title="linkedin" 
							href="https://www.linkedin.com/in/henrique-ferreira-606aab113/"
							target="_blank"
							rel="noopeneer noreferrer">
								<span className="icon">
									<img src={linkedinIcon} alt="Linkedin" />
								</span>
						</a>
					</div>
				</div>
				<div style={{ color: "var(--primary-color)"}}>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.com">Gatsby</a>
						{` `}
						by Henrique Ferreira
					</div>
			</div>
		</footer>
	)
}

export default Footer