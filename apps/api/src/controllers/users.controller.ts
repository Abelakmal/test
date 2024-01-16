import { registerAction } from "@/actions/users/registerAction";
import { NextFunction, Request, Response } from "express";

export class UserController {
    async register(req:Request,res:Response,next:NextFunction){
        try {
            const register = await registerAction(req.body);
            return res.status(register.status).send(register)
        } catch (error) {
            next()
        }
    }
    async uploadImage(req:Request,res:Response,next:NextFunction) {
        try {
            
        } catch (error) {
            
        }
    }
}