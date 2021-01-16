const express = require('express')
const starWars = require('./apis/star-wars.api')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/peoples/:id', async function (req, res) {
    const people = await starWars.getPeople(req.params.id)
    res.send(people)
  })

  app.get('/filmes/:id', async function (req, res) {
    const filmes = await starWars.getFilmes(req.params.id)
    res.send(filmes)
  })

  app.get('/planets/:id', async function (req, res) {
    const planets = await starWars.getPlanets(req.params.id)
    res.send(planets)
  })

  app.get('/species/:id', async function (req, res) {
    const species = await starWars.getSpecies(req.params.id)
    res.send(species)
  })

app.listen(3000)

