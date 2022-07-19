import { Request, Response } from "express";
import moment from "moment";
import selectTaskById from "../data/selectTaskById";
import { taskData } from "../types/task";

export default async function getTaskById(req: Request, res: Response) {
    try {

        const id: string = req.params.id


        const task = await selectTaskById(id)


        if (!task.length) {
            throw new Error(`tarefa nao encontrada`)
        }

        const taskData: taskData = {
            id: task[0].id,
            title: task[0].title,
            description: task[0].description,
            deadline: moment(task[0].deadline, "YYY-MM-DD").format("DD/MM/YYYY"),
            status: task[0].status,
            authorId: task[0].author_id
        }
      
        res.status(200).send({
            message: "sucesso",
            taskData
        })


    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}