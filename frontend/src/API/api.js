// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // L'adresse de votre serveur backend

export const fetchData = () => {
  return axios.get(`${API_URL}/data`);
};
