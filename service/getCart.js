
const apiProduct = (async () => {
	let data = await fetch("https://jsonplaceholder.typicode.com/users")

	return data.json()
})

export default apiProduct
