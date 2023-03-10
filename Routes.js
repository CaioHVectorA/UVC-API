const express = require('express')
const Routes = express.Router()
const mongoose = require('mongoose')
const Solos = require('./Solos')
mongoose.model('Solo', {
Nome: String,
Tipo: String,
Ref: String,
Desc: String,
Local: String,
Lancamento: String,
Status: String,
Escrito: String,
Tags: Array,
Imgref: String,
Associados: Array
})
mongoose.model('Serie', {
Nome: String,
Tipo: String,
Ref: String,
Desc: String,
Local: String,
Lancamento: String,
Status: String,
Escrito: String,
Tags: Array,
Imgref: String,
Associados: Array,
Capitulos: Array
})

const db = []

Routes.get('/Solos',async (req, res) => {
    db.push(Solos)

    return res.json(db)
})
module.exports = Routes