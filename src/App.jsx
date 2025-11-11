import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/OTT_Home/Home'
import useOttData from './api/OTT_Data'

function App() {
  
  const netflixData= useOttData();
   console.log(netflixData);
  return (
    <>
      <Home data={netflixData}/>
    </>
  )
}

export default App
