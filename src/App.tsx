import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, NavBar, About, Welcome, Give, Footer } from './components/componentindex'
import './App.css'


function App() {

  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/give" element ={<Give />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
