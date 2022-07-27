export class HashGeneratorMocks {
   public hash = async (s: string): Promise<any> => {
      return 'senha_Hasheada'
   }

   public compareHash = (s: string, hash: string)=> {
      return s === hash
   }
}

