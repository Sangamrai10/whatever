import config from "../config/config.js"
import axios from "axios"

const api = axios.create({
  baseURL:config.apiUrl
})

export default api; 