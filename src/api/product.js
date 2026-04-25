import api from "./api.js"

async function post_data(data){
  const send= await api.post(`/products`,data,{
    headers:{
      authorization:`Bearer ${authToken}`
    }
    })
}