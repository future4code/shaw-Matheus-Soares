import { Request, Response } from "express";
import { InsertTaks, Task, TypeStatus } from "../types/task";
import moment from 'moment'
import insertTask from "../data/insertTask";
import { connection } from "../data/baseDataBase";

export default async function createTask(req: Request, res: Response) {
    try {

        const { title, description, deadline,status, authorId }: Task = req.body

        if (!title || !description || !deadline || !authorId) {
            throw new Error(`preencha os campos title , description, deadline ou authorId`)
        }

        if(status !== TypeStatus.TO_DO && status !== TypeStatus.DOING && status !== TypeStatus.DONE){
            throw new Error(`Os valores de status devem ser TO_DO , DOING ou DONE`)
        }

        const taskAlreadyExist = await connection.select('*').from('task_to_do_list').where({title})
        
        if(taskAlreadyExist.length){
            throw new Error(`Task '${title}' ja existente`)
        }

        const dateDiff: number = moment(deadline, 'DD/MM/YYYY').unix() - moment().unix()

        if (dateDiff <= 0) {
            throw new Error(`DeadLine deve ser uma data futura!`)
        }

        const id: string = Date.now() + Math.random().toString()

        const insertTaks: InsertTaks = {
            id,
            title,
            description,
            status,
            deadline:moment(deadline,"DD/MM/YYYY").format("YYYY-MM-DD"),
            authorId
        }

        await insertTask(insertTaks)

        res.status(201).send({
            message: `tarefa ${title} criado com sucesso!!`,
            id,
            deadline
        })


    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}