import mongoose, {Schema} from "mongoose";

interface Iforum {
    title: string,
    forum: string,
    category: string,
    views : number,
    reports : number,
    like: number,
    isAbusive : false
} 

interface ForumDoc extends mongoose.Document {
    title : string;
    forum : string;
    views : number;
    reports : number;
    isAbusive : false;
}

interface forumModelInterface extends mongoose.Model<ForumDoc> {
    build(attr :Iforum) : ForumDoc
}

const forumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    forum: {
        type: String,
        required: true
    },
    views :{
        type: Number,
        default: 0
    },
    
    isAbusive : {
        type: Boolean,
        default: false
    },
    reports : {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref:"category"
    },
    user: {
        type: [{type: Schema.Types.ObjectId, ref: "User"}]
    }

}, 
    {
        timestamps: true
    }
 );


forumSchema.statics.build = (attr: Iforum) => {
    return new Forum(attr)
}

const Forum = mongoose.model<ForumDoc, forumModelInterface> ('Forum', forumSchema)

export default Forum
