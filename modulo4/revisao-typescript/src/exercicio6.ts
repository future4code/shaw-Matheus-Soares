type Clients = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}
type NovoClient = {
    cliente: string,
    saldoTotal: number,
    debitos: number
}

const clientes: Clients[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function SaldoNegativo (algos: Clients[]){
    // const debits: number[][] = algos.map(algo => algo.debitos)
    let debits: string[]
    let soma: number
    let subtracao: number
    let i: number = 0
    for(let i =0;i<algos.length;i++){
        soma = 0
        for(let j=0;j<algos[i].debitos.length;j++){
            soma = algos[i].debitos[j] + soma
        }
        subtracao = algos[i].saldoTotal - soma
        if(subtracao<0){
            debits[i] = algos[i].cliente
            i++;
        }
    }
    return debits
}

console.log(SaldoNegativo(clientes))