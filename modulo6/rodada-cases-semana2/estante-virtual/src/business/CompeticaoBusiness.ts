import { CompeticaoDataBase } from "../data/CompeticaoDataBase";
import IdGenerator from "../services/IdGenerator";
import { Cadastro } from "../types/Cadrastro";
import { DadosCompeticao } from "../types/Dados";
import { Role } from "../types/Role";
import { CustomError } from "./errors/CustomError";
import { InvalidInputError } from "./errors/InvalidInputError";

export class CompeticaoBusiness {

    constructor(
        private competicaoDataBase: CompeticaoDataBase
    ) { }

    public registrar = async (dados: DadosCompeticao) => {
        try {
            if (!dados.competicao || !dados.unidade) {
                throw new InvalidInputError("Invalid input. All inputs are required")
            }
            const competicao = dados.competicao
            const unidade = dados.unidade

            const id = IdGenerator.idGenerator()

            const data: DadosCompeticao = { competicao, unidade }
            
            await this.competicaoDataBase.registrar(data, id)

            return id

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    public getAll = async  () => {
        try {
            return await this.competicaoDataBase.getAll()
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    public getNameById = async (id: string) => {
        try {
            const result = await this.competicaoDataBase.getNameById(id)
            return result 
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    public getWinner = async (resposta: boolean) => {
        try {

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }
}