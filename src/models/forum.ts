import mongoose, {Schema} from "mongoose";

interface Iforum {
    title: string,
    forum: string,
    category: string,
    views : number
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
    views :{
        type: String,
        required: true
    },
    category: {
        type: [{type: Schema.Types.ObjectId, ref:"category"}]
    }

}, 
    {
        timestamps: true
    }
 );