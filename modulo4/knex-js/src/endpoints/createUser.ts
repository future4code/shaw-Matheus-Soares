import {Request, Response} from "express"
import insertUser from "../data/insertUser"


export default async function createUser(req: Request,res: Response){
    try {

        if(!req.body.name || !req.body.nickname || !req.body.email){
            res.status(400).send("Preencha os campos corretamente")
            res.end()
        }else{

            const id: string =  Date.now() + Math.random().toString()
            
            await insertUser(id, req.body.name, req.body.nickname, req.body.email)
            
            res.status(200).send("Usuario criado com sucesso!")
        }
            

        // validar entradas da requisiçao

        // consultar o banco de dados

        // validar as saidas do banco

        // responder à requisiçao ou encerrar (.end())
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}



















