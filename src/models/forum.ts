import mongoose, {Schema} from "mongoose";

interface Iforum {
    title: string,
    forum: string,
    category: string,
    views : number
} 

interface ForumDoc extends mongoose.Document {
    title : string;
    forum : string;
    category: string;
    views : number;
}

interface forumModelInterface extends mongoose.Model<ForumDoc> {
    build(attr :Iforum) : ForumDoc
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


forumSchema.statics.build = (attr: Iforum) => {
    return new Forum(attr)
}

const Forum = mongoose.model<ForumDoc, forumModelInterface> ('forum', forumSchema)

export default Forum
