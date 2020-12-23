import mongoose, {Schema} from "mongoose";


interface Icategory {
    Categorytitle: string,
    isApproved: boolean,
    isActivated: boolean
}

interface categoryModelInterface extends mongoose.Model<categoryDoc> {
    build(attr: Icategory): categoryDoc
}

interface categoryDoc extends mongoose.Document {
    categorytitle:string;
    isApproved:boolean ;
    isActivated: boolean;
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
    },
}, 
    {
        timestamps: true
    }
 );

 categorySchema.statics.build = (attr: Icategory) => {
     return new Category(attr)
 }

 const Category = mongoose.model<categoryDoc, categoryModelInterface>('category', categorySchema)

 export default Category 