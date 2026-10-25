import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div className="bg-black">
          <Link className="bg-white" to="/home"> Home </Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
