import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useOttData from './api/OTT_Data'
import OTT_Data from './api/OTT_Data'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/OTT_Home/Home'
import Login from './pages/OTT_Login/Login'
import Series from './pages/OTT_Series/Series'
import Movie from './pages/OTT_Movie/Movie'
import Main from './pages/OTT_Main/Main'
import OTTPeovider from './api/OTT_Context'

function App() {
  
  // const netflixData= useOttData();
  //  console.log(netflixData);
   const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData] = OTT_Data()
  console.log(PopularData)
  return (
    <>

        <OTTPeovider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Series' element={<Series />} />
            <Route path='/Movie' element={<Movie />} />
            <Route path='/Home' element={<Home />} />
          </Routes>
          </BrowserRouter>
      </OTTPeovider>
    </>
  )
}

export default App