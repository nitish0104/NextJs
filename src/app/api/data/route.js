const { NextResponse } = require("next/server")

export function GET(req) {
	return NextResponse.json({ name: "Nitish", Age: "21" })
}

// export default function GET(req, res) {
// 	res.status(200).json({ name: 'John Doe' })
// }
