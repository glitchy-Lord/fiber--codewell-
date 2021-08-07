import React, { useState } from 'react';

const useInput = (validateFunc) => {
	const [input, setInput] = useState('');
	const [inputIsTouched, setInputIsTouched] = useState(false);
	const inputIsValid = validateFunc(input);
	const inputIsInvalid = inputIsTouched && !inputIsValid;

	const inputChangeHandler = (event) => {
		setInput(event.target.value);
	};

	const inputBlurHandler = () => {
		setInputIsTouched(true);
	};

	const inputReset = () => {
		setInput('');
		setInputIsTouched(false);
	};

	return {
		input,
		inputIsValid,
		inputIsInvalid,
		inputChangeHandler,
		inputBlurHandler,
		inputReset,
		setInputIsTouched,
	};
};

export default useInput;
