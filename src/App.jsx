import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/OTT_Home/Home'
import Login from './pages/OTT_Login/Login'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
