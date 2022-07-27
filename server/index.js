//console.log ("server aquí");
'use strict'

const express = require('express')
const port = (process.env.PORT || 4000)
const path = require('path')
const cors = require('cors')

//Inicialización
const app = express()
require('./app/config/connection')
//middlewares
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//archivos estaticos
app.use(express.static(path.join(__dirname,'/app/upload')))

//routes
app.use('/',require('./app/routes/UploadImages'))

//server listening
app.listen(port,(err)=>{
    if(err){
        console.log(`Existe un error: ${err}`)
    } else {
        console.log(`Servidor corriendo en puerto: ${port}`)
    }
})
