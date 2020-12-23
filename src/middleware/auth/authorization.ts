import express, {Request, Response, NextFunction} from "express";
import {encodeSession, decodeSession, checkExpirationStatus} from "../../helpers/jwt";
import {DecodeResult, ExpirationStatus, Session} from "../../helpers/index";
import config from "../../config/config"
import { decode } from "jwt-simple";

export function requireJWTMiddleware(req: Request, res: Response, next: NextFunction) {
    const unathorized = (message: string ) => res.status(401).json({
        ok: false,
        status: 401, 
        message: message
    })

    const requestHeader = "x-JWT-Token";
    const ResponseHeader = "x-Renewed-JWT-Token";

    const header : any = req.header(requestHeader)

    if(!header){
        unathorized(`Required ${requestHeader} header not found`)
    }

    const decodedSession : DecodeResult = decodeSession(config.secret_key, header);

    if(decodedSession.type === "intergrity-error" || decodedSession.type === "invalid-token") {
        unathorized(`failed to decode or validate authorization token. Reason ${decodedSession.type}.`);
        return;
    }

    const Expiration : ExpirationStatus = checkExpirationStatus(decodedSession.session);

    if(Expiration === "expired"){
        unathorized(`Authorization token has expired. Please create a new authorization token`);
        return;
    }
    let Session: Session;

    if(Expiration === "active") {
        //automatically renew session and send it back with a response
        const {token, expires, issued} = encodeSession(config.secret_key, decodedSession.session, true);
        Session = {
            ...decodedSession.session,
            expires: expires,
            issued: issued
        };
        res.setHeader(ResponseHeader, token)
        res.setHeader("X-powered-By", "sobibor")
           
    }else {
        Session = decodedSession.session;
    }
    //set the session on response.locals object for routes to access
    res.locals = {
        ...res.locals,
        session: Session
    };
    //request has a valid or renewed session call next to continue to the authenticated route handler
    next();

}