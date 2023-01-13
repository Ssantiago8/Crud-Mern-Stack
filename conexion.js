const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmern');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('conexion exitosa con el mongo')})
objetobd.on('error', ()=>{console.log('conexion fallida con el mongo')})

module.exports = mongoose