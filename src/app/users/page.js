import Link from "next/link"

const userlist = async () => {
	let userdata = await fetch("http://localhost:3000/api/data")
	userdata = await userdata.json()
	return userdata
}

const page = async () => {
	const users = await userlist()
	console.log(users);
	return (
		<div className="h-screen">
			<div>
				users list
			</div>

			{
				users?.map((data) => {

					return (<div key={data.id} className="bg-blue-500 px-2 py-3 text-black flex-col">
						<Link href={`/users/${data.id}`}>
							{data.name}
						</Link>


					</div>)
				}
				)
			}
		</div>
	)
}

export default page
