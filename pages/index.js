// consumir a nossa api que esta na porta 3000
import { useState, useEffect } from 'react';
// GET
// POST
// PUT/PATCH
// DELETE

//

export default function ToDoList() {
	const [todos, setTodos] = useState([]);

	async function lerDaApi() {
		const response = await fetch('http://localhost:3000/todos');
		const todoListArray = await response.json();

		setTodos(todoListArray);
	}

	useEffect(() => {
		lerDaApi();
	}, []);

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>TODO LIST</h1>

			<div style={{ justifyContent: 'center', textAlign: 'center', flex: 1 }}>
				{todos.map(function (todoInfo, index) {
					return (
						<div key={index} style={{ border: '1px solid white', width: 400 }}>
							<p>{todoInfo.name}</p>

							<input
								type='checkbox'
								checked={todoInfo.completed}
								onChange={async () => {
									const id = todoInfo.id;
									const isCompleted = !todoInfo.completed;

									await fetch(`http://localhost:3000/todos/${id}`, {
										method: 'PATCH',
										headers: { 'Content-Type': 'application/json' },
										body: JSON.stringify({ completed: isCompleted }),
									});

									lerDaApi();
								}}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
