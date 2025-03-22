import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Home from './pages/home'
import Game from './pages/game'
import Resources from './pages/resources'

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Navbar/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<Game/>}/>
            <Route path="/resources" element={<Resources/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
