/*exercicio 1
let array
console.log('a. ', array)//"a.  undefined"

array = null
console.log('b. ', array)//"b.  null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//"c.  11"

let i = 0
console.log('d. ', array[i])//"d.  3"

array[i+1] = 19
console.log('e. ', array)//nao tenho ideia do que será impresso

const valor = array[i+6]
console.log('f. ', valor)//"f.  9"
*/

/*exercicio 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//"SUBI NUM ÔNIBUS EM MIRROCOS"
*/

//exercicio 1
nome = prompt("Qual o seu nome?");
email = prompt("Qual o seu email?");

console.log("O e-mail",email,"foi cadastrado com sucesso. Seja bem-vinda(o),", nome+"!");

//exercicio 2
array = ['pizza', 'lasanha', 'hambúrguer', 'sushi', 'sorvete'];
console.log(array);
array[1] = prompt("Qual a sua comida preferida?");
console.log("Essas são as minhas comidas preferidas:");
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//exercicio 3
listaDeTarefas = [];
listaDeTarefas.push(prompt("Escreva o primeiro item:"), prompt("Escreva o segundo item:"), prompt("Escreva o terceiro item:"));

console.log(listaDeTarefas);
itemNumero = (Number (prompt("Digite o número referente a uma tarefa concluída.")))-1;
listaDeTarefas.splice(itemNumero, 1);
console.log(listaDeTarefas);


//desafio 1
array = [];
texto = prompt("Escreva a frase:");
array = texto.split(" ");
console.log(array);


//desafio 2
array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
a = 0;
let palavra;
while(a<5){
    if(array[a]==='Abacaxi'){
        palavra = array[a];
        console.log(a, palavra);
    }
    a++;
}