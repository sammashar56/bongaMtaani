export interface User1 {
    _id: string;
    name: string;
    email: string;
    phoneNumber: number;
    uid: string;
    isVerified: boolean; 
}

export interface Session {
    _id: string;
    name: string;
    phoneNumber: number;
    role: string;
    uid: string;
    email:string;
    issued: number;
    expires: number;
}

export type PartialSession = Omit<Session, "issued" | "expired">;

export interface EncodeResult {
    token: string;
    expires:number;
    issued: number;
}

export type DecodeResult = 
    |{
        type:"valid";
        session :Session;
    } | {
        type : "intergrity-error";
        
    } |  {
        type: "invalid-token"
    }

export type ExpirationStatus = "expired" | "active" | "grace"