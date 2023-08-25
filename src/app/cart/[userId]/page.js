
import apiProduct from "../../../../service/getCart"


const page = async (props) => {

	const getuserList = apiProduct()
	const users = await getuserList
	const currentid = props.params.userId
	const userdata = users[currentid - 1]
	console.log();
	return (
		<div>
			user details by id
			<div>{userdata.id}</div>
			<div>{userdata.name}</div>
			<div>{userdata.website}</div>
		</div>
	)
}

export default page


export async function generateStaticParams() {
	const getuserList = apiProduct()
	const users = await getuserList
	return users.map(user => ({
		userId: user.id.toString()
	}))
}