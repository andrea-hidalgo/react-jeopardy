import React, { useState, useEffect } from 'react';
import Jeopardy from './Jeopardy';

export default function App(props) {
	const [query, updateQuery] = useState({
		url: 'https://jservice.io/api/random'
	});
	const [jeopardy, setJeopardy] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(query.url);
				const data = await response.json(); //change it to javascript file
				await setJeopardy(data); //set jeopardy to js info
			} catch (error) {
				console.error(error);
			}
		})();
	}, [query]);

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({ url: 'https://jservice.io/api/random' });
	};

	return (
		<div>
			<h1>Welcome to Jeopardy!</h1>
			<form onSubmit={handleSubmit}>
				<input type="submit" value="Get Random Question" />
			</form>
			{Object.keys(jeopardy).length ? <Jeopardy jeopardy={jeopardy} /> : ''}
		</div>
	);
}
