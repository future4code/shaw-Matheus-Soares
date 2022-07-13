
export interface GeraId {
    generate():string
 }
 
 class GerarIdPeloDate implements GeraId{
    generate():string{
       return Date.now().toString()
    }
 }
 
 class Usuario {
    constructor(
       private geraId: GeraId
    ){}
 
 
    criarUsuario(name: string){
       const id = this.geraId.generate()
 
       const pessoa = {
          id,
          name
       }
 
       console.log(pessoa);
    }
 }
 
 // chamar a classe
 new Usuario(new GerarIdPeloDate).criarUsuario("Pablo")
 