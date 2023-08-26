import data from "../../../utiles/data"

const { NextResponse } = require("next/server")

export function GET(req, res) {

	return NextResponse.json(data)
}
export async function POST(req, res) {
	let payload = await req.json()
	console.log(payload)

	return NextResponse.json({ result: payload })


}


