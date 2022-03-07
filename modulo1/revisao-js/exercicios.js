// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        array2[i] = array[array.length - i - 1]
    }
    return array2
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    for (let i = 0; i < array.length; i++) {
        for (let t = i; t < array.length; t++) {
            if (array[i] > array[t]) {
                temp = array[i]
                array[i] = array[t]
                array[t] = temp
            }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = []
    temp = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares[temp] = array[i]
            temp++
        }
    }
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = []
    temp = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares[temp] = (array[i] * array[i])
            temp++
        }
    }
    return pares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    teste = array[0]
    for (let i = 0; i < array.length; i++) {
        if (teste < array[i]) {
            teste = array[i]
        }
    }
    return teste
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = { maiorNumero: 0, maiorDivisivelPorMenor: false, diferenca: 0 }
    if (num1 > num2) {
        objeto.maiorNumero = num1
        objeto.diferenca = num1 - num2
        if (num1 % num2 === 0) {
            objeto.maiorDivisivelPorMenor = true
        }

    }
    else {
        objeto.maiorNumero = num2
        objeto.diferenca = num2 - num1
        if (num2 % num1 === 0) {
            objeto.maiorDivisivelPorMenor = true
        }
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let i = 0; i < n; i++) {
        array[i] = i * 2
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    }
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    }
    else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    resposta = [array[array.length - 2], array[1]]
    return resposta
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let objeto = { ...pessoa, nome: `ANÔNIMO` }
    return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasPermitidas = []
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 14 && pessoas[i].idade < 60 && pessoas[i].altura >= 1.5) {
            pessoasPermitidas.push(pessoas[i])
        }
    }
    return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoPermitidas = []
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade <= 14 || pessoas[i].idade >= 60 || pessoas[i].altura < 1.5) {
            pessoasNaoPermitidas.push(pessoas[i])
        }
    }
    return pessoasNaoPermitidas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let totalCompras = 0
    for (let i = 0; i < contas.length; i++) {
        for (let t = 0; t < contas[i].compras.length; t++) {
            totalCompras = totalCompras + contas[i].compras[t]
        }
        contas[i].saldoTotal = contas[i].saldoTotal - totalCompras
        contas[i].compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    for (let i = 0; i < consultas.length; i++) {
        for (let t = i; t < consultas.length; t++) {
            if (consultas[i].nome > consultas[t].nome) {
                temp = consultas[i]
                consultas[i] = consultas[t]
                consultas[t] = temp
            }
        }
    }
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let i = 0; i < consultas.length; i++) {
        for (let t = i; t < consultas.length; t++) {
            consultaI = consultas[i].dataDaConsulta.slice(3, 5)
            consultaT = consultas[t].dataDaConsulta.slice(3, 5)
            if (consultaI > consultaT) {
                temp = consultas[i]
                consultas[i] = consultas[t]
                consultas[t] = temp
            }
            if (consultaI === consultaT) {
                if (consultas[i].dataDaConsulta > consultas[t].dataDaConsulta) {
                    temp = consultas[i]
                    consultas[i] = consultas[t]
                    consultas[t] = temp
                }
            }
        }
    }
    return consultas
}