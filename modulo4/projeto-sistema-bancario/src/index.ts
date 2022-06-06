import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

type User = {
    nome: string,
    CPF: string,
    nascimento: string,
    saldo: number,
    gastos: Extrato[]
}

const clientes: User[] = [
    {
        nome: "matheus",
        CPF: '06914592586',
        nascimento: "05/07/2000",
        saldo: 100,
        gastos: [{
            valor: 50,
            data: "20/04/2022",
            descricao: "ash vs evildead"
        }]
    }
]

app.get('/clientes/:cpf/:nome', (req, res) => {
    try {
        const cpf = req.params.cpf
        const nome = req.params.nome

        if (!cpf || !nome) {
            throw new Error('erro! cpf ou nome invalido!')
        }
        for (const cliente of clientes) {
            if (cliente.nome === nome) {
                if (cliente.CPF === cpf) {
                    return res.send('seu saldo é: R$' + cliente.saldo + ' reais')
                }
                else {
                    throw new Error('cpf nao encontrado')
                }
            } else {
                throw new Error('nome nao encontrado')
            }
        }
    } catch (error: any) {
        console.log(error.message)
    }

})

app.put('/clientes/addSaldo/:novoSaldo', (req, res) => {
    try {
        const cpf = req.body.cpf
        const nome = req.body.nome
        const novoSaldo = Number(req.params.novoSaldo)

        if (!cpf || !nome || !novoSaldo) {
            throw new Error('erro!nome, cpf ou saldo invalido!')
        }
        for (const cliente of clientes) {
            if (cliente.nome === nome) {
                if (cliente.CPF === cpf) {
                    cliente.saldo = cliente.saldo + novoSaldo
                    return res.send('Seu novo saldo é: R$' + cliente.saldo + ' reais')
                }
            }
        }
        throw new Error('Nome ou CPF nao encontrado')
    } catch (error: any) {
        console.log(error.message)
    }

})

app.post('/clientes/criar', (req, res) => {
    try {
        const idade = Number(req.body.nascimento)
        if (idade < 18) {
            throw new Error('Nao pode ter menos de 18 anos.')
        }
        const nome = req.body.nome
        const CPF = req.body.CPF
        const saldo = req.body.saldo
        if (!nome || !CPF || !saldo) {
            throw new Error('nome, cpf ou/e saldo invalido(s)!')
        }
        for (const cliente of clientes) {
            if(cliente.CPF===CPF){
                throw new Error('CPF já cadastrado')
            }
        }
        const newUser: User = {
            nome,
            CPF,
            nascimento: req.body.nascimento,
            saldo,
            gastos: []
        }

        clientes.push(newUser)

        res.send('Usuario criado' + clientes)
    } catch (error: any) {
        console.log(error.message)
    }
})

app.post('/clientes/pagar/:cpf', (req, res) => {
    try {
        const dataDePagamento = req.body.dataDePagamento
        if (dataDePagamento < 2022) {
            throw new Error('A data de pagamento nao pode ser no passado!')
        }

        const descricao = req.body.descricao
        const valor = Number(req.body.valor)
        const CPF = req.params.cpf

        if (!dataDePagamento || !valor || !descricao || !CPF) {
            throw new Error('A data de pagamento, o valor, o cpf ou/e a descricao invalido(s)!')
        }

        const newGasto: Extrato = {
            valor,
            data: dataDePagamento,
            descricao
        }

        for (const cliente of clientes) {
            if (cliente.CPF === CPF) {
                if (cliente.saldo < valor) {
                    throw new Error('Saldo insuficiente!')
                }
                cliente.gastos.push(newGasto)
                cliente.saldo = cliente.saldo - valor
                return res.send("pagamento realizado com sucesso! novo saldo: R$" + cliente.saldo)
            }
        }

        throw new Error("Cliente nao encontrado")

    } catch (error: any) {
        console.log(error.message)
    }
})

app.post('/clientes/transferencia', (req, res) => {
    try {
        const remetente = req.body.nomeDoRemetente
        const destinatario = req.body.nomeDoDestinatario
        const remetenteCPF = req.body.remetenteCPF
        const destinatarioCPF = req.body.destinatarioCPF
        const valor = req.body.valor
        let indiceRemetente: number 

        if (!remetente || !destinatario || !remetenteCPF || !destinatarioCPF || !valor) {
            throw new Error('nome e/ou CPF do destinatario e/ou remetente, ou valor, invalido(s)!')
        }

        for(let i = 0; i<clientes.length;i++){
            if(clientes[i].nome===remetente){
                if(clientes[i].CPF===remetenteCPF){
                    indiceRemetente = i
                    clientes[i].saldo = clientes[i].saldo - valor
                }
            }
        }
        // if(!indiceRemetente){
            // throw new Error('Remetente nao encontrado')
        // }
        for(let i = 0; i<clientes.length;i++){
            if(clientes[i].nome===destinatario){
                if(clientes[i].CPF===destinatarioCPF){
                    clientes[i].saldo = clientes[i].saldo + valor
                    return res.send('transferencia realizada com sucesso')
                }
            }
        }
        // clientes[indiceRemetente].saldo += valor
        throw new Error('Destinatario nao encontrado')
    } catch (error: any) {
        console.log(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor disponivel em 3003")
})