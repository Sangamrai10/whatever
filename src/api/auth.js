import config from "../config/config.js"

async function register(name, email, password, confirm_password){
  const response =await api.post(`/api/auth/register`,
  name,
  email,
  password,
  confirm_password,
  )
  return response.data
}

async function login(email,password){
  const response = await api.post(`/api/auth/login`,
  email, 
  password,
  )
  return response.data
}

export {
  register,
  login
}