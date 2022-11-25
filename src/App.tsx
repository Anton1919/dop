import React, {useEffect, useState} from 'react';
import './App.css';
import {stat} from "fs";

type PropsTypes = {
	body: string
	id: number
	title: string
	userId: number
}

function App() {

	const [state, setState] = useState<PropsTypes[]>([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setState(json))
	}, [])

	const deleteHandler = () => {
		setState([])
	}

	const showPostsHandler = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setState(json))
	}


	return (
		<div className="App">
			<button onClick={deleteHandler}>DELETE</button>
			<button onClick={showPostsHandler}>GET</button>
			<ul>
				{state.map((el) => {
					return (
						<li key={el.id}>
							<span>{el.title}</span>
							<span>{el.userId}</span>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
