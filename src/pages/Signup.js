import React, { useState } from 'react';
import classes from '../components/Signup.module.css';
import signupImg from '../assets/Sign Up Image.png';
import { Link } from 'react-router-dom';
import useInput from '../hooks/use-input';

function validateName(input) {
	return input.trim() !== '';
}

function validateEmail(input) {
	const reEmail =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return reEmail.test(String(input).toLowerCase());
}

function validatePassword(input) {
	const rePassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	return rePassword.test(String(input));
}

const Signup = () => {
	const {
		input: name,
		inputIsValid: nameIsValid,
		inputIsInvalid: nameIsInvalid,
		setInputIsTouched: setNameIsTouched,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		inputReset: nameReset,
	} = useInput(validateName);

	const {
		input: email,
		inputIsValid: emailIsValid,
		inputIsInvalid: emailIsInvalid,
		setInputIsTouched: setEmailIsTouched,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		inputReset: emailReset,
	} = useInput(validateEmail);

	const {
		input: password,
		inputIsValid: passwordIsValid,
		inputIsInvalid: passwordIsInvalid,
		setInputIsTouched: setPasswordIsTouched,
		inputChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		inputReset: passwordReset,
	} = useInput(validatePassword);

	const [tos, setTos] = useState(false);
	const [formIsSubmitting, setFormIsSubmitting] = useState(false);

	const tosChangeHandler = (event) => {
		setTos(true);
	};

	let formIsValid = false;
	if (nameIsValid && emailIsValid && passwordIsValid && tos) {
		formIsValid = true;
	}

	const submitHandler = (event) => {
		event.preventDefault();

		setFormIsSubmitting(true);

		setNameIsTouched(true);
		setEmailIsTouched(true);
		setPasswordIsTouched(true);

		if (!formIsValid) return;

		console.log(name, email, password);

		nameReset();
		emailReset();
		passwordReset();
		setTos(false);
		setFormIsSubmitting(false);
	};

	return (
		<section className={classes.section}>
			<section className={classes.form}>
				<p>Fiber</p>
				<h2>Create your Fiber account</h2>
				<form onSubmit={submitHandler}>
					<div className={classes['form-control']}>
						<label htmlFor='name'>Your Name</label>
						<input
							value={name}
							onChange={nameChangeHandler}
							onBlur={nameBlurHandler}
							type='text'
							className={nameIsInvalid ? classes.invalid : ''}
						/>
						{nameIsInvalid && (
							<p
								className={
									nameIsInvalid ? classes['invalid-text'] : ''
								}>
								Name cannot be empty.
							</p>
						)}
					</div>
					<div className={classes['form-control']}>
						<label htmlFor='email'>E-mail</label>
						<input
							value={email}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							type='email'
							className={emailIsInvalid ? classes.invalid : ''}
						/>
						{emailIsInvalid && (
							<p
								className={
									emailIsInvalid
										? classes['invalid-text']
										: ''
								}>
								E-mail has to be valid.
							</p>
						)}
					</div>
					<div className={classes['form-control']}>
						<label htmlFor='password'>Password</label>
						<input
							value={password}
							onChange={passwordChangeHandler}
							onBlur={passwordBlurHandler}
							type='password'
							className={passwordIsInvalid ? classes.invalid : ''}
						/>
						{passwordIsInvalid && (
							<p
								className={
									passwordIsInvalid
										? classes['invalid-text']
										: ''
								}>
								Password should contain more than 8 characters
								including one uppercase, one lowercase, one
								number and one special character.
							</p>
						)}
					</div>
					<div className={classes['form-control']}>
						<div>
							<input
								type='checkbox'
								name='tos'
								id='tos'
								onChange={tosChangeHandler}
								value={tos}
							/>
							<label htmlFor='tos'>
								By creating an account on Fiber, you agree to
								the{' '}
								<Link to='/sign-up'>Terms & Conditions</Link>.
							</label>
						</div>
						{formIsSubmitting && !tos && (
							<p className={!tos ? classes['invalid-text'] : ''}>
								Terms & Conditions has to be accepted.
							</p>
						)}
					</div>
					<button type='submit'>Create Fiber Account</button>
				</form>
				<p className={classes['sign-in']}>
					Already have an account?
					<Link to='/sign-up'>Sign in</Link>
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
