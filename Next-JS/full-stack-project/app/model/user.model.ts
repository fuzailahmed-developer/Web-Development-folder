import mongoose from "mongoose"

interface UserI {
    _id?: mongoose.Types.ObjectId,
    name: string,
    image: string,
    email: String,
    password: string,
    createdAt?: Date,
    updatedAt?: Date

}

const userSchema = new mongoose.Schema<UserI>({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    image : {
        type : String,
        required : false
    }
}, {
    timestamps: true
})

const User = mongoose?.models?.User || mongoose.model("User", userSchema)
export default User