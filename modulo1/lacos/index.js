/*exercicio 1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
A- laço de repetição
B- '10'
*/

/*exercicio 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
A- sera impresso todos os numeros da array maiores que 18
B- sim, apenas retirando o 'if' seria impresso todos os itens da lista
*/

/*exercicio 3
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){//0
    linha += "*"//****
  }
  console.log(linha)
  quantidadeAtual++
}//será impresso 4 linhas, cada uma com um asterisco a mais que a anterior
*/

/*exercicio 1
bixos = Number(prompt("Quantos animais de estimação você tem?"));
i=1;
bixo = [];
while(bixos>=i){
    //bixo[i-1] = prompt(`Digite o nome do ${i}° bixinho:`);
    bixo.push(prompt(`Digite o nome do ${i}° bixinho:`));
    i++;
}
if(bixos===0){
    console.log('Que pena! Você deveria adotar um bixinho.');
}
else{
    console.log(bixo);
}
*/

/*exercicio 2
array = [10, 100, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 105, 9, 17];

function funcaoImprime(array){//A
    console.log(array);
}
funcaoImprime(array);

function funcaoDivide(array){//B
    for(let i=0;i<array.length;i++){
        console.log(array[i]/10);
    }
}
funcaoDivide(array);

function funcaoPar(array){//C
    let novaArray = [];
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            novaArray.push(array[i]);
        }
    }
    console.log(novaArray);
}
funcaoPar(array);

function funcaoString(array){//D
    let novaArray = [];
    for(let i=0;i<array.length;i++){
        novaArray.push("O elemento do índex "+i+" é: "+array[i]);
    }
    console.log(novaArray);
}
funcaoString(array);

function funcaoMaiorEMenor(array){//E
    let maior = array[0];
    let menor = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>maior){
            maior = array[i];
        }
        if(array[i]<menor){
            menor = array[i];
        }
    }
    console.log("O maior número é:", maior,"\nE o menor número é:", menor);
}
funcaoMaiorEMenor(array);
*/


/*desafio 1
numero = Number(prompt("Digite um número:"));
chute = Number(prompt("Vamos jogar!"));
if(chute===numero){
    console.log("Acertou de primeira!!!");
}
else{
    let i = 1;
    while(chute!=numero){
        if(chute<numero){
            chute = Number(prompt(`O número chutado foi ${chute} \nErrrrrrrrou, é maior`));
        }
        else{
            chute = Number(prompt(`O número chutado foi ${chute} \nErrrrrrrrou, é menor`));
        }
        i++;
    }
    console.log("Acertou!!\nO número de tentativas foi:", i);
}
*/

/*desafio 2
numero = Number(Math.floor(Math.random()*20));
chute = Number(prompt("Vamos jogar!"));
if(chute===numero){
    console.log("Acertou de primeira!!!");
}
else{
    let i = 1;
    while(chute!=numero){
        if(chute<numero){
            chute = Number(prompt(`O número chutado foi ${chute} \nErrrrrrrrou, é maior`));
        }
        else{
            chute = Number(prompt(`O número chutado foi ${chute} \nErrrrrrrrou, é menor`));
        }
        i++;
    }
    console.log("Acertou!!\nO número de tentativas foi:", i);
}
*/