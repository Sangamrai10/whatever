import config from "./config/config.js"
import axios from "axios"

const api = axios.create({
  baseUrl:config.apiUrl
})

export default api; 