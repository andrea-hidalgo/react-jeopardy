import React, { useState } from 'react';

export default function Jeopardy(props) {
	const [toggle, updateToggle] = useState('hide');
	const handleToggle = () => {
		toggle === 'hide' ? updateToggle('') : updateToggle('hide');
	};

	const value = props.jeopardy[0].value;

	const [score, updateScore] = useState(0);
	const handleScore = str => {
		str === 'decrease'
			? updateScore(score - value)
			: updateScore(score + value);
	};

	return (
		<div>
			<div className="score">
				<h2>Score: {score}</h2>
				<button
					className="decrease-btn"
					onClick={() => {
						handleScore('decrease');
					}}
				>
					Decrease
				</button>
				<button
					className="increase-btn"
					onClick={() => {
						handleScore('increase');
					}}
				>
					Increase
				</button>
				<button
					className="reset-btn"
					onClick={() => {
						updateScore(0);
					}}
				>
					Reset
				</button>
			</div>
			<h2>Category: {props.jeopardy[0].category.title}</h2>
			<h2>Value:{props.jeopardy[0].value}</h2>
			<h2>{props.jeopardy[0].question}</h2>
			<h2 className={toggle}>Answer: {props.jeopardy[0].answer}</h2>
			<button onClick={handleToggle}>Show Answer</button>
		</div>
	);
}
