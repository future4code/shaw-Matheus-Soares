import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//exercicio 1

app.get('/ping', (req, res) => {
    res.send('pong')
})

console.log("escreva seu nome: ")

//exercicio 2

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//exercicio 3

const afazeres: ToDo[] = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
      },
      {
        userId: 1,
        id: 11,
        title: "vero rerum temporibus dolor",
        completed: true
      }
]

//exercicio 4

// app.get('/afazeres', (req, res) => {
//     afazeres.filter()
// })







app.listen(3003, () => {
    console.log("servidor rodando")
})