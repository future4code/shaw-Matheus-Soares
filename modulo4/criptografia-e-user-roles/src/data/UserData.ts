import { BaseDataBase } from "./connection";


export class UserData extends BaseDataBase{
    async createUser(id: string, email: string, senha: string){
        await this.getConnection()
            .
    }
}