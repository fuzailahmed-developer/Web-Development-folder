import authOptions from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import {NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB()

    const session = await getServerSession(authOptions)

    if (!session || !session.user.email || !session.user.id) {
      return NextResponse.json({
        message: "user Not Found",
        success: false
      }, {
        status: 400
      })
    }

    const user = await User.findById(session.user.id).select('-password')

    if (!user) {
      return NextResponse.json({
        message: "user Not Found",
        success: false
      }, {
        status: 400
      })
    }

    return NextResponse.json({
      message: 'User Get Successfully',
      data: user,
      success: true
    }, { status: 200 })

  }

  catch (error) {
    console.log(error);

    return NextResponse.json({
      message: 'Get User Error: ' + error,
      success: false
    }, { status: 500 })
  }
}