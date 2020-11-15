import mongoose, {Schema} from "mongoose";

interface IUser {
    name: string,
    email: string,
    PhoneNumber: number,
    Role: string,
    isVerified: boolean
}

interface UserDoc extends mongoose.Document {
    name : string;
    email : string;
    PhoneNumber: number;
    role: string;
    isVerified: boolean;
}

interface UserModelInterface extends mongoose.Model<UserDoc> {
    build (attr: IUser) :UserDoc
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

 userSchema.statics.build = (attr : IUser) => {
     return new User (attr)
 }

 const User = mongoose.model<UserDoc, UserModelInterface>('user', userSchema)

 export default User