import { useState } from 'react';
import './App.css'
import Nav from './Components/Nav';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Main from './Components/Main';

function App() {

  const [check, setCheck] = useState(false)
  return (
    <>
      <Aside setCheck={setCheck} check={check}/>
      <Nav setCheck={setCheck} />
      <Header />
      <Main />
    </>
  )
}

export default App
