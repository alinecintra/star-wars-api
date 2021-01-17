const express = require('express')
const starWars = require('./apis/star-wars.api')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/peoples/:id', async function (req, res) {
  try {
    const isNumber = !isNaN(req.params.id);
    if (!isNumber) {
      return res.status(400).send({ message: "Parâmetro inválido." });
    }
    const number = Number(req.params.id);
    if (number < 0) {
      return res.status(400).send({ message: "Não é um número positivo." });
    }
    const people = await starWars.getPeople(req.params.id)
    res.send(people)

  } catch (error) {
    res.status(500).send({ message: "Ocorreu um erro não esperado." });

  }

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

app.listen(3000, () => {
  console.log("aplicação rodando http://localhost:3000/")
})



