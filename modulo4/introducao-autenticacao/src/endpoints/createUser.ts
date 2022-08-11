import { Request, Response } from 'express'
import app from '../app'
import { generateId } from '../services/gerarId'

app.post("/user.signup", async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }

        if(!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const id = generateId()

        const token = generateToken({
            id,
        })

        res.status(200).send({
            token,
        });
    } catch (error: any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
});