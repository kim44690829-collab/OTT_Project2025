import { Link } from 'react-router-dom'
import '../OTT_Movie/MoviePopular.css'
import { useState } from 'react'
export default function MoviePopular({PopularData, PopularData1, PopularData2, PopularData3, PopularData4, PopularData5}){
// export default function movieSub1Sub1({PopularData}){
    console.log('이미지 null')
    console.log(PopularData)
    for(let i = 0; i < PopularData.length; i++){
        
        console.log(PopularData[i].backdrop_path === null ? 'Ok':'noOK')
    }
    return(
        <div className='movieSub1_container'>
            <div className="sec_top">
                <Link to='/Movie'>
                    <h1 style={{color:'black'}}>영화</h1>
                </Link>
                <span style={{color:'black'}}>▶</span>
                <h1 style={{color:'black'}}>인기있는 한국 영화</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//yOFqBpJ0PEkBdQqalDEaeOiaKbz.jpg'}/>
            <div className='movieSub1_info'>
                <h1 style={{color:'black'}}>사마귀</h1>
                <p style={{color:'black'}}>
                    "하룻밤 사이 몰락한 청부살인 업계의 거물들.  <br/>
                    그들이 세운 질서가 무너지고, 어둠의 세계가 흔들린다. <br/>
                    혼돈 속에서 기회를 노리는 실력자 사마귀. <br/>
                    그의 손끝에서 새로운 킬러들의 시대가 열린다."<br/>
                </p>
                <button type='button' style={{color:'black'}}>▶ 재생</button>
                <button type='button' className='detailInfo' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>ⓘ 상세 정보</button>
            </div>
            <div className='movieSub1s'>
                <h2 className='h2_1'>인기있는 한국 영화</h2>
                <div className='movieSub11'>
                    <div className='movieSub1'>
                        <button type='button' className='left'>◁</button>
                        <ul>
                            {PopularData.map((item, index) => (
                                PopularData[index].backdrop_path !== null ?
                                <li key={item.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                                </li> : null
                            ))}
                        </ul>
                        <button type='button' className='right'>▷</button>
                    </div>
                </div>
                <h2 className='h2_2'>액션 영화</h2>
                <div className='movieSub1 movieSub12'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {PopularData1.map((item, index) => (
                            PopularData1[index].backdrop_path !== null ? 
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>애니메이션 영화</h2>
                <div className='movieSub1 movieSub13'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {PopularData2.map((item,index) => (
                            PopularData2[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>드라마 장르 영화</h2>
                <div className='movieSub1 movieSub14'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {PopularData3.map((item,index) => (
                            PopularData3[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>코미디 영화</h2>
                <div className='movieSub1 movieSub15'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {PopularData4.map((item,index) => (
                            PopularData4[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>SF 영화</h2>
                <div className='movieSub1 movieSub16'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {PopularData5.map((item,index) => (
                            PopularData5[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
            </div>
        </div>
    )
}