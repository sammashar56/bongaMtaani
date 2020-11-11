import mongoose, {Schema} from "mongoose";
import { Timestamp } from "mongodb";


interface Iforum {
    title: string,
    forum: string,
    category: string
} 

const forumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    forum: {
        type: String,
        required: true
    },
    Timestamp
})