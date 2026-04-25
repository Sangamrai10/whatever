import {Route, Routes, Link} from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Login from '../Pages/Login.jsx'
export default function Header(){
  return <>
  <header>
  <nav>
  <ul>
  <Link to="/">home</Link>
  <Link to="/login">Login</Link>
  </ul>
  </nav>
  </header>
  
  
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  </Routes>
  </>
}