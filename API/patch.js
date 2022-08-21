
async function patchTodo({ title, completed, id }) {
	
	const response = await fetch(`http://localhost:3000/todos/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			completed: completed,
      name: title
		}),
	});

	const responseToJson = await response.json();

	return responseToJson;
}

export {
	patchTodo
}
