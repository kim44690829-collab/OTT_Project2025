import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import OTT_Data from './api/OTT_Data'
=======
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/OTT_Home/Home'
import Login from './pages/OTT_Login/Login'
>>>>>>> 4dea487070699c6f9d663de63bc184f1853910d9

function App() {
  const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData] = OTT_Data()
  console.log(PopularData)

  return (
    <>
<<<<<<< HEAD
      
=======
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 4dea487070699c6f9d663de63bc184f1853910d9
    </>
  )
}

export default App
