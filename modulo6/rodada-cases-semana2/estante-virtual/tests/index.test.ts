import { CompeticaoBusiness } from "../src/business/CompeticaoBusiness";
import { DadosCompeticao } from "../src/types/Dados";
import { Role } from "../src/types/Role";
import { AtletaDataBaseMock } from "./mocks/AtletaDataBaseMock";
import { CompeticaoDataBaseMock } from "./mocks/CompeticaoDataBaseMock";

const competicaoBusinessMock = new CompeticaoBusiness(
    new CompeticaoDataBaseMock(),
    new AtletaDataBaseMock()
)

describe("testando a competicao signup", () => {
    test("Deve retornar erro quando nome da competicao ou unidade esta vazio", async () => {
        try {
            
            const competicao: DadosCompeticao = {
                competicao: "",
                unidade: Role.metros//??????????
            }

            await competicaoBusinessMock.registrar(competicao)

        } catch (error: any) {
            expect(error.message).toEqual("Invalid input. All inputs are required")
            expect(error.statusCode).toBe(500)
        } finally {
            expect.assertions(2)
        }
    })
    
    test("Sucesso no cadastro", async () => {
        try {

            const competicao: DadosCompeticao = {
                competicao: "100m rasos",
                unidade: Role.metros
            }

            const token = await competicaoBusinessMock.registrar(competicao)
            expect(token).toBe("id")
            //e agora?

        } catch (error: any) {
            console.log(error)
        } finally {
            expect.assertions(1)
        }
    })

})

describe("testando getNameById de competiçao", () => {
    test("Sucesso ", async () => {
        try {
            
            const id = "5721b389-4e6e-44d1-ab40-ef3f54905dcf"

            const token = await competicaoBusinessMock.getById(id)
            expect(token).toEqual("id")//?????? sempre funciona

        } catch (error: any) {
            console.log(error)
        } finally {
            expect.assertions(1)
        }
    })
})