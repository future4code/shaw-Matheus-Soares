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

app.get('/afazeres/completed/:isCompleted', (req, res) => {
  let isCompleted: any = req.params.isCompleted

  if (isCompleted === 'true') {
    isCompleted = true
  }
  else if (isCompleted === 'false') {
    isCompleted = false
  }
  else {
    res.send('path param deve ser true ou false')
  }

  const result = []

  for (let i = 0; i < afazeres.length; i++) {
    if (afazeres[i].completed === isCompleted) {
      result.push(afazeres[i])
    }
  }

  res.send(result)
})

//exercicio 5

app.post('/afazeres', (req, res) => {
  const userId = req.body.userId
  const title = req.body.title

  const newToDo: ToDo = {
    userId: userId,
    id: Date.now(),
    title: title,
    completed: false
  }

  afazeres.push(newToDo)

  res.send(afazeres)
})

//exercicio 6

app.put('/afazeres/:id/completed', (req, res) =>{
  const id = Number(req.params.id)

  for (const afazer of afazeres) {
    if(afazer.id === id){
      afazer.completed=!afazer.completed
    }
  }

  res.send(afazeres)
})

//exercicio 7

app.delete('/afazeres/:id', (req, res) =>{
  const id = Number(req.params.id)

  for(let i=0;i<afazeres.length;i++){
    if(afazeres[i].id===id){
      afazeres.splice(i, 1)
    }
  }
})

//exercicio 8 

app.get('/afazeres/:id', (req, res)=>{
  const id = Number(req.params.id)
  const result = []

  for (const afazer of afazeres) {
    if(afazer.userId===id){
      result.push(afazer)
    }
  }
  res.send(result)
})


app.listen(3003, () => {
  console.log("servidor rodando")
})