import {useForm} from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import {login} from "../api/auth.js"
import { Link, Route, Routes } from 'react-router-dom';

export default function Login(){
  const {register, handleSubmit, formState:{errors}}=useForm()
  
  async function submit(data){
    await login(data)
    console.log(data)
  }
  
  return <>
  <div className="container mx-auto bg-gray pb-4 pt-4">
  <form onSubmit={handleSubmit(submit)}>
  <section className={"bg-black text-white p-4 width-full "}>Login form</section>
  <div className="p-4 flex flex-col">
  <input type="text" id="email" placeholder="Enter Email" className="outline-0 border-b-2 mt-4 p-2" {...register("name",{required:true})}/>
  {errors.name && <span>This field is required</span>}
  <input type="password" id="password" placeholder="password" className="outline-0 border-b-2 mt-4 p-2"
  {...register("password",{required:true})}
  />
  {errors.password && <span>This field is required</span>}
  
  <button type="submit" className="mt-4 p-2 bg-gray-300 rounded active:bg-gray-500 ">Login</button>
  </div>
  <div>
    <Link to="/register">register</Link>
  </div>
  <ToastContainer/>
  </form>
  </div>
  
  <Routes>
    <Route path={"/register"} elememt={<Register/>}/>
  </Routes>
  </>
}