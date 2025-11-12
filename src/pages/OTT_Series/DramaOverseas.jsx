import { Link } from 'react-router-dom'
import '../OTT_Series/DramaOverseas.css'
import { useState } from 'react'
export default function DramaOverseas({OverseasDrama,OverseasDrama1,OverseasDrama2,OverseasDrama3,OverseasDrama4,OverseasDrama5}){
    return(
        <div className='DramaOverseas_container'>
            <div className="sec_top">
                <Link to='/Series'>
                    <h1>시리즈</h1>
                </Link>
                <span>▶</span>
                <h1>해외 시리즈</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//foGkPxpw9h8zln81j63mix5B7m8.jpg'}/>
            <div className='DramaOverseas_info'>
                <h1>위쳐</h1>
                <p>세계적인 판타지 대작이 넷플릭스 시리즈로 다시 태어난다. <br/>
                    어둠과 위험의 세계, 진실은 어디에 있을까. <br/>
                    운명으로 묶인 그들. 위쳐와 마법사, 홀로 남은 공주의 싸움이 시작된다.<br/>
                </p>
                <button type='button' style={{color:'black'}}>▶ 재생</button>
                <button type='button' className='detailInfo' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>ⓘ 상세 정보</button>
            </div>
            <div className='DramaOverseass'>
                <h2 className='h2_1'>글로벌 화제작 모음</h2>
                <div className='DramaOverseas1'>
                    <div className='DramaOverseas'>
                        <button type='button' className='left'>◁</button>
                        <ul>
                            {OverseasDrama.map((item, index) => (
                                OverseasDrama[index].backdrop_path !== null ?
                                <li key={item.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                                </li> : null
                            ))}
                        </ul>
                        <button type='button' className='right'>▷</button>
                    </div>
                </div>
                <h2 className='h2_2'>세계로 펼쳐지는 이야기</h2>
                <div className='DramaOverseas DramaOverseas2'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {OverseasDrama1.map((item, index) => (
                            OverseasDrama1[index].backdrop_path !== null ? 
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>눈길을 끄는 해외 스토리</h2>
                <div className='DramaOverseas DramaOverseas3'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {OverseasDrama2.map((item,index) => (
                            OverseasDrama2[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>경계를 넘는 드라마</h2>
                <div className='DramaOverseas DramaOverseas4'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {OverseasDrama3.map((item,index) => (
                            OverseasDrama3[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>다양한 문화 속 드라마</h2>
                <div className='DramaOverseas DramaOverseas5'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {OverseasDrama4.map((item,index) => (
                            OverseasDrama4[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>지금 바로 보고 싶은 해외작</h2>
                <div className='DramaOverseas DramaOverseas6'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {OverseasDrama5.map((item,index) => (
                            OverseasDrama5[index].backdrop_path !== null ?
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