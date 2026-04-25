import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login.jsx'
export default function Header(){
  return <>
  <header>
  <nav>
  <ul className="flex gap-1">
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