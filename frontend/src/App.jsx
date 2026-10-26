import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col items-center mb-20">
      <BrowserRouter>
      <div className='w-3/4 flex flex-col items-center gap-20'>
          <div className="text-white min-h-screen bg-brand w-screen flex flex-col items-center justify-center" to="/home"> Hero </div>

          <div className="flex flex-col gap-5 bg-green-100 items-center w-full">
            <h1 className="text-4xl tracking-tight font-bold">Purpose</h1>
            <div className="text-2xl"> **Greek Ledger** is a full-stack web app designed to simplify chapter financial operations for the brothers of **Lambda Phi Epsilon (Nu Chapter) at SUNY Buffalo**.
  With our experience, reimbursement requests and receipt photos frequently get lost in long group chats. Greek Ledger replaces those scattered messages with a centralized, online system for submitting, reviewing, and tracking expenses in real time.</div>
          </div>

          <div className="flex flex-col gap-5 bg-green-100 items-center w-full">
            <h1 className="text-4xl tracking-tight font-bold">Functions</h1>
            <div className="flex flex-row gap-10 justify-center">
              <div className="flex flex-col gap-2 bg-green-400 h-[300px] p-4 w-1/6"> 
                <h3 className="text-2xl">Role-Based Access</h3>
              </div>
              <div className="flex flex-col gap-2 bg-green-400 h-[300px] p-4 w-1/6"> 
                <h3 className="text-2xl">Easy Expense Submissions</h3>
              </div>
              <div className="flex flex-col gap-2 bg-green-400 h-[300px] p-4 w-1/6"> 
                <h3 className="text-2xl">Treasurer Approval Queue</h3>
              </div> 
              <div className="flex flex-col gap-2 bg-green-400 h-[300px] p-4 w-1/6">
                <h3 className="text-2xl">Automatic Budget Tracking</h3>
              </div>
              <div className="flex flex-col gap-2 bg-green-400 h-[300px] p-4 w-1/6"> 
                <h3 className="text-2xl">CSV Export</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-green-100 items-center w-full">
            <h1 className="text-4xl tracking-tight font-bold">What Tech Stack I'll Be Using</h1>
            <div className="flex flex-row gap-10">
              <h3 className="text-2xl">Frontend</h3>
              <h3 className="text-2xl">Backend</h3>
              <h3 className="text-2xl">Database</h3>
              <h3 className="text-2xl">Image Storage</h3>
            </div>
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
