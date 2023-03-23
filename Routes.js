const express = require('express')
const Routes = express.Router()
const mongoose = require('mongoose')
const Chars = require('./Chars')
const Series = require('./Series')
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


Routes.get('/Solos',async (req, res) => {
    const db = []
    db.push(Solos)
    
    return res.json(db)
})
Routes.get('/Solos/:id',async (req, res) => {
    const { id } = req.params
    const db = []
    db.push(Solos)
    console.log(db[id * 1],id * 1,db[0])
    return res.json(db[0][id * 1])
})
Routes.get('/Solos/Alternatives',async (req, res) => {
    let Alt = Solos.filter(item => item.isAlternative === true)
    console.log(Solos)
    const db = []
    Alt.forEach(element => {
      db.push(element) 
    });
    // db.push(Solos)
    
    return res.json(db)
})
Routes.get('/Series',async (req, res) => {
    const db = []
    db.push(Series)
    
    return res.json(db)
})
Routes.get('/Series/:REF',async (req, res) => {
    const {REF} = req.params 
    let db = []
    const refe = Series.filter(item => item.Ref === `SE_${REF}`)
    console.log(refe,db,Series)
    db = refe
    return res.json(db)
})

Routes.get('/Series/:REF/Cap',async (req, res) => {
    const {REF} = req.params 
    let db = []
    const refe = Series.filter(item => item.Ref === `SE_${REF}`)
    console.log(refe,db,Series)
    db = refe
    return res.json(db[0].Capitulos)
})
// Routes.get('/Series/:REF/EP/:NUM',async (req, res) => {
//     const {NUM} = req.params 
//     let db = []
//     const refe = Series.filter(item => item.Ref === `SE_${REF}`)
//     console.log(refe,db,Series)
//     db = refe
//     return res.json(db[0].Capitulos)
// })
Routes.get('/', async (req, res) => {
    const db = []
    db.push(Solos,Series)
    return res.json(db)
})

Routes.get('/Chars',async (req, res) => {
    return res.json(Chars)
})
module.exports = Routes