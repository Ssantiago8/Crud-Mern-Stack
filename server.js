const express = require ('express')
const app = express()

//Import conexion bdMongo

const archivoBD = require('./conexion')

//Import archivo rutas y modelo

const rutausuario = require ('./rutas/usuario')

//Import body parser

const bodyParser  = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor bakk')
})

//Configuracion basica

app.listen(5000, function(){
    console.log('El servidor NODE esta arriba')
})