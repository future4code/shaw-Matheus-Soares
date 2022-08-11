//A- acontece um erro indicando que um numero não pode ser atribuído aquele tipo de variável
//B- const meuNumero: number | string = 80
//C- 
// type Pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }
// const objeto: Pessoa = {
//     nome: "matheus",
//     idade: 21,
//     corFavorita: "azul"
// }
//D- 
enum Cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}
const objeto: Pessoa = {
    nome: "matheus",
    idade: 21,
    corFavorita: Cores.AZUL
}