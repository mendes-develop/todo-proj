export async function deleteTodo(id) {
	const response = await fetch(`http://localhost:3000/todos/${id}`, {
		method: 'DELETE',
	});

	const responseToJson = await response.json();

	return responseToJson;
}
