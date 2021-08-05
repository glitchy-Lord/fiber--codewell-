import React from 'react';
import heroImg from '../assets/hero-Illustration.png';
import checkmark from '../assets/Checkmark.svg';
import classes from './HeroSection.module.css';

const HeroSection = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.heroText}>
				<p className={classes.review}>
					<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> Rated 4.8/5
					(243 reviews)
				</p>
				<h1>Create your portfolio in minutes</h1>
				<p className={classes.desc}>
					With Fiber, you can setup your own personal portfolio in
					minutes with dozens of premade, beautiful templates
				</p>
				<div>
					<ul>
						<li>
							<a className={classes.trial} href='#'>
								Start Free Trial
							</a>
						</li>
						<li>
							<a className={classes.examples} href='#'>
								View Examples
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<span>
								<img src={checkmark} alt='' />
							</span>
							No Credit Card Required
						</li>
						<li>
							<span>
								<img src={checkmark} alt='' />
							</span>
							10 Free Templates
						</li>
					</ul>
				</div>
			</div>

			<div className={classes.heroImg}>
				<img src={heroImg} alt='' />
			</div>
		</section>
	);
};

export default HeroSection;
