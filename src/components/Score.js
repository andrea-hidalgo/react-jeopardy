import React, { useState } from 'react';

export default function Score(props) {
	const [score, updateScore] = useState(0);
	const handleScore = str => {
		str === 'decrease' ? updateScore(score - 1) : updateScore(score + 1);
	};
	return (
		<div>
			<h2>Score: 0</h2>
			<button
				onClick={() => {
					handleScore('decrease');
				}}
			>
				Decrease
			</button>
			<button
				onClick={() => {
					handleScore('increase');
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					updateScore(0);
				}}
			>
				Reset
			</button>
		</div>
	);
}
