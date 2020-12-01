
import {encodeSession} from "../helpers/jwt";
import config from "../config/config";
import {User1, Session} from "../helpers/index";
import User from "../models/user";

export async function fetchProfile(session:Session){
    const profile = await User.findById({_id: session._id}).populate("user")
    if(profile) {
        return profile
    }
    else{
        throw{
            status:404,
            message: "user not found"
        }
    } 
}

export async function authenticate(payload: {
    uid: string,
    email:string,
    name: string,
})
{
    const {uid, email,name} = payload

    const user = await User.findOne ({ uid : uid})
    if (user){
        const user: User1 = {
            _id: user._id,
            name: user.name,
            email:user.email,
            uid:user.uid
        }

        const session = encodeSession(config.secret_key,user.role ==="adult" ? false : true )

        return {
            token: session.token,
            user: user 
        }
    }
    else {
        const _user = User.build({uid, email, role, name})
        await _user.save()

        return {
            user: _user
        }
    }
}