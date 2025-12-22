import { NextResponse } from "next/server";

export async function GET(request, { params }) {

  const {id} = await params
  console.log(id);

  return NextResponse.json({
    message: "Product fetched successfully",
    id
  });
}
