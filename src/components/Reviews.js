import React from 'react';

import mathew from '../assets/User Avatar 2.svg';
import janice from '../assets/User Avatar 32.svg';
import sarah from '../assets/User Avatar.svg';

import classes from './Reviews.module.css';

const Reviews = () => {
	return (
		<section className={classes.reviews}>
			<div className={classes.review}>
				<div>
					<img src={sarah} alt='' />
					<span>Sarah Andrews</span>
					<span>$100k in revenue</span>
				</div>
				<p>
					Setting up my portfolio with Fiber took no more than 10
					minutes. Since they, my portfolio has attracted a lot of
					clients and made me more than $100k.
				</p>
				<a href='#'>View Sarah's Portfolio</a>
			</div>
			<div className={classes.review}>
				<div>
					<img src={mathew} alt='' />
					<span>Mathew Higgins</span>
					<span>$20k in revenue</span>
				</div>
				<p>
					I have been getting A LOT of leads ever since I used Fiber's
					premade templates, now I just need to work on my case
					studies and I'll be ready to go!
				</p>
				<a href='#'>View Mathew's Portfolio</a>
			</div>
			<div className={classes.review}>
				<div>
					<img src={janice} alt='' />
					<span>Janice Dave</span>
					<span>$30k in revenue</span>
				</div>
				<p>
					I only just started freelancing this year. I have already
					made more than I ever made in my full-time job. The
					templates are just so amazing.
				</p>
				<a href='#'>View Mathew's Portfolio</a>
			</div>
		</section>
	);
};

export default Reviews;
