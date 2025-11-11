import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OTT_Data from './api/OTT_Data'

function App() {
  const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData] = OTT_Data()
  console.log(PopularData)

  return (
    <>
      
    </>
  )
}

export default App
