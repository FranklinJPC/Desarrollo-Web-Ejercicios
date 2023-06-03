const http = require('http')
const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Esto es un servidor desde Node.js</h1>");
    res.write("<h2>Y eso nomas es un ejemplo de creacion de un servidor!!!</h2>")
    res.write("...............")
    res.end()
})
server.listen(3000)
console.log("Servidor en curso.")