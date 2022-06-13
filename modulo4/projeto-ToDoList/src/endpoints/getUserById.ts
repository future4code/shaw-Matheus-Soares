import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(req:Request,res:Response) {
    try {
      
      const id:string = req.params.id
      
      const user = await selectUserById(id)

      if(!user){
          throw new Error(`Usuario nao encontrado`)
      }

      res.status(200).send({message:"sucesso",user})
    } catch (error:any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}