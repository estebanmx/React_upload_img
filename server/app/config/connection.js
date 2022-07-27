'use strict'

const mongoose=require('mongoose')
const {mongoDB} = require('./data')

mongoose.connect(mongoDB.URI)
    .then(db=> console.log('Base de datos conectada'))
    .catch (err => console.log(`Hay un error ${err}`))
