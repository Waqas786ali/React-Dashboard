import { useState } from 'react';
import './App.css'
import Nav from './Components/Common/Nav';
import Aside from './Components/Common/Aside';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/Common/NotFound';

function App() {

  const [check, setCheck] = useState(false)
  return (
    <BrowserRouter>
      <Aside setCheck={setCheck} check={check}/>
      <Nav setCheck={setCheck} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
