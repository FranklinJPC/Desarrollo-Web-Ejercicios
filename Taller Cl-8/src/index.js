const express = require('express')
const {engine} = require('express-handlebars')
const { request } = require('http')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000;

/* ------- Rutas --------- */ 
/* ------- Handlebars ------ */ 
app.engine('.hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('principal')
})
// Para funcionamiento de las imagenes
app.get('/public', (req, res) =>{
    res.render('public')
})
app.get('/p5', (req,res) =>{
    res.render('persona')
})
app.get('/lore', (req, res) =>{
    res.render('lore')
})

/* ------ Request - Response  */
/* --- Request Params -- */
app.get('/usuario/:user/:edad/:id', (req, res) =>{
    const {user, edad, id} = req.params
    res.send(`<h1>Bienvenido</h1>\n
    <h1>Cuenta</h1>\n
    - ${user}\n
    - ${edad}\n
    - ${id}`)
})
app.get('/kawakami/:foto', (req, res)=>{
    if(req.params.foto === "SI"){
        res.sendFile('./public/images/kawakami.png',{
            root: __dirname
        })
    }
    else{
        res.render('error')
    }
})

/* ------ Query Params ------ */
app.get('/busqueda', (req, res) =>{
    if(req.query.data === "simp"){
        res.sendFile("./public/images/simp.jpg", {
            root: __dirname
        })
    }
    else if(req.query.data == "levantese"){
        res.sendFile("./public/images/levantese.jpg", {
            root: __dirname
        })
    }
    else if(req.query.data == "sabias"){
        res.sendFile("./public/images/sabias.jpg", {
            root: __dirname
        })
    }
    else if(req.query.data == "zzz"){
        res.sendFile("./public/images/miimi.jpg", {
            root: __dirname
        })
    }
    else if(req.query.data == "abogado"){
        res.sendFile("./public/images/Saul.gif", {
            root: __dirname
        })
    }
    else{
        res.render("error")
    }
})
/* ----- Middle Ware ----- */
app.use((req, res) =>{
    res.render('error')
})
app.listen(PORT, () => {
    console.log(`Servidor en progreso...."${PORT}`);
});
//app.listen(3003)
