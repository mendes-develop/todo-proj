export async function postTodo({ title, completed }) {
	
	const response = await fetch('http://localhost:3000/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: title,
			completed: completed,
		}),
	});

	const responseToJson = await response.json();

	return responseToJson;
}


