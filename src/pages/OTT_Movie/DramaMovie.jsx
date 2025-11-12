import { Link } from 'react-router-dom'
import '../OTT_Movie/DramaMovie.css'
import { useState } from 'react'
export default function DramaMovie({DramaData,DramaData1,DramaData2,DramaData3,DramaData4,DramaData5,}){
    return(
        <div className='movieDrama_container'>
            <div className="sec_top">
                <Link to='/Movie'>
                    <h1>영화</h1>
                </Link>
                <span>▶</span>
                <h1>드라마 장르 영화</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//hpXBJxLD2SEf8l2CspmSeiHrBKX.jpg'}/>
            <div className='movieDrama_info'>
                <h1>프랑켄슈타인</h1>
                <p>
                   과학자 빅터 프랑켄슈타인과 그의 손에서 탄생한 괴물이 펼치는 이야기. <br/>
                   고전이 된 메리 셸리의 소설을 오스카 수상 감독 기예르모 델토로가 영화화했다.<br/>
                </p>
                <button type='button' style={{color:'black'}}>▶ 재생</button>
                <button type='button' className='detailInfo' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>ⓘ 상세 정보</button>
            </div>
            <div className='movieDramas'>
                <h2 className='h2_1'>인생의 한 컷</h2>
                <div className='movieDrama1'>
                    <div className='movieDrama'>
                        <button type='button' className='left'>◁</button>
                        <ul>
                            {DramaData.map((item, index) => (
                                DramaData[index].backdrop_path !== null ?
                                <li key={item.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                                </li> : null
                            ))}
                        </ul>
                        <button type='button' className='right'>▷</button>
                    </div>
                </div>
                <h2 className='h2_2'>마음을 움직이는 이야기</h2>
                <div className='movieDrama movieDrama2'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {DramaData1.map((item, index) => (
                            DramaData1[index].backdrop_path !== null ? 
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>갈등 속 진실</h2>
                <div className='movieDrama movieDrama3'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {DramaData2.map((item,index) => (
                            DramaData2[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>조용한 울림</h2>
                <div className='movieDrama movieDrama4'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {DramaData3.map((item,index) => (
                            DramaData3[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>성장의 기록</h2>
                <div className='movieDrama movieDrama5'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {DramaData4.map((item,index) => (
                            DramaData4[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>현실을 비추는 거울</h2>
                <div className='movieDrama movieDrama6'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {DramaData5.map((item,index) => (
                            DramaData5[index].backdrop_path !== null ?
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