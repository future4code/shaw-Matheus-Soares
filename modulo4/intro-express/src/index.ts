import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

//exercicio 1

app.get("/", (req, res) => {
    res.send("hello from express")
})

//exercicio 2

type User = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string
}

//exercicio 3

const usuarios: User[] = [
    {
    id: "asdfg-ghjk-oiu-qwer",
    name: "matheus",
    phone: "99999999",
    email: "matheus@matheus.com",
    website: "matheus.com.br"
    },
    {
        id: "lkjh-mnbv-zcxv-fhgs",
        name: "anne",
        phone: "8888-8888",
        email: "anne@anne.com",
        website: "anne.com.br"
    }
]

//exercicio 4

app.get("/usuarios", (req, res) => {
    usuarios.length<0? res.status(401).send("nao tem usuarios") 
    : res.status(201).send(usuarios)
})

//exercicio 5

type Post = {
    id: string,
    title: string,
    body: string,
    userId: string
}

//exercicio 6

const posts: Post[] = [
    
]












app.listen(3003, function(){
    console.log("meu servidor esta rodando na porta 3003!")
})

