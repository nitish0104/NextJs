import data from "../../../utiles/data"

const { NextResponse } = require("next/server")

export function GET(req, res) {

	return NextResponse.json(data)
}


