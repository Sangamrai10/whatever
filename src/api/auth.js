import config from "../config/config.js"
import api from "../api/api.js"

async function registerUser({name, email, password, confirm_password}){
  const response = await api.post(`/api/auth/register`, {
    name,
    email,
    password,
    confirm_password,
  })
  return response.data
}

async function loginUser({email, password}){
  const response = await api.post(`/api/auth/login`, {
    email,
    password,
  })
  return response.data
}

export {
  registerUser,
  loginUser
}