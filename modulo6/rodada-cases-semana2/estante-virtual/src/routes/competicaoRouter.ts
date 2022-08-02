import { CompeticaoBusiness } from "../business/CompeticaoBusiness";
import { CompeticaoController } from "../controller/CompeticaoController";
import { CompeticaoDataBase } from "../data/CompeticaoDataBase";
import express from 'express'

const competicaoController = new CompeticaoController(
    new CompeticaoBusiness(
        new CompeticaoDataBase()
    )
)

export const competicaoRouter = express.Router()

competicaoRouter.post('/cadastro', competicaoController.registrar)
competicaoRouter.get('/get', competicaoController.getAll)
competicaoRouter.get('/getName', competicaoController.getNameById)