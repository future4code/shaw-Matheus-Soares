import { ListDatabase } from "../data/ListDatabase"
import { List } from "../model/List"
import IdGenerator from "../services/IdGenerator"
import { CustomError } from "./errors/CustomError"
import { InvalidInputError } from "./errors/InvalidInputError"
import { NotFoundError } from "./errors/NotFoundError"

export class ListBusiness {

    constructor (
        private listDatabase: ListDatabase
    ){}
    
    createList = async (name: string, userId: string) => {
        try {
            
            if(!name) {
                throw new InvalidInputError("Invalid input. List name is required")
            }
            // console.log(userId)
            const listId: string[] = await this.listDatabase.getListByUserId(userId)//this returns a string of arrays
            console.log(listId)
            if(listId){
                const registeredList = await this.listDatabase.getListNameById(listId)//this sends a string of arrays and receive another
                for(var i: number = -1; i<registeredList.length; i++){
                    console.log('entrou no for')
                        if(registeredList[i] === name) {
                            throw new NotFoundError("List name already being used")
                        }
                    }
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