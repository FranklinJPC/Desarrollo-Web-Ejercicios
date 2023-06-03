const express = require('express')
const app = express()
app.get('/', (request, response) =>{
    response.send("<h1>Esto es un servidor pero en Express!!</h1>")
}) 
app.listen(3000)
console.log("Servidor en curso.")