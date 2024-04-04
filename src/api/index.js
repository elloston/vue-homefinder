/**
 * api/index.js
 */

import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_LARAVEL_URL}/api/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});

export default api;
