/*exercicio 1
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
})//O comando MAP pode receber 3 parametros, o primeiro imprime o conteudo do index atual, o segundo imprime o numero do index que se encontra, e o terceiro imprime todo o conteudo.
*/

/*exercicio 2
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
})

console.log(novoArrayB)//imprime apenas os nomes contidos na string 'usuarios'
*/

/*exercicio 3
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
})

console.log(novoArrayC)//imprime todos os apelidos diferentes de "Chijo"
*/

/*exercicio 1
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
console.log(pets);
//a
const petsNome = pets.map((pet)=>{
    return pet.nome;
})
console.log(petsNome);
//b
const petsSalsicha = pets.filter((pet)=>{
    return pet.raca === "Salsicha"
})
console.log(petsSalsicha);
//c
const petsPoodle = pets.filter((pet)=>{
    return pet.raca === "Poodle"
}).map((pet)=>console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`))
*/

/*exercicio 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a
const produtosNome = produtos.map((produto)=>produto.nome)
console.log(produtosNome);
//b
const produtosDesconto = produtos.map((produto)=>{
    produto.preco = produto.preco*0.95
    return produto
})
console.log(produtosDesconto);
//c
const produtosBebidas = produtos.filter((produto)=> produto.categoria === "Bebidas").map((produto)=> produto)
console.log(produtosBebidas);
//d
const produtosYpe = produtos.filter((produto)=> produto.nome.includes("Ypê")).map((produto)=> produto)
console.log(produtosYpe);
//e
const compreYpe = produtos.filter((produto)=> produto.nome.includes("Ypê")).map((produto)=> `Compre ${produto.nome} por ${produto.preco}`)
console.log(compreYpe);
*/


//desafio 1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
/*a
pokemons.sort(function (a, b) {
    return novoObj = (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
})
let arrayNomes = []
for(let i = 0;i<pokemons.length;i++){
    arrayNomes[i] = [pokemons[i].nome]
}
console.log(arrayNomes)
*/
//b
let arrayTipos = ['']
console.log(arrayTipos.length);
let temp = 0
for(let i = 0;i<pokemons.length;i++){//2
    console.log('entrou no primeiro for');
    for(let t = 0;t<=arrayTipos.length;t++){
        console.log('entrou no segundo for');
        if(arrayTipos[t]===pokemons[i].tipo){//nao vai entrar no primeiro ciclo,
            console.log('entrou no primeiro if');
            break;
        }
        if(t===temp){
            console.log('entrou no segundo if');
            if(arrayTipos[t]!==pokemons[i].tipo){//tem que entrar no primeiro ciclo,
                console.log('entrou no terceiro if');
                arrayTipos[temp] = pokemons[i].tipo;
                temp++;//1
                break;
            }
        }
    }
}
console.log(arrayTipos);