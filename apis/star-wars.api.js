const axios = require('axios');
const starWarsConfig = require('../config/star-wars.config');


const getPeople = async (id ) => {
  const response = await axios.get(`people/${id}`, { baseURL: starWarsConfig.starWarsBaseUrl});
  return response.data;
}

const getFilmes = async (id ) => {
  const response = await axios.get(`films/${id}`, { baseURL: starWarsConfig.starWarsBaseUrl});
  return response.data;
}

const getPlanets = async (id ) => {
  const response = await axios.get(`planets/${id}`, { baseURL: starWarsConfig.starWarsBaseUrl});
  return response.data;
}

const getSpecies = async (id ) => {
  const response = await axios.get(`species/${id}`, { baseURL: starWarsConfig.starWarsBaseUrl});
  return response.data;
}

module.exports={
    getPeople,
    getFilmes,
    getPlanets,
    getSpecies
}