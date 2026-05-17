import {useForm} from "react-hook-form"
import {register} from "../api/auth.js"
export default function Register(){
  const {register, handleSubmit, formState:{errors}}=useForm()
  
  async function submit(data){
    await register(data)
  }
  return <>
    <div>Register</div>
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input/>
      </div>
    </form>
  </>
}