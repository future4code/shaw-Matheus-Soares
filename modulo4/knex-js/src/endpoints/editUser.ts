import {Request, Response} from "express"
import updateUser from "../data/updateUser"


export default async function createUser(req: Request,res: Response){
    try {
        if(req.body.name === '' || req.body.nickname === '' || req.body.email === '' ){
            res.status(400).send({message: 'nenhum dos campos pode estar em branco'})
        }
        else if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({message: 'escolha pelo menos um valor para alterar'})
        }else{

        await updateUser(req.params.id, req.body.name, req.body.nickname, req.body.email)

        res.status(200).send({message: "usuario atualizado"})
        
        }
        // validar entradas da requisiçao

        // consultar o banco de dados

        // validar as saidas do banco

        // responder à requisiçao ou encerrar (.end())
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}



















