
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
  // const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData,ActionData02,ActionData03,PopularDramaData,AniData02,AniData03,ComedyData02,ComedyData03,SFData02,SFData03] = useOttData();

  //  console.log(netflixData);
  const [
    PopularData,PopularData1,PopularData2,PopularData3, PopularData4, PopularData5,
    ActionData,ActionData1,ActionData2,ActionData3,ActionData4,ActionData5,
    AniData,AniData1,AniData2,AniData3,AniData4,AniData5,
    DramaData,
    ComedyData,
    SFData,
    PopularDrama,
    KoreaDrama,
    OverseasDrama,
    CrimeDrama,
    AniDrama,
    MedicalDrama
  ] = useOttData()
  // console.log(AniData2, '2')
  // const a = OTT_Data()

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
          {/* <Header /> */}
          <Routes>
            <Route path='/Series' 
            element={
            <Series 
            PopularDrama = {PopularDrama} 
            KoreaDrama = {KoreaDrama}
            OverseasDrama = {OverseasDrama}
            CrimeDrama = {CrimeDrama}
            AniDrama = {AniDrama}
            MedicalDrama = {MedicalDrama}
            />} />
            <Route path='/Movie' 
            element={
            <Movie 
            PopularData={PopularData} 
            ActionData = {ActionData} 
            AniData = {AniData}
            DramaData = {DramaData}
            ComedyData = {ComedyData}
            SFData = {SFData}
            />} />
            <Route path='/PopularMovie' 
            element={
            <MoviePopular 
            PopularData = {PopularData}
            PopularData1 = {PopularData1} 
            PopularData2 = {PopularData2}
            PopularData3 = {PopularData3}
            PopularData4 = {PopularData4}
            PopularData5 = {PopularData5}
            />} />
            <Route path='/ActionMovie' 
            element={
            <MovieAction
            ActionData = {ActionData}
            ActionData1 = {ActionData1} 
            ActionData2 = {ActionData2}
            ActionData3 = {ActionData3}
            ActionData4 = {ActionData4}
            ActionData5 = {ActionData5}
            />} />
            <Route path='/AniMovie' 
            element={
            <AniMovie
            AniData = {AniData}
            AniData1 = {AniData1}
            AniData2 = {AniData2}
            AniData3 = {AniData3}
            AniData4 = {AniData4}
            AniData5 = {AniData5}
            />} />
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