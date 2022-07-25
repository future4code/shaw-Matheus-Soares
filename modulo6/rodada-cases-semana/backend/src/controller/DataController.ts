import { Request, Response } from "express"
import { DataBusiness } from "../business/DataBusiness"
import { CustomError } from "../business/errors/CustomError"
import { Authenticator } from "../services/Authenticator"
import { DataInputDTO } from '../types/LoginInputDTO'


export class ListController {

    constructor(
        private dataBusiness: DataBusiness
    ){}

    insertData = async (req: Request, res: Response) => {
        try {
            const listId = String(req.params)
            const token = req.headers.authorization as string
            const { firstName, lastName, participation } = req.body
            const name = firstName + " " + lastName
            const data: DataInputDTO = { listId, name, participation }
            const user = Authenticator.getTokenData(token)

            if(!user) {
                throw new CustomError(404, "You must be logged in to perform this action")
            }

            await this.dataBusiness.insertData(data)

            res.status(201).send({ message: "Data inserted successfully"})
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}