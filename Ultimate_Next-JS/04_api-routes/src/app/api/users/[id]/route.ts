import { NextRequest, NextResponse } from "next/server";
import users from '../../../../utils/users.json'

type Props = {
  params: Promise<{
    id: string
  }>
}

export const GET = async (req: NextRequest, { params }: Props) => {
  const { id } = await params

  const findUser = users.find((user) => user.id == id)

  if (!findUser) {
    return NextResponse.json({
      success: false,
      message: 'Invalid user id.'
    })
  }

  return NextResponse.json({
    success: true,
    user: findUser
  })

}