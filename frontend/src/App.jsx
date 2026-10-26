import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col items-center">
      <BrowserRouter>
      <div className='w-3/4 flex flex-col items-center gap-10'>
          <div className="text-black" to="/home"> Hero </div>

          <div>Purpose
            <div> **Greek Ledger** is a full-stack web app designed to simplify chapter financial operations for the brothers of **Lambda Phi Epsilon (Nu Chapter) at SUNY Buffalo**.

With our experience, reimbursement requests and receipt photos frequently get lost in long group chats. Greek Ledger replaces those scattered messages with a centralized, online system for submitting, reviewing, and tracking expenses in real time.</div>
          </div>

          <h1>Functions
            <div>Role-Based Access</div>
            <div>Easy Expense Submissions</div>
            <div>Treasurer Approval Queue</div>
            <div>Automatic Budget Tracking</div>
            <div>CSV Export</div>
          </h1>

          <div>What Tech Stack I'll Be Using
            <div>Frontend</div>
            <div>Backend</div>
            <div>Database</div>
            <div>Image Storage</div>
          </div>

      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
    </div>
  )
}

export default App
