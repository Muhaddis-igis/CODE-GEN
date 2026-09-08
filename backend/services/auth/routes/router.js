import { Router } from "express";

const authRouter = Router()

authRouter.get("/",(req,res)=>{
    const message = {message:"I am a user"}
    res.status(200).send(message)
})

export default authRouter