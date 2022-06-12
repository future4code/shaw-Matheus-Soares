import {Request, Response} from "express"
import selectUserById from "../data/selectUserById"


export default async function getUserById(req: Request,res: Response){
    try {
        const user = await selectUserById(req.params.id)

        if(!user){
            res.status(400).send({message: 'usuario nao encontrado'})
        }else{
            res.status(200).send({id: user.id, nickname: user.nickname})
        }

        // validar entradas da requisiçao

        // consultar o banco de dados

        // validar as saidas do banco

        // responder à requisiçao ou encerrar (.end())
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}



















