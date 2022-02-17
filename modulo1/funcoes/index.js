/*exercicio 1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a- "10" "50"
//b- nada, pois nao tem console log.
*/

/*exercicio 2
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a- a função busca a palavra 'cenoura' numa string escrita pelo usuário
//b- i/true ii/true iii/true
*/


//exercicio 1 a:
texto = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.";
function funcaoImprime(){
	console.log(texto);
}
funcaoImprime();
texto = texto.replaceAll('Caio', 'Matheus');
texto = texto.replaceAll('23', '21');
texto = texto.replaceAll('São Paulo', 'Itabuna');
texto = texto.replaceAll('sou estudante', 'eu gosto de pizza');
funcaoImprime();


//exercicio 1 b:
novoTexto = 'Eu sou NOME, tenho IDADE anos, moro em ENDEREÇO e sou PROFISSÃO.'
console.log(novoTexto);
function funcaoMensagem(nome, idade, cidade, profissao){
	novoTexto = novoTexto.replaceAll('NOME', nome);
	novoTexto = novoTexto.replaceAll('IDADE', idade);
	novoTexto = novoTexto.replaceAll('ENDEREÇO', cidade);
	novoTexto = novoTexto.replaceAll('PROFISSÃO', profissao);
	return novoTexto
}
nome = prompt("Escreva seu nome: ");
idade = Number(prompt("Escreva sua idade: "));
cidade = prompt("Escreva a cidade onde mora: ");
profissao = prompt("Escreva sua profissao: ");

imprimir = funcaoMensagem(nome, idade, cidade, profissao);
console.log(imprimir);



//exercicio 2 a:
function funcao(n1, n2) {
	soma = n1 + n2;
	return soma;
}
console.log(funcao(1,7));


//exercicio 2 b:
function bolean(n1, n2){
	let boleana = n1 >= n2;
	return boleana;
}
console.log(bolean(8,2));


//exercicio 2 c:
function funcao2(numero){
	boleana2 = (numero%2===0);
	return boleana2;
}
console.log(funcao2(Number(prompt("Escreva um numero:"))));


//exercicio 2 d:
function funcao(mensagem){
	console.log(mensagem.length, mensagem.toUpperCase());
}
funcao(prompt("Escreva uma mensagem:"));



//exercicio 3
function Soma(N1, N2) {
	let soma = N1 + N2;
	return soma;
}
function Subtracao(N1,N2){
	let subtracao = N1 - N2;
	return subtracao;
}
function Multiplicacao(N1, N2){
	let multiplicacao = N1*N2;
	return multiplicacao;
}
function Divisao(N1,N2){
	let divisao = N1/N2;
	return divisao;
}
N1 = Number(prompt("Escreva um número:"));
N2 = Number(prompt("Escreva outro número:"));
console.log('Números inseridos:', N1, N2);
console.log('Soma:', Soma(N1,N2), '\n','Diferença:', Subtracao(N1,N2), '\n', 'Multiplicação', Multiplicacao(N1,N2), '\n','Divisão', Divisao(N1,N2));


//desafio 1 a-
arrow = (parametro) => console.log(parametro);

//desafio 1 b-
a=1
b=4
flecha = (a,b) => arrow(a + b);
flecha(a,b);


//desafio 2
function pitagoras(cateto1, cateto2){
	hipotenusa = Math.sqrt((cateto1*cateto1) + (cateto2*cateto2));
	return hipotenusa;
}
N1 = Number(prompt("Escreva o primeiro cateto:"));
N2 = Number(prompt("Escreva o segundo cateto:"));
console.log(pitagoras(N1,N2));