import mongoose, {Schema} from "mongoose";
import { Timestamp } from "mongodb";

interface Icategory {
    name: string,
    email: string,
}

const categorySchema = new mongoose.Schema({
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