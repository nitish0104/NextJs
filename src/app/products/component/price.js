'use client'
const Price = ({ price }) => {

	return (
		<button className="bg-blue-500 px-4 py-2" onClick={() => alert(price)}>Price check</button>
	)
}

export default Price
