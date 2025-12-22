import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    const query = request.nextUrl.searchParams.get('q')
    const name = request.nextUrl.searchParams.get('name')
    return NextResponse.json({
        query,name
    })
}