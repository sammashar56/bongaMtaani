import mongoose, {Schema} from "mongoose";


interface Icategory {
    Categorytitle: string,
    isApproved: boolean,
    isActivated: boolean,
    isActive: boolean
}


interface categoryModelInterface extends mongoose.Model<categoryDoc> {
    build(attr: Icategory): categoryDoc
}

interface categoryDoc extends mongoose.Document {
    categorytitle:string;
    isApproved:boolean ;
    isActivated: boolean;
    isActive: boolean
}


const categorySchema = new mongoose.Schema({
    categorytitle: {
        type: String,
        required: true
    },
    forum: {
        type: [{type: Schema.Types.ObjectId, ref: "Forum" }]
    },
    isActivated:{
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, 
    {
        timestamps: true
    }
 );

 categorySchema.statics.build = (attr: Icategory) => {
     return new Category(attr)
 }

 const Category = mongoose.model<categoryDoc, categoryModelInterface>('Category', categorySchema)

 export default Category 