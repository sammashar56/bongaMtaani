import mongoose, {Schema} from "mongoose";
import { Timestamp } from "mongodb";

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
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    Timestamp
})