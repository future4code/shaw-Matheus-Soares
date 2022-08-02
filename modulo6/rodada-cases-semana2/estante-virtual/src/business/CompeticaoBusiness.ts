import { AtletaDataBase } from "../data/AtletaDataBase";
import { CompeticaoDataBase } from "../data/CompeticaoDataBase";
import IdGenerator from "../services/IdGenerator";
import { Cadastro } from "../types/Cadrastro";
import { DadosCompeticao } from "../types/Dados";
import { Role } from "../types/Role";
import { CustomError } from "./errors/CustomError";
import { InvalidInputError } from "./errors/InvalidInputError";

export class CompeticaoBusiness {

    constructor(
        private competicaoDataBase: CompeticaoDataBase,
        private atletaDataBase: AtletaDataBase
    ) { }

    public registrar = async (dados: DadosCompeticao) => {
        try {
            if (!dados.competicao || !dados.unidade) {
                throw new InvalidInputError("Invalid input. All inputs are required")
            }
            if(dados.unidade !== Role.metros && dados.unidade !== Role.segundos){
                throw new InvalidInputError("Unidade must be 's' or 'm'.")
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

    public getWinner = async (resposta: string, id: string) => {
        try {
            const result = await this.atletaDataBase.getAtletaByCompeticaoId(id)
            const tipo = await this.competicaoDataBase.getNameById(id)

            if(resposta === 'FALSE') {
                await this.competicaoDataBase.encerrarCompeticao(resposta, id)
            }
            
            let primeiro, segundo, terceiro
            if(tipo.unidade === Role.segundos) {
                for(let i=0; i < result.length; i++) {
                    
                }
            }
            if(tipo.unidade === Role.metros) {
                for(let i=0; i < result.length; i++) {
                    
                }
            }

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }
}