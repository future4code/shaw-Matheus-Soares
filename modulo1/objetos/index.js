/*exercicio 1
const filme = {//criado um objeto
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [//criada uma array no objeto
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, //objeto dentro da array
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])//Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])//Virginia Cavendish
console.log(filme.transmissoesHoje[2])//canal: "Telecine", horario: "21h"
*/

/*exercicio 2 a-
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}//copiou as informaçoes do objeto 'cachorro' substituindo apenas o nome

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//nome: "Juca", idade: 3, raca: "SRD"
console.log(gato)//nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga)//nome: "Jubo", idade: 3, raca: "SRD"
//b- a sintaxe de 3 pontos copia as informações de outro objeto ou array
*/

/*exercicio 3 a-
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//'false'
console.log(minhaFuncao(pessoa, "altura"))//'undefined'
*/
//b- foi impresso undefined porque nao foi atribuido valor a uma variavel 'altura'



/*exercicio 1 a-
 const pessoa = {
    nome: 'matheus',
    apelido: ['theu', 'teteu', 'teu']
 }
 function imprime(objeto){
    console.log(`Eu sou, ${objeto.nome} mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}.`);
 }
 imprime (pessoa);
//b-
const novaPessoa = {
    ...pessoa,
    apelido: ['teu', 'teteu', 'theu']
}
imprime(novaPessoa);
*/

/*exercicio 2 
const objeto1 = {
    nome: 'matheus',
    idade: 21,
    profissao: 'estudante'
}
const objeto2 = {
    nome: 'anne',
    idade: 21,
    profissao: 'estudante'
}
function array (objeto){
    vetor = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length];
    return vetor;
}
console.log(array(objeto1));
console.log(array(objeto2));
*/


/*exercicio 3
array = [];
carrinho = array;
fruta1 = {
    nome: 'morango',
    disponibilidade: true
};
fruta2 = {
    nome: 'banana',
    disponibilidade: true
};
fruta3 = {
    nome: 'melancia',
    disponibilidade: true
};
function compras(fruta){
    array.push(fruta);
    carrinho = array;
    return carrinho;
};
compras(fruta1);
compras(fruta2);
console.log(compras(fruta3));
*/

/*desafio 1
function objeto(){
    pessoa = {
    nome: prompt("Escreva seu nome:"),
    idade: Number(prompt("Escreva a sua idade:")),
    profissao: prompt("Qual a sua atual profissao?")
    };
    return pessoa
}
console.log(objeto(), typeof(pessoa));
*/


/*desafio 2
primeiroObjeto = {
    nome: prompt("Escreva o nome do primeiro filme:"),
    ano: Number(prompt("Escreva o ano de lançamento:"))//1994
};
segundoObjeto = {
    nome: prompt("Escreva o nome do segundo filme:"),
    ano: Number(prompt("Escreva o ano de lançamento:"))//1980
};
function filmes(objeto1, objeto2){
    console.log("O primeiro filme foi lançado antes do segundo?", objeto1<objeto2);
    console.log("O primeiro filme foi lançado no mesmo do segundo?", objeto1=objeto2);
}
*/


//desafio 3
array = [];
carrinho = array;
fruta1 = {
    nome: 'morango',
    disponibilidade: true
};
fruta2 = {
    nome: 'banana',
    disponibilidade: true
};
fruta3 = {
    nome: 'melancia',
    disponibilidade: true
};
function compras(fruta){
    array.push(fruta);
    carrinho = array;
    return carrinho;
};
compras(fruta1);
compras(fruta2);
console.log(compras(fruta3));

function inverte(fruta){
    fruta.disponibilidade = !fruta.disponibilidade;
}