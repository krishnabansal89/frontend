import './App.css';
import Auth from './components/Auth'
import Home from './components/Home'
import Add from './components/Add'
import View from './components/View'
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path='/' element ={<Home/>}></Route>
      <Route exact path='/auth' element ={<Auth/>}></Route>
      <Route  exact path='/add/:id' element ={<Add/>}></Route>
      <Route exact path='/View' element ={<View/>}></Route>
    
    </Routes>
   </HashRouter>
  )
}

export default App;
