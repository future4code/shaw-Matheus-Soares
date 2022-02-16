/*
let a = 10 //declarando variavel a
let b = 10 //declarando variavel b

console.log(b) //imprime "10"

b = 5 //declara novo valor a variavel b
console.log(a, b) //imprime "10 5"
*/

/*
let a = 10 //declarada a variavel a
let b = 20 //declarada a variavel b
c = a //atribuído o valor da variável 'a' à variável 'c'
b = c //atribuído o valor da variável 'c' à variável 'b'
a = b //atribuído o valor da variável 'b' à variável 'a'

console.log(a, b, c) //impresso "10 10 10"
*/

/*
let p = prompt("Quantas horas você trabalha por dia?") //variável 'p' recebe prompt
let t = prompt("Quanto você recebe por dia?") //variável 't' recebe prompt
alert(`Voce recebe ${t/p} por hora`) //mensagem de alerta "Voce recebe (valor de 't' dividido por 'p') por hora"
*/

//programa 1
let nome
let idade

console.log(typeof nome, typeof idade) //foi impresso 'undefined' porque nenhum valor foi atribuído,
//então o programa não sabe de que tipo a variável será.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome, typeof idade) //as duas variáveis foram consideradas como strings
console.log("Olá", nome,", você tem", idade,"anos.")

//programa 2
a = prompt("Você tem mais de 18 anos?")
b = prompt("Você trabalha?")
c = prompt("Você estuda?")

console.log("Você tem mais de 18 anos?",a)
console.log("Você trabalha?",b)
console.log("Você estuda?",c)

//programa 3
a = 10
b = 25
c=a//salvei o valor de 'a'
a=b//substitui o valor de 'a'
b=c//coloquei o antigo valor de 'a' em 'b'
console.log("O novo valor de 'a' é:",a)
console.log("O novo valor de 'b' é:",b)

