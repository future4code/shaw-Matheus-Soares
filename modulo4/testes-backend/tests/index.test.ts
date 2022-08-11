import { UserBusiness } from "../src/business/UserBusiness"
import { HashGeneratorMocks } from "./mocks/hashGeneratorMocks"// mocks sendo simulados
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks"// mocks sendo simulados
import { TokenGeneratorMocks } from "./mocks/tokenGeneratorMocks"// mocks sendo simulados
import { UserDatabaseMocks } from "./mocks/UserDatabaseMocks"// mocks sendo simulados

const userBusinessMock = new UserBusiness(
    new IdGeneratorMocks,
    new HashGeneratorMocks as any,
    new UserDatabaseMocks as any,
    new TokenGeneratorMocks
)

describe('teste de signUp', () => {
    test('erro quando retornar um campo vazio', async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.signup("", "fulano@gmail.com", "senha123", "NORMAL")
        } catch (error) {
            expect(error.message).toBe("Missing input")
        }
    })

    test('Erro quando o email dor inválido', async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.signup("fulano", "fulanogmail.com", "senha123", "NORMAL")
        } catch (error) {
            expect(error.message).toBe("Invalid email")
        }
    })

    test('Erro quando a senha for invalida', async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.signup("fulano", "fulano@gmail.com", "123", "NORMAL")
        } catch (error) {
            expect(error.message).toBe("Invalid password")
        }
    })

    test('Erro quando o tipo de usuario for invalido', async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.signup("fulano", "fulano@gmail.com", "senha123", "a")
        } catch (error) {
            expect(error.message).toBe("Invalid user role")
        }
    })

    test('Sucesso', async () => {
        expect.assertions(1)
        try {
            const token = await userBusinessMock.signup("fulano", "fulano@gmail.com", "senha123", "NORMAL")
            expect(token).toBe('TOKEN_QUALQUER')
        } catch (error) { }
    })
})

describe('teste de login', () => {
    test('Erro quando o email nao existir', async () => {
        try {
            await userBusinessMock.login('email@email.com', 'mocks123')
        } catch (error) {
            expect(error.message).toBe('Invalid credentials')
        }
    })

    test('Erro quando a senha estiver errada', async () => {
        try {
            await userBusinessMock.login('mock1@email.com', 'mocks3')
        } catch (error) {
            expect(error.message).toBe('Invalid credentials')
        }
    })

    test('Sucesso', async () => {
        try {
            const result = await userBusinessMock.login('mock1@email.com', 'mocks123')
            expect(result).toBe("token_qualquer")
        } catch (error) { }
    })
})

describe("getUserById", () => {
    // (a)
    test("Should catch error when id is not registered", async () => {
        try {
            await userBusinessMock.getUserById("abc")
        } catch (error) {
            //   expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    })

    // (b)
    test("Should return respective user when id is registered", async () => {
        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.getUserById(id)
            )

            const result = await getUserById("id_mock_admin")

            expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
            expect(result).toEqual({
                id: "id_mock_admin",
                name: "astrodev",
                email: "astrodev@gmail.com",
                role: "ADMIN",
            })
        } catch (error) {
            console.log(error.message)
        }
    })
})