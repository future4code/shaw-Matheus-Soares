// exercicio 1
// a

const imprimirA = (numero: number) => {
    if(numero >= 0 ){
        imprimirA(numero - 1)
        console.log(numero)
    }
 }
 
 //b
 
 const imprimirB = (numero: number) => {
    if(numero >= 0){
       console.log()
       imprimirB(numero - 1)
    }
 }
 
 // exercicio 2
 const soma = (numero: number, acc: number): number => {
    if(numero = 0){
       return acc
    }
    return soma(numero - 1, acc + numero)
 }
 
 // exercicio 3
 const soma2 = (numero: number): number => {
    var soma = 0
    for (var i = 0;i <= numero;i++) {
       soma += i
    }
    return soma
 }
 
 // exercicio 4
 const imprimirArray = (array: number[], i: number = array.length - 1) => {
    if(i >= 0) {
       imprimirArray(array, i - 1)
       console.log(`Elemento ${i}: `, array[i])
    }
 }