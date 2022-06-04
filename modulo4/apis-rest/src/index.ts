import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
  }

type User = {
    id: number,
    name: string,
    email: string,
    type: USER_ROLES,
    age: number
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USER_ROLES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_ROLES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: USER_ROLES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: USER_ROLES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USER_ROLES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_ROLES.ADMIN,
        age: 60
    }
  ]

//exercicio 1
// letra a - metodo get
// letra b - "/users"

// app.get('/users', (req, res) => {
//     try{
        
//     }
//     catch{

//     }
// })

app.get("/users", (req, res) => {
    try {
      let type = req.query.type as string //criaçao de variaveis para pegar query params
      let search = req.query.search as string
  
      if (type) {//verifica se a variavel type existe, ou seja, se algum valor foi recebido
        type = type.toUpperCase()//coloca o conteudo em UpperCase
  
        if (type in USER_ROLES) {//verifica se o conteudo passado é ADMIN ou NORMAL
          const result = users.filter(user => user.type === type)//salva os usuarios do tipo passado pelo type(se o mesmo existir)
          return res.status(200).send(result)//retorna status 200 e os usuarios do tipo
        }
  
        throw new Error("Invalid type")//se nao for do tipo ADMIN ou NORMAL retorna esse erro
      }
  
      if (search) {//verifica se foi passado um tipo search
        search = search.toLowerCase()//transforma tudo em LowerCase
  
        const result = users.filter(//salva o usuario correto
          user => user.name.toLowerCase().includes(search)
        )
  
        console.log(result, search)
  
        if (result.length === 0) {//verifica se algum usuario foi encontrado
          return res.status(204).send("No user was found")
        }
        
        return res.status(200).send(result)//retorna o usuario encontrado
      }
  
      res.status(200).send(users)//simplesmente retorna todos os usuarios se nenhum query param foi passado
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  })

//exercicio 2
//letra a - por query params. porque é o mais comum do metodo get
//letra b - conferindo os dados que foram enviados

//exercicio 3
//letra a - query params

//exercicio 4
//letra a - nao mudou nada
//letra b - nao porque para criaçao deve-se usar o post

app.post("/users", (req, res) => {
    try {
      const { name, email, age } = req.body//recebe todas as variaveis de uma vez pelo nome
      let type = req.body.type as string//type deve ser declarada separadamente pois nao pode ser do tipo const
      
      if (!name || !email || !age || !type) {//checa se todas as variaveis existem
        throw new Error("Missing data in body to create user")
      }
  
      if (typeof name !== "string") {//checa se nome é do tipo string
        throw new Error("Invalid name")
      }
  
      if (typeof email !== "string") {//checa se email é do tipo string
        throw new Error("Invalid email")
      }
  
      if (typeof age !== "number") {//checa se age é do tipo number
        throw new Error("Invalid age")
      }
  
      type = type.toUpperCase()//coloca o type em UpperCase
      if (!(type in USER_ROLES)) {//checa se o type é compativel com os types disponiveis
        throw new Error("Invalid type")
      }
  
      users.forEach(user => {//checa se o email sendo usando para efetuar um cadastro ja nao esta atrelado a outra conta
        if (user.email === email) {
          throw new Error("Email already exists")
        }
      })
  
      const newUser: User = {//apos conferir se todos os dados estao corretos prossegue com a criaçao do usuario
        id: users.length + 1,
        name,
        email,
        age,
        type: type === USER_ROLES.NORMAL//checa o type guardado na variavel type e com um ternario salva no usuario o tipo certo
          ? USER_ROLES.NORMAL
          : USER_ROLES.ADMIN
      }
  
      users.push(newUser)//insere o novo usuario na lista original
  
      res.status(200).send({//manda a mensagem de sucesso
        message: "user created successfuly",
        user: newUser
      })
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  })
  






app.listen(3003, () => console.log("Servidor disponível em 3003"))