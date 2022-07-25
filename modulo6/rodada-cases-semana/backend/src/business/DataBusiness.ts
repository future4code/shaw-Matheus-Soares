import { BaseDatabase } from "../data/BaseDatabase"
import { DataDatabase } from "../data/DataDatabase"
import { DataInputDTO } from "../types/LoginInputDTO"
import { InvalidInputError } from "./errors/InvalidInputError"
import { NotFoundError } from "./errors/NotFoundError"

export class DataBusiness {

    constructor(
        private dataDatabase: DataDatabase
    ) { }

    insertData = async (data: DataInputDTO): Promise<void> => {
        try {
            if(!data.listId || !data.name || !data.participation){
                throw new InvalidInputError("list id, name, last name andparticipation are required")
            }

            const dataResult = await this.dataDatabase.getDataById(data.listId)


            await this.dataDatabase.insertData(data)

        } catch (error: any) {

        }

    }
}