import { TipoAtleta } from "../types/TipoAtleta";
import { BaseDataBase } from "./BaseDataBase";

const tableName = "atleta"

export class AtletaDataBase extends BaseDataBase {

    registrar = async (dados: TipoAtleta) => {
        try {
            await BaseDataBase.connection
                .insert({
                    nome: dados.nome,
                    value: dados.value,
                    competicao: dados.competicaoId
                })
                .into(tableName)
            
        } catch (error: any) {
            throw new Error( error.mysqlMessage || error.message )
        }
    }
}