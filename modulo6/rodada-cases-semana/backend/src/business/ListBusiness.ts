import { ListDatabase } from "../data/ListDatabase"
import { List } from "../model/List"
import IdGenerator from "../services/IdGenerator"
import { CustomError } from "./errors/CustomError"
import { InvalidInputError } from "./errors/InvalidInputError"
import { NotFoundError } from "./errors/NotFoundError"

export class ListBusiness {

    constructor(
        private listDatabase: ListDatabase
    ) { }

    createList = async (name: string, userId: string) => {
        try {

            if (!name) {
                throw new InvalidInputError("Invalid input. List name is required")
            }
            // console.log(userId)
            const listId: any[] = await this.listDatabase.getListByUserId(userId)
            // console.log(listId)
            if (listId) {
                for (const list of listId) {
                    // console.log(list.list_id)
                    const registeredList = await this.listDatabase.getListNameById(list.list_id)
                    console.log(registeredList)
                    if (registeredList === name) {
                        throw new CustomError(500, "List name already being used")
                    }
                }
                // for (var i: number = -1; i < registeredList.length; i++) {
                    // console.log(registeredList, 'registeredList')
                // }
            }

            const newListId = IdGenerator.idGenerator()
            const newList = new List(newListId, name)

            await this.listDatabase.insertList(newList)
            await this.listDatabase.insertListIdPermissao(newListId, userId)

            return newList

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    getAllListsById = async (userId: string) => {
        try {

            const listId = await this.listDatabase.getListByUserId(userId)//map????&&push?????

            const result = await this.listDatabase.getAllListsById(listId)

            return result
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }
}