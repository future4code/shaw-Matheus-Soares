// type result = {
//     maior : number,
//     menor: number,
//     media : number
// }


// function obterEstatisticas(numeros: number[]){
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma: number = 0

//     for(let num of numeros){
//         soma += num
//     }

//     const estatisticas : result= {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// type amostra = {
//     numeros: number[],
//     obterEstatisticas: () => {(numeros: number[]) : result }
// }

// console.log(obterEstatisticas([5,7,2,5,30,100,60,32,1000,65,80,200]))

type result = {
    maior : number,
    menor: number,
    media : number
}


function obterEstatisticas(numeros: number[]): object{
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for(let num of numeros){
        soma += num
    }

    const estatisticas= {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostra = {
    numeros: number[],
    obterEstatisticas: () => {(numeros: number[]) : result }
}

console.log(obterEstatisticas([5,7,2,5,30,100,60,32,1000,65,80,200]))