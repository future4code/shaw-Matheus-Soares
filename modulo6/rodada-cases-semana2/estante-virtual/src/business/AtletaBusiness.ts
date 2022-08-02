import { AtletaDataBase } from "../data/AtletaDataBase"
import { DadosAtleta } from "../types/DadosAtleta"
import { Role } from "../types/Role"
import { TipoAtleta } from "../types/TipoAtleta"
import { CustomError } from "./errors/CustomError"
import { InvalidInputError } from "./errors/InvalidInputError"

export class AtletaBusiness {

    constructor(
        private atletaDataBase: AtletaDataBase
    ) { }

    registrar = async (dados: DadosAtleta) => {
        try {
            if (!dados.competicaoId || !dados.nome || !dados.value1 || !dados.value2 || !dados.value3 || !dados.unidade) {
                throw new InvalidInputError("Invalid input. All inputs are required")
            }
            let value
            const competicaoId = dados.competicaoId
            const nome = dados.nome

            if (dados.unidade === Role.metros) {
                value = dados.value1
                if (value < dados.value2) {
                    value = dados.value2
                }
                if (value < dados.value3) {
                    value = dados.value3
                }
                const data: TipoAtleta = { competicaoId, nome, value }
                return await this.atletaDataBase.registrar(data)
            }
            else if(dados.unidade === Role.segundos) {
                value = dados.value1
                if(value > dados.value2) {
                    value = dados.value2
                }
                if(value > dados.value3) {
                    value = dados.value3
                }
                const data: TipoAtleta = { competicaoId, nome, value }
                return await this.atletaDataBase.registrar(data)
            } else {
                throw new CustomError(500, "unidade must be 's' or 'm'.")
            }

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }
}