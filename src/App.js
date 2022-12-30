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
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/auth' element ={<Auth/>}></Route>
      <Route  path='/add/:id' element ={<Add/>}></Route>
      <Route path='/View' element ={<View/>}></Route>
    
    </Routes>
   </BrowserRouter>
  )
}

export default App;
