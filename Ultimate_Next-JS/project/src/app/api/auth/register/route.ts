import connectDB from "@/lib/connectDB";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: 'All fields are required',
          success: false
        },
        { status: 400 }
      )
    }

    await connectDB()

    const isUserExist = await User.findOne({ email })

    if (isUserExist) {
      return NextResponse.json(
        {
          success: false,
          message: "User with this email already exist",
        },
        { status: 409 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: 'Password must be at least 6 characters long'
        },
        { status: 400 }
      )
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hash
    })

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        user
      },
      { status: 201 }
    )

  }

  catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Register - Internal Server Error"
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'hello world'
  })
}