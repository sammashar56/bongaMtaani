import User from "../models/user";
import { encodeSession } from '../helpers/jwt';
import config from "../config/config";
import { User1, Session } from '../helpers/index';


export async function fetchProfile(session: Session) {
    const profile = await User.findById({ _id: session._id }).populate("users")
    
    if (profile) {
        return {
            profile
        }

    } else {
        throw {
            status: 404,
            message: "account not found"
        }
    }
}

export async function authenticate(payload: {
    uid: string,
    email:string,
    name: string,
    role: string,
}) {
    const { uid, email, role, name } = payload
    
    const account = await User.findOne({ uid: uid })
    
    if (account) {
        const user: User1 = {
            _id: account._id,
            name: account.name,
            phoneNumber: account.PhoneNumber,
            email: account.email,
            uid: account.uid
        }

        const session = encodeSession(config.secret_key, user, account.role === "user" ? false : true)
        
        return {
            token: session.token,
            account:account
        }
    } else {
        const _account = User.build({ uid, email, role, name, PhoneNumber })
        
        await _account.save()

        return {
            account : _account
        }
    }
}

