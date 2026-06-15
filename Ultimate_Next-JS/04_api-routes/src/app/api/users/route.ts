import { NextRequest, NextResponse } from "next/server"
import users from '../../../utils/users.json'

export const GET = async () => {
  return NextResponse.json({
    users: users
  })
}

export const POST = async (request: NextRequest) => {

  const { name, age } = await request.json()

  return NextResponse.json({
    message: 'User created successfully...!',
    data: {
      name,
      age
    }
  })
}