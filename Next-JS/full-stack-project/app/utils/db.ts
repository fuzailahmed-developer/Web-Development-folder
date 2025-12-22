import mongoose from "mongoose";

export async function connectDB() {
    const url = process.env.MONGO_URL;

    if (!url) {
        throw new Error("MONGO_URL is missing in .env");
    }

    // if already exist 
    if (mongoose.connections[0].readyState) {
        console.log("Cached DB Connected...!")
        return;
    }

    // if not exist
    await mongoose.connect(url);
    console.log("DB Connected");
}
