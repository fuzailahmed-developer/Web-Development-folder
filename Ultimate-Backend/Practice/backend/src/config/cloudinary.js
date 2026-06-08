import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs/promises'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (filePath, folder = 'users') => {
  try {

    if (!filePath) throw new Error("File path is required");

    const result = await cloudinary.uploader.upload(
      filePath, {
      folder,
      resource_type: 'image'
    }
    )

    return result.secure_url

  }

  catch (error) {
    console.log('Cloudinary upload error:', error.message);
    throw new Error('Failed to upload image')
  }

  finally {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error("File Cleanup Error:", error.message);
    }
  }
}

export default uploadOnCloudinary