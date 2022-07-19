import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import insertUser from "../data/insertUser";
import { User, UserInsert } from "../types/user";

export default async function createUser(req: Request, res: Response) {
    try {
        const { name, nickname, email }: User = req.body

        
        if(!name || !nickname || !email){
            throw new Error(`preencha os campos name , nickname ou email`)
        }

        const userAlreadyExist = await connection.select('*').from('user_to_do_list').where({email})
        
        if(userAlreadyExist.length){
            throw new Error(`Usuario '${name}' ja existente`)
        }

        const id:string = Date.now() + Math.random().toString()

        const userInsert: UserInsert ={
            id,
            name,
            nickname,
            email
        }

        await insertUser(userInsert)

        res.status(201).send({message:`Usuario ${name} criado com sucesso!!`})

    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}