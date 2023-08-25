import Link from "next/link"
import apiProduct from "../../../service/getCart"
const page = async () => {
	const getuserList = apiProduct()
	const users = await getuserList
	console.log(users);
	return (
		<div>
			<h1>get card details</h1>
			<ul>
				{
					users.map((data) => (
						<div className=" flex flex-col gap-y-2 my-2" key={data.id}>

							<Link href={`/cart/${data.id}`} className="bg-blue-500 px-4 py-2" >{data.name}</Link>
						</div>
					)
					)
				}

			</ul>
		</div>
	)
}

export default page
