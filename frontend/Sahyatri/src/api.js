// src/api.js
import axios from "axios";

// Base URL comes from .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
