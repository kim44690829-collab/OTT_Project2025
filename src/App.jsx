
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import useOttData from './api/OTT_Data'
import useOttData from './api/OTT_Data'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/OTT_Home/Home'
import Login from './pages/OTT_Login/Login'
import Series from './pages/OTT_Series/Series'
import Movie from './pages/OTT_Movie/Movie'
import Main from './pages/OTT_Main/Main'
import OTTPeovider from './api/OTT_Context'
// import Header from './commom/OTT_Header/Header'
// import Footer from './commom/OTT_Footer/Footer'

function App() {
  
  // const netflixData= useOttData();
  // console.log(netflixData);
  const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData,ActionData02,ActionData03,PopularDramaData,AniData02,AniData03,ComedyData02,ComedyData03,SFData02,SFData03] = useOttData();
  console.log(PopularData)

  return (
    <>
      <OTTPeovider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
          {/* <Header /> */}
          <Routes>
            <Route path='/Series' element={<Series />} />
            <Route path='/Movie' element={<Movie />} />
            <Route path='/Home' element={<Home data={PopularData} ActionData={ActionData} ActionData02={ActionData02} ActionData03={ActionData03} PopularDramaData={PopularDramaData}
              AniData={AniData} ComedyData={ComedyData} SFData={SFData} AniData02={AniData02} AniData03={AniData03} ComedyData02={ComedyData02} ComedyData03={ComedyData03}
              SFData02={SFData02} SFData03={SFData03}/>} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </OTTPeovider>
    </>
  )
}

export default App