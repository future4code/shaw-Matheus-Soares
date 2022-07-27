import express from 'express'
import { DataController } from "../controller/DataController"
import { DataBusiness } from "../business/DataBusiness"
import { DataDatabase } from "../data/DataDatabase"

const dataController = new DataController(
    new DataBusiness(
        new DataDatabase()
    )
)

export const dataRouter = express.Router()

dataRouter.post('/data/create/:listName', dataController.insertData)