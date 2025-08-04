const express = require("express")
const app = express()
const port = 3000

app.get('/ola', (req, res)=>{

    res.send("Olá 3º DS! The bests")

})

app.listen(port, ()=>{
    console.log("API rodando...")
})

