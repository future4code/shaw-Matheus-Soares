import { AtletaController } from '../controller/AtletaController'
import { AtletaBusiness } from '../business/AtletaBusiness'
import { AtletaDataBase } from '../data/AtletaDataBase'
import express from 'express'

const atletaController = new AtletaController(
    new AtletaBusiness(
        new AtletaDataBase()
    )
)

export const atletaRouter = express.Router()

atletaRouter.post('/cadastro', atletaController.registrar)