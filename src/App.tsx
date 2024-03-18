import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, NavBar, About, Welcome, Give } from './components/componentindex'
import './App.css'


function App() {

  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/give" element ={<Give />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
