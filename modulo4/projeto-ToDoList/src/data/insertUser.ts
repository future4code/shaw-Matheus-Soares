import { connection } from "./baseDataBase";
import { UserInsert } from "../types/user";

export default async function insertUser(user: UserInsert): Promise<void> {
    const { id, name, nickname, email } = user

    await connection.insert({
        id,
        name,
        nickname,
        email
    }).into('user_to_do_list')

    
}