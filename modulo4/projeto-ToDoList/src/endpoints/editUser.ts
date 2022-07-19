import { Request, Response } from "express";
import updateUser from "../data/updateUser";
import { User } from "../types/user";

export default async function editUser(req: Request, res: Response) {
    try {

        const id: string = req.params.id

        const { name, nickname, email }: User = req.body

        if (name === '' || nickname === '' || email === '') {
            throw new Error(`Nenhum dos campos podem estar em branco.`)
        }

        if (!name && !nickname && !email) {
            throw new Error(`escolha ao menos um valor para alterar`)
        }
        const userUpdate: User = {
            name,
            nickname,
            email
        }
        await updateUser(id, userUpdate)

        res.status(200).send({message:`Usuario Atualizado com sucesso`})

    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}