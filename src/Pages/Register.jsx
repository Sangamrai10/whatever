import {useForm} from "react-hook-form"
import {registerUser} from "../api/auth.js"
export default function Register(){
  const {register, handleSubmit, formState:{errors}}=useForm()
  
  // async function submit(data){
  //   await registerUser(data)
  // }
  return <>
    <div>Register</div>
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input/>
      </div>
    </form>
  </>
}