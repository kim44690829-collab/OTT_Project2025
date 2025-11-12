import { Link } from 'react-router-dom'
import '../OTT_Series/DramaMedical.css'
import { useState } from 'react'
export default function DramaMedical({MedicalDrama,MedicalDrama1,MedicalDrama2,MedicalDrama3,MedicalDrama4,MedicalDrama5}){
    return(
        <div className='DramaMedical_container'>
            <div className="sec_top">
                <Link to='/Series'>
                    <h1>시리즈</h1>
                </Link>
                <span>▶</span>
                <h1>매디컬 드라마</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//r0Q6eeN9L1ORL9QsV0Sg8ZV3vnv.jpg'}/>
            <div className='DramaMedical_info'>
                <h1>하우스</h1>
                <p>
                    2004년 11월 FOX에서 방영을 시작한 미스터리 의학 시리즈. <br/>
                    프린스턴 플레인즈보로 대학병원의 진단의학과 과장인 그레고리 하우스는 환자들을 성심성의껏 돌보는 데는 영 꽝인 의사. <br/>
                    사사건건 병원 원장인 리사 커디와 부딪히는 그는 못된 매너와 그 매너를 더욱 돋보이게 하는 외모로 유명하지만, <br/>
                    또한 창조적인 생각과 결점없는 의학적 본능을 유감없이 발휘하는 최고의 의사이기도 하다. <br/>
                    천재적인 분석능력을 갖춘 전염병 전문의로서 그가 이제 인명을 살리기 위한 흥미롭고 미스터리한 의학의 퍼즐을 풀어간다.<br/>
                </p>
                <button type='button' style={{color:'black'}}>▶ 재생</button>
                <button type='button' className='detailInfo' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>ⓘ 상세 정보</button>
            </div>
            <div className='DramaMedicals'>
                <h2 className='h2_1'>생명선 위에서</h2>
                <div className='DramaMedical1'>
                    <div className='DramaMedical'>
                        <button type='button' className='left'>◁</button>
                        <ul>
                            {MedicalDrama.map((item, index) => (
                                MedicalDrama[index].backdrop_path !== null ?
                                <li key={item.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                                </li> : null
                            ))}
                        </ul>
                        <button type='button' className='right'>▷</button>
                    </div>
                </div>
                <h2 className='h2_2'>응급실 속 이야기</h2>
                <div className='DramaMedical DramaMedical2'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {MedicalDrama1.map((item, index) => (
                            MedicalDrama1[index].backdrop_path !== null ? 
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>마음과 메스 사이</h2>
                <div className='DramaMedical DramaMedical3'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {MedicalDrama2.map((item,index) => (
                            MedicalDrama2[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>의료 현장의 하루</h2>
                <div className='DramaMedical DramaMedical4'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {MedicalDrama3.map((item,index) => (
                            MedicalDrama3[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>치유와 갈등의 기록</h2>
                <div className='DramaMedical DramaMedical5'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {MedicalDrama4.map((item,index) => (
                            MedicalDrama4[index].backdrop_path !== null ?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>회복을 향한 도전</h2>
                <div className='DramaMedical DramaMedical6'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {MedicalDrama5.map((item,index) => (
                            MedicalDrama5[index].backdrop_path !== null ?
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