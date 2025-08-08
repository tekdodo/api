const express = require("express")
const app = express()
const port = 3001
app.use(express.json())
const pessoas = []

app.post('/pessoas', (req, res)=>{
    const pessoa = req.body
    pessoas.push(pessoa)
    res.send("Pessoa cadastrada com sucesso!")
}) 

app.get('/pessoas', (req, res)=>{

    res.send(pessoas)

})

app.get('/ola', (req, res)=>{

    res.send("Olá 3º DS! The bests")

})

app.listen(port, ()=>{
    console.log("API rodando...")
})
