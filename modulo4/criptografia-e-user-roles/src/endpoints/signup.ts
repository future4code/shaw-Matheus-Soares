import { hash } from 'bcryptjs';
import { Request, Response } from 'express'
import app from '../app'
import { UserData } from '../data/UserData';
import { Generate } from '../services/generate'

app.post("signup", async (req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const id = new Generate().generateId();

        const hashPassword = await hash(userData.email, userData.password);

        await new UserData().createUser(id, userData.email, hashPassword)

        const token = generateToken({//?
            id
        });

        res.status(200).send({
            token,
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
});