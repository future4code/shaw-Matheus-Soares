/*exercício 1
const bool1 = true//criada a variável boleana = true
const bool2 = false//criada a variável boleana = false
const bool3 = !bool2//criada a variável boleana = !bool2(inverso da bool2)

let resultado = bool1 && bool2//variavel de condição boleana entre bool1 e bool2
console.log("a. ", resultado)//impreime ("a.  false")

resultado = bool1 && bool2 && bool3 //variavel de condição boleana entre as 3 variáveis
console.log("b. ", resultado) //imprime("b.  false")

resultado = !resultado && (bool1 || bool2) //resultado = true
console.log("c. ", resultado)//imprime ("c.  true")

console.log("d. ", typeof resultado)//imprime ("d.  bolean")
*/

/*exercício 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
//nesse código estão sendo somadas duas variáveis do tipo string por isso, o resultado não é mostrado corretamente
*/

/*exercicio 3
primeiroNumero = Number(prompt("Digite um numero!"))
segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

/*
idade = Number(prompt("Qual a sua idade?"));
idadeAmigo = Number(prompt("Qual a idade do seu(sua) melhor amigo(a)?"));
maior = idade >= idadeAmigo;
console.log("Sua idade é maior ou igual a do seu(sua) melhor amigo(a)?", maior);
diferença = idade - idadeAmigo;
console.log("A diferença entre a idade de vocês é de:", diferença, "ano");

par = Number(prompt("Escreva um número par:"));
console.log(par%2);//se o número de fato for par, o resultado do resto da divisão sempre será zero. Se não será um.

idade = Number(prompt("Escreva sua idade:"));
meses = idade/12;
console.log("Sua idade em meses é:", meses);
dias = meses/30;
console.log("Sua idade em dias é:", dias);
horas = dias/24;
console.log("Sua idade em horas é:", horas);*/

primeiroNumero = Number(prompt("Escreva um número:"));
segundoNumero = Number(prompt("Escreva outro numero:"));
console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero);
primeiroVsSegundo = primeiroNumero%segundoNumero;
console.log("O primeiro numero é divisível pelo segundo?", primeiroVsSegundo === 0);
segundoVsPrimeiro = segundoNumero%primeiroNumero;
console.log("O segundo numero é divisível pelo primeiro?", segundoVsPrimeiro === 0);

