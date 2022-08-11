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
    {
        id: "232343-34343-3453-456468",
        title: "Educação que reinventa",
        body: "Venha estudar programação para se tornar um programador de sucesso!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgbd" 
        },
    {
        id: "45453-232435-232434-2312",
        title: "Vem para Casas Bahia",
        body: "Aqui você encontra os melhores preços com frete gratis",
        userId: "knro2in3-fin3oi-v3nroi-3rrrfr"
    },
    {
        id: "45655-45534534-676767-7787",
        title: "CVC com os melhores preços e hoteis",
        body: "Venha curtir seus melhores momentos ao lado de quem você ama!",
        userId: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4"
    },
    {
        id: "45334-3242343-2322343-54654",
        title: "Americanas",
        body: "Promoções todos os dias e com os melhores preços, venha conferir",
        userId: "fgregrgth-4353htrh-btb4tht4b-b4t4b"
    }
]

//exercicio 7

app.get("posts", (req, res)=> {
    !posts.length? res.status(401).send("nao tem posts")
    : res.status(201).send(posts)
})

//exercicio 8

app.get('posts/:userId', (req, res) => {
    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user
    })

    if(!user){
        return res.status(400).send('entre com userId valido')
    }else if(post.length === 0) {
        return res.status(400).send('nenhum resultado encontrado')
    }

    res.status(201).send(post)
})






app.listen(3003, function(){
    console.log("meu servidor esta rodando na porta 3003!")
})

