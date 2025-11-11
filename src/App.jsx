
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
import MoviePopular from './pages/OTT_Movie/MoviePopular'
import MovieAction from './pages/OTT_Movie/MovieAction'
import AniMovie from './pages/OTT_Movie/AniMovie'

function App() {
  
  // const netflixData= useOttData();
  //  console.log(netflixData);
<<<<<<< HEAD
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
=======
   const [PopularData,ActionData,AniData,DramaData,ComedyData,SFData] = useOttData()
>>>>>>> 4762986284a75992385f39e226d4bc867216636b
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
            {/* <Route path='/Home' element={<Home data={PopularData} ActionData={ActionData} ActionData02={ActionData02}/>} /> */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </OTTPeovider>
    </>
  )
}

// export default App
//         <OTTPeovider>
//           <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<Main />} />
//             <Route path='/Login' element={<Login />} />
//             <Route path='/Series' 
//             element={
//             <Series 
//             PopularDrama = {PopularDrama} 
//             KoreaDrama = {KoreaDrama}
//             CrimeDrama = {CrimeDrama}
//             AniDrama = {AniDrama}
//             />} />
//             <Route path='/Movie' 
//             element={
//             <Movie 
//             PopularData={PopularData} 
//             ActionData = {ActionData} 
//             AniData = {AniData}
//             DramaData = {DramaData}
//             ComedyData = {ComedyData}
//             SFData = {SFData}
//             />} />
//             <Route path='/Home' element={<Home />} />
//           </Routes>
//           </BrowserRouter>
//       </OTTPeovider>

        {/* <OTTPeovider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Series' element={<Series />} />
            <Route path='/Movie' element={<Movie />} />
            <Route path='/Home' element={<Home data={PopularData} ActionData={ActionData}/>} />
          </Routes>
          </BrowserRouter>
      </OTTPeovider> */}
    // </>
  // )
// }

export default App
