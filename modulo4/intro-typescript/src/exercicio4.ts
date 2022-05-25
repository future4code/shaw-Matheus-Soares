function comparaDoisNumeros(num1: Number, num2: Number){
    let maiorNumero: Number
    let menorNumero: Number

    if(num1>num2){
        maiorNumero = num1
        menorNumero = num2
    }
    else{
        maiorNumero = num2
        menorNumero = num1
    }
    const diferenca:Number = Number(maiorNumero) - Number(menorNumero)

    return diferenca;
}

console.log(comparaDoisNumeros(10,50))