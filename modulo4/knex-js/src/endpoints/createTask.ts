import {Request, Response} from "express"
import moment from "moment"
import insertTask from "../data/insertTask"


export const createTask = async (req: Request,res: Response) => {
    try {
        if(!req.body.title || !req.body.description || !req.body.deadline || !req.body.authorId){
            throw new Error('"title", "description", "deadline" e  "authorId" sao origatorios')
        }

        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()

        if(dateDiff <= 0){
            throw new Error("deadline tem que ser uma data futura!!")
        }

        const id: string = Date.now() + Math.random().toString()
        await insertTask(
            id, 
            req.body.title, 
            req.body.description, 
            moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'), 
            req.body.authorId)

        res.status(200).send({message: "tarefa criada com sucesso", id})
        // validar entradas da requisiçao

        // consultar o banco de dados

        // validar as saidas do banco

        // responder à requisiçao ou encerrar (.end())
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}



















