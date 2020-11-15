import mongoose, {Schema} from "mongoose";


interface Icategory {
    Categorytitle: string,
    isApproved: string,
    isActivated: boolean
}

const categorySchema = new mongoose.Schema({
    categorytitle: {
        type: String,
        required: true
    },
    isActivated:{
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        required: true
    },}, 
    {
        timestamps: true
    }
 );