

const userlist = async (id) => {
	let userdata = await fetch(`http://localhost:3000/api/data/${id}`)
	userdata = await userdata.json()
	return userdata
}
const page = async ({ params }) => {

	const userdata = await userlist(params.userId)
	console.log(userdata);
	return (
		<div>
			user id

			<div key={userdata.id}>{userdata.name}</div>
		</div>
	)
}

export default page
