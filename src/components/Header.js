import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<p>Fiber</p>
			<ul>
				<li>
					<a href='#'>Community</a>
				</li>
				<li>
					<a href='#'>Pricing</a>
				</li>
				<li>
					<a href='#'>Features</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href='#'>Sign In</a>
				</li>
				<li>
					<a className={classes.signup} href='#'>
						Sign Up
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
