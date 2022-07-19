import { connection } from "..";

const insertTask = async (id: string, title: string, description: string, deadline: string, authorId: string) => {
    try {
        await connection('to_do_list_tasks')
        .insert({
            id,
            title,
            description,
            deadline,
            authorId
        })
        
    } catch (error:any) {
        console.log(error.sqlMessage || error.message)
    }
}

export default insertTask;