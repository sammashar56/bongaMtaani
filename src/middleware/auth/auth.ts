import express, {Response, Request, NextFunction} from 'express'
import {autheticate, fetchprofile} from "../../controller/user"
import {requireJWTMiddleware} from "../auth/authorization"

const api = express.Router()

api.post(`/access`, (req:Request, res: Response, next: NextFunction)=> {
    autheticate(req.body)
        .then((Res: any)=>{
            res.status(201).json(Res)
        })
        .catch((err: any)=>{
            res.status(err.status || 500).json({
                message : err.message
            })
        })
})

api.get("/me", requireJWTMiddleware, (req: Request, res : Response) => {
    fetchprofile(res.locals.session)
        .then(Res => {
            res.status(200).json(Res)
        })
        .catch(err=> {
            res.status(err.status || 500).json({
                message: err.message
            })

        })
})

export default api