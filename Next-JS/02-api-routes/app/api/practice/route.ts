import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        message : "GET request Successful!"
    })
} 


export async function POST(request : NextRequest){
    let {userName,age} = await request.json()
    return NextResponse.json({
        userName , age
    })
}