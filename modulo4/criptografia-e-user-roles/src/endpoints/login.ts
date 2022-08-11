import { compare } from 'bcryptjs';
import { Request, Response } from 'express'
import { userInfo } from 'os';
import app from '../app'

app.post("/login", async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.idexOF("@") === -1) {
            throw new Error("Invalid email");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const user = await getUserByEmail(userData.email);//?

        const comapareResult = await compare(
            userData.password,
            user.password;
        )

        if(!compareResult) {//?
            throw new Error("Invalid password")
        }

        const token = generateToken({//?
            id: userInfo.id
        });

        res.status(200).send({//?
            token,
        });

        
    } catch (error: any) {
        res.status(400).send({
            message: error.message//?
        })
    }
})