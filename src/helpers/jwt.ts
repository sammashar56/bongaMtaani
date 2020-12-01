import {encode, TAlgorithm, decode} from "jwt-simple";
import {EncodeResult, Session, PartialSession, DecodeResult, ExpirationStatus,} from "./index";

export function encodeSession (secretKey: string, partialSession: PartialSession, long: boolean): EncodeResult {
    const algorithm: TAlgorithm = "HS256"
    const issued = Date.now()
    const expires : number = long ? issued + 604800000 : issued + 864000000

    const session: Session = {
        ...partialSession,
        issued: issued,
        expires: expires
    }
 
    return {
        token : encode (session,secretKey,algorithm),
        issued: issued,
        expires: expires
    }
}

export function decodeSession(secretKey:string, tokenString:string,): DecodeResult {
    const algorithm : TAlgorithm = 'HS256'

    let result : Session;

    try {
        result = decode(tokenString, secretKey, false, algorithm);

    }catch (_e) {
        const e: Error = _e;
        
        if(e.message === "no token supplied" || e.message === "not enough or too many segments"){
            return {
                type: "invalid-token"
            };
        }
        throw e;
    }
    return {
        type: "valid",
        session: result
    }
}

export function checkExpirationStatus(token: Session): ExpirationStatus {
    const now = Date.now();
    if (token.expires > now) return "active";

    return "expired";
}