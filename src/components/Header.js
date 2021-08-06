import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={classes.header}>
			<Link to='/' className={classes.p}>
				Fiber
			</Link>
			<ul>
				<li>
					<Link to='/' href='#'>
						Community
					</Link>
				</li>
				<li>
					<Link to='/' href='#'>
						Pricing
					</Link>
				</li>
				<li>
					<Link to='/' href='#'>
						Features
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to='/sign-up'>Sign In</Link>
				</li>
				<li>
					<Link to='/sign-up' className={classes.signup}>
						Sign Up
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
