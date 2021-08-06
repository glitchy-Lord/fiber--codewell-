import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div>
				<h4>Fiber</h4>
				<p>
					With Fiber, you can setup your own personal portfolio in
					minutes with dozens of premade, beautiful templates.
				</p>
				<p>Made with &#10084; in the Netherlands.</p>
			</div>
			<div>
				<h4>Sitemap</h4>
				<ul>
					<li>Homepage</li>
					<li>Pricing</li>
					<li>Testimonials</li>
					<li>Features</li>
				</ul>
			</div>
			<div>
				<h4>Resources</h4>
				<ul>
					<li>Support</li>
					<li>Contact</li>
					<li>FAQ</li>
				</ul>
			</div>
			<div>
				<h4>Company</h4>
				<ul>
					<li>About</li>
					<li>Customers</li>
					<li>Blog</li>
				</ul>
			</div>
			<div>
				<h4>Portfolios</h4>
				<ul>
					<li>Sarah Andrews</li>
					<li>Mathew Higgins</li>
					<li>Janice Dave</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
