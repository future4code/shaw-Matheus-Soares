import { DataInputDTO } from "../types/LoginInputDTO"
import { BaseDatabase } from "./BaseDatabase"

export class DataDatabase extends BaseDatabase{
    
    private static LIST_DATA = "dados"

    getDataById = async (list_id: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(DataDatabase.LIST_DATA)
                .where({list_id})

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    insertData = async (data: DataInputDTO) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    name: data.name,
                    participation: data.participation
                })
                .into(DataDatabase.LIST_DATA)//ta certo?????
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}