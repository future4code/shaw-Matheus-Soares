import test, { describe } from "node:test";
import { CompeticaoBusiness } from "../src/business/CompeticaoBusiness";
import { DadosCompeticao } from "../src/types/Dados";
import { Role } from "../src/types/Role";
import { AtletaDataBaseMock } from "./mocks/AtletaDataBaseMock";
import { CompeticaoDataBaseMock } from "./mocks/CompeticaoDataBaseMock";

const competicaoBusinessMock = new CompeticaoBusiness(
    new CompeticaoDataBaseMock(),
    new AtletaDataBaseMock()
)

describe("testando a competicao", () => {
    test("Deve retornar erro quando nome da competicao ou unidade esta vazio", async () => {
        try {
            
            const competicao: DadosCompeticao = {
                competicao: "",
                unidade: Role.metros
            }

            await competicaoBusinessMock.registrar(competicao)

        } catch (error: any) {
            expect(error.message).toEqual("Invalid input. All inputs are required")
            expect(error.statusCode).toBe(417)
        } finally {
            expect.assertions(2)
        }
    })
    
})