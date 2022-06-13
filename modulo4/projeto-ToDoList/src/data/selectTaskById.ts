import { connection } from "./baseDataBase";

export default async function selectTaskById(id: string) {

    const [result] = await connection.raw(`
        SELECT tasks.*, users.nickname FROM task_to_do_list AS tasks
        JOIN user_to_do_list AS users
        ON tasks.author_id = users.id
        WHERE tasks.id = '${id}'
    `)


    return result

}