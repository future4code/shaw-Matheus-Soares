import express from "express"
import cors from "cors"
import { produtos, algo } from './data'

const app = express()

app.use(cors())
app.use(express.json())

//exercicio 1

app.get('/test', (req, res) => {
    res.send('A API esta funcional')
})

//exercicio 2
//criado o arquivo data

//exercicio 3

// app.post('/produtos/criar', (req, res)=>{
//     const name = req.body.name
//     const price = req.body.price

//     const newProduct: algo = {
//         id: String(Date.now()),
//         name,
//         price
//     }

//     produtos.push(newProduct)

//     res.send(produtos)
// })

//exercicio 4

app.get('/produtos', (req, res) => {
    res.send(produtos)
})

//exercicio 5

// app.put('/produtos/preço/:id', (req, res) => {
//     const price = req.body.price
//     const id = req.params.id

//     for (const produto of produtos) {
//         if(produto.id===id){
//             produto.price=price
//         }
//     }
//     res.send(produtos)
// })

//exercicio 6

// app.delete('/produtos/:id', (req, res) => {
//     const id = req.params.id

//     for (let i = 0; i < produtos.length; i++) {
//         if (produtos[i].id === id) {
//             produtos.splice(i, 1)
//         }
//     }

//     res.send(produtos)
// })

//exercicio 7

app.post('/produtos/criar', (req, res) => {

    if (!req.body.price || !req.body.name || !req.body.price) {
        res.send('Erro!Um dos parametros é invalido!')
    }
    else {
        const name = req.body.name
        const price = req.body.price

        const newProduct: algo = {
            id: String(Date.now()),
            name,
            price
        }
        produtos.push(newProduct)
        res.send(produtos)
    }
})

//exercicio 8

app.put('/produtos/preco/:id', (req, res) => {

    try {
        if (!req.body.price || !req.body.name || !req.body.price || !req.params.id) {
            throw new Error('Erro!Um dos parametros é invalido!')
        }
        if (typeof (req.body.price) !== "number") {
            throw new Error('Erro! Price deve ser um numero!!')
        }
        const price = req.body.price
        const id = req.params.id

        const acharProduto = produtos.filter((produto) => {
            if (produto.id === id) {
                produto.price = price
            }
            return produto.id === id
        })
        if (!acharProduto.length) {
            throw new Error('Produto não encontrado')
        }

        res.send(produtos)
    } catch (err: any) {
        res.send(err.message)
    }
})

//exercicio 9

app.delete('/produtos/:id', (req, res) => {

    try {
        const id = req.params.id

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
                produtos.splice(i, 1)
            }
        }
        res.send(produtos)
    }
    catch (err: any) {
        res.send(err.message)
    }
})


app.listen(3003, () => console.log("Servidor disponível em 3003"))