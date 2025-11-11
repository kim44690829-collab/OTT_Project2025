import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/OTT_Home/Home'
import useOttData from './api/OTT_Data'
import OTT_Data from './api/OTT_Data'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/OTT_Home/Home'
import Login from './pages/OTT_Login/Login'

function App() {
  
  const netflixData= useOttData();
   console.log(netflixData);
   const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData] = OTT_Data()
  console.log(PopularData)
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Home data={netflixData}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
