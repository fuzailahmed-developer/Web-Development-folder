import authOptions from "@/lib/auth";
import uploadOnCloudinary from "@/lib/cloudinary";
import connectDB from "@/lib/connectDB";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {

    await connectDB()

    const session = await getServerSession(authOptions)

    if (!session || !session.user.email || !session.user.id) {
      return NextResponse.json({
        success: false,
        message: 'unAuthenticated'
      }, {
        status: 400
      })
    }

    const formData = await request.formData()

    const name = formData.get('name') as string
    const file = formData.get('image') as Blob | null

    let imageUrl = session.user.image ?? null

    if (file) {
      imageUrl = await uploadOnCloudinary(file)
    }

    const user = await User.findByIdAndUpdate(session.user.id, {
      name,
      image: imageUrl
    }, {
      new: true
    })

    if (!user) {
      return NextResponse.json({
        success: false,
        message: 'user not found'
      }, {
        status: 400
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Update Profile Successfully'
    }, {
      status: 200
    })


  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Edit err: ' + error
    }, {
      status: 400
    })
  }
}