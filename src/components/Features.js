import React from 'react';

import time from '../assets/time.svg';
import code from '../assets/code.svg';
import allSizes from '../assets/allSizes.svg';
import pageImage from '../assets/Page Image.png';
import { Link } from 'react-router-dom';

import classes from './Features.module.css';

const Features = () => {
	return (
		<section className={classes.features}>
			<strong>Why Fiber?</strong>
			<h2>A good portfolio means good employability.</h2>
			<ul>
				<li>
					<img src={time} alt='' />
					<h3>Build in minutes</h3>
					<p>
						With a selection of premade templates, you can build out
						a portfolio in less than 10 minutes.
					</p>
				</li>
				<li>
					<img src={code} alt='' />
					<h3>Add custom CSS</h3>
					<p>
						Customize your personal portfolio even more with the
						ability to add your own custom CSS styles.
					</p>
				</li>
				<li>
					<img src={allSizes} alt='' />
					<h3>Responsive</h3>
					<p>
						All Fiber templates are fully responsive to ensure the
						experience is seemless across all devices.
					</p>
				</li>
			</ul>
			<div className={classes.article}>
				<div>
					<h2>Diversify your portfolio.</h2>
					<p>
						Create an even more impressive portfolio by creating
						case studies for your projects. Simply follow our
						step-by-step guide.
					</p>
					<Link to='/sign-up'>Start Free Trial</Link>
				</div>
				<img src={pageImage} alt='' />
			</div>
		</section>
	);
};

export default Features;
