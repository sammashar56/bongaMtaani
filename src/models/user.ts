import mongoose, {Schema} from "mongoose";

interface IUser {
    name: string,
    email: string,
    PhoneNumber: number,
    Role: string,
    isVerified: boolean
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true,
        default: "user"
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    Forum: {
        type:[{type: Schema.Types.ObjectId, ref:""}]
    },
}, 
    {
        timestamps: true
    }
 );