import React from 'react';
import classes from '../components/Signup.module.css';
import signupImg from '../assets/Sign Up Image.png';

const Signup = () => {
	return (
		<section className={classes.section}>
			<section className={classes.form}>
				<p>Fiber</p>
				<h2>Create your Fiber account</h2>
				<form action=''>
					<div className={classes['form-control']}>
						<label htmlFor='name'>Your Name</label>
						<input type='text' />
					</div>
					<div className={classes['form-control']}>
						<label htmlFor='email'>E-mail</label>
						<input type='email' />
					</div>
					<div className={classes['form-control']}>
						<label htmlFor='password'>Password</label>
						<input type='password' />
					</div>
					<div className={classes['form-control']}>
						<input type='checkbox' name='tos' id='tos' />
						<label htmlFor='tos'>
							By creating an account on Fiber, you agree to the{' '}
							<a href='#'>Terms & Conditions</a>.
						</label>
					</div>
					<button type='submit'>Create Fiber Account</button>
				</form>
				<p>
					Already have an account? <a href='/sign-up'>Sign in</a>
				</p>
			</section>
			<section className={classes.signupImg}>
				<img src={signupImg} alt='' />
				<h2>Unparalleled Templates</h2>
				<p>
					Crafted by a team of professional designers, our templates
					are unparalleled in the market.
				</p>
			</section>
		</section>
	);
};

export default Signup;
