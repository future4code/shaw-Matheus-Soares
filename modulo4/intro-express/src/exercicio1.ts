import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello from express")
})

app.listen(3003, function(){
    console.log("meu servidor esta rodando na porta 3003!")
})