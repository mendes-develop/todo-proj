export async function getTodos() {
	const response = await fetch('http://localhost:3000/todos');
	const responseToJson = await response.json();

	return responseToJson;
}
