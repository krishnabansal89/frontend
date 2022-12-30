import './App.css';
import Auth from './components/Auth'
import Home from './components/Home'
import Add from './components/Add'
import View from './components/View'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='frontend-yd5b.onrender.com/' element ={<Home/>}></Route>
      <Route path='frontend-yd5b.onrender.com/auth' element ={<Auth/>}></Route>
      <Route  path='frontend-yd5b.onrender.com/add/:id' element ={<Add/>}></Route>
      <Route path='frontend-yd5b.onrender.com/View' element ={<View/>}></Route>
    
    </Routes>
   </BrowserRouter>
  )
}

export default App;
