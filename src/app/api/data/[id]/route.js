import data from "../../../../utiles/data"

const { NextResponse } = require("next/server")

export function GET(req, res) {
	const userdata = data.filter((user) => user.id == res.params.id)
	return NextResponse.json(userdata.length == 0 ? "data not found" : userdata[0])
}