import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {DataProvider} from './Context/DataContext';
import './App.css'
import Nav from './Components/Common/Nav';
import Aside from './Components/Common/Aside';
import Home from './Components/Home/Home';
import NotFound from './Components/Common/NotFound';

function App() {

  return (
    
    <Router>
      <DataProvider>
        <Aside/>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </DataProvider>
    </Router>
  )
}

export default App
