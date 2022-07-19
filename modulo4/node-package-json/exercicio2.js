const num1 = Number(process.argv[2])
const operacao = process.argv[3]
const num2 = Number(process.argv[4])
//exemplo 3 - 5

switch (operacao){
    case "+":
        console.log(num1+num2)
        break;
    case "-":
        console.log(num1-num2)
        break;
    case "*":
        console.log(num1*num2)
        break;
    case "/":
        console.log(num1/num2)
}