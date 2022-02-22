/*exercicio 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {//se a variavel numero divida por '2' tiver como resultado resto igual a zero, entrará no comando 'if'
  console.log("Passou no teste.")
} else {//se nao, vai imprimir essa mensagem
  console.log("Não passou no teste.")
}
A- realiza um teste para descobrir se a variavel inserida pelo usuario é par
B- apenas para numeros pares
C- apenas para numeros impares
*/

/*exercicio 2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A- o código acima recebe o nome de uma fruta do usuario e imprime o valor da fruta, se nenhum dos casos for atendido, o valor da fruta é dado como '5'
B- "O preço da fruta Maçã é R$ 2.25"
C- "O preço da fruta Maçã é R$ 5"//Como o comando breack foi retirado o codigo continua rodando, acessando a condição 'default' e atribuido '5' ao valor de 'preco'
*/

/*exercicio 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
    console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

A- a variável constante 'numero' recebe um valor Number do usuário.
B- se o valor inserido for igual a 10, a condição do comando 'if' sera atendida e os comando executados, se for -10, a condição de ser maior que zero não será atendida e sera impresso undefined.
C- apenas imprimirá undefined no console
*/


/*exercicio 1
idade = Number(prompt("Qual a sua idade?"));
if(idade>=18){
    console.log('Você pode dirigigir');
}
else{
    console.log('Você não pode dirigir');
}
*/

/*exercicio 2
turno = prompt("Digite o turno que estuda, M:matutino, V:vespertino ou N:noturno.");
turno = turno.toUpperCase();
if(turno==='M'){
    console.log('Bom dia!');
}
else if(turno==='V'){
    console.log('Boa tarde!');
}
else{
    console.log('Boa noite!');
}
*/

/*exercicio 3
turno = prompt("Digite o turno que estuda, M:matutino, V:vespertino ou N:noturno.");
turno = turno.toUpperCase();
switch (turno){
    case 'M':
        console.log('Bom dia!');
        break;
    case 'V':
        console.log('Boa tarde!');
        break;
    default:
        console.log('Boa noite!');
        break;
}
*/

/*exercicio 4
genero = prompt("Qual o gênero do filme?");
genero = genero.toLowerCase();
preco = Number(prompt("Qual o preço do ingresso?"));
if(genero === 'fantasia' && preco > 15){
    console.log('Bom filme!');
}
else{
    console.log('Escolha outro filme :(');
}
*/

/*desafio 1
genero = prompt("Qual o gênero do filme?");
genero = genero.toLowerCase();
preco = Number(prompt("Qual o preço do ingresso?"));
if(genero === 'fantasia' && preco > 15){
    snack = prompt("Qual lanche voce vai comprar?");
    console.log('Bom filme!');
    console.log('Aproveite seu', snack);
}
else{
    console.log('Escolha outro filme :(');
}
*/

/*desafio 2
cliente = {
    nome: prompt("Digite seu nome completo:"),
    tipo: prompt("Insira o tipo de jogo, IN para internacional ou DO para doméstico:"),
    etapa: prompt("Digite a etapa do jogo, SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final:"),
    categoria: Number(prompt("Digite a categoria do jogo(1, 2, 3 ou 4):")),
    quantidadeIngressos: Number(prompt("Digite a quantidade de ingressos que vai comprar:"))
}
if(cliente.etapa === 'SF'){
    cliente.etapa = 'Semifinais'
    switch (cliente.categoria){
        case 1:
            valorDoIngresso = 1320;
            break;
        case 2:
            valorDoIngresso = 880;
            break;
        case 3:
            valorDoIngresso = 550;
            break;
        case 4:
            valorDoIngresso = 220;
            break;
    }
}
else if(cliente.etapa === 'DT'){
    cliente.etapa = 'Decisão do 3° lugar'
    switch (cliente.categoria){
        case 1:
            valorDoIngresso = 660;
            break;
        case 2:
            valorDoIngresso = 440;
            break;
        case 3:
            valorDoIngresso = 330;
            break;
        case 4:
            valorDoIngresso = 170;
            break;
    }
}
else if(cliente.etapa === 'FI'){
    cliente.etapa = 'Final'
    switch (cliente.categoria){
        case 1:
            valorDoIngresso = 1980;
            break;
        case 2:
            valorDoIngresso = 1320;
            break;
        case 3:
            valorDoIngresso = 880;
            break;
        case 4:
            valorDoIngresso = 330;
            break;
    }
}
console.log("---Dados da compra---\n", 'Nome do cliente: ', cliente.nome, '\nTipo de jogo: ', cliente.tipo, '\nEtapa do jogo: ', cliente.etapa,
'\nCategoria: ', cliente.categoria, '\nQuantidade de ingressos: ', cliente.quantidadeIngressos, '\n---Valores---');
if(cliente.tipo === 'IN'){
    console.log('Valor do ingresso: U$', valorDoIngresso/4.10, '\nValor total: U$', (valorDoIngresso*cliente.quantidadeIngressos)/4.10);
}
else if(cliente.tipo === 'DO'){
    console.log('Valor do ingresso: R$', valorDoIngresso, '\nValor total: R$', (valorDoIngresso*cliente.quantidadeIngressos));
}
*/