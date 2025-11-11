
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import useOttData from './api/OTT_Data'
import useOttData from './api/OTT_Data'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/OTT_Home/Home'
import Login from './pages/OTT_Login/Login'
import Series from './pages/OTT_Series/Series'
import Movie from './pages/OTT_Movie/Movie'
import Main from './pages/OTT_Main/Main'
import OTTPeovider from './api/OTT_Context'
import Header from './commom/OTT_Header/Header'
import Footer from './commom/OTT_Footer/Footer'

function App() {
  
  // const netflixData= useOttData();
  // console.log(netflixData);
  const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData, ActionData02] = useOttData()
  console.log(PopularData) 
  // const location = useLocation() //커스텀 훅
  // const paths = location.pathname // <Route paht="/" /> 이 경로 가져오기
  // if(location.pathname === '/' || location.pathname === '/Login'){
  //   return null
  // }
  // console.log('경로')
  // console.log(paths);
  return (
    <>
      <OTTPeovider>
        <BrowserRouter>
          {/* {paths !== '/' || paths !== '/Login' ? <Header /> : null} */}
          <Header />
          <Routes>
            <Route path='/' element={<Main PopularData={PopularData} />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Series' element={<Series />} />
            <Route path='/Movie' element={<Movie />} />
            <Route path='/Home' element={<Home data={PopularData} ActionData={ActionData} ActionData02={ActionData02}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </OTTPeovider>
    </>
  )
}

export default App