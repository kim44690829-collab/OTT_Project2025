import '../OTT_Series/Series.css'
export default function Series({data}){
    return(
        <div className='series_container'>
            <div className="sec_top">
                <h1>시리즈</h1>
                <button type="button">장르 ▼</button>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//2fOKVDoc2O3eZmBZesWPuE5kgPN.jpg'}/>
            <div className='movie_info'>
                <h1>그것: 웰컴 투 데리</h1>
                <p>"그곳은 항상 사라짐으로 시작된다"<br/>
                    1962년, 한 가족이 메인 주의 작은 마을 데리에 이사 오면서 <br/>
                    연쇄적인 실종과 설명할 수 없는 불길한 징조가 퍼져나간다.<br/> 
                    비밀을 감춘 하수도와 오래된 서커스의 그림자, 어른들은 외면하고 아이들은 속삭인다. <br/><br/>
                    “<strong>무언가</strong>가 깨어났다고” <br/><br/>
                    점점 커지는 공포 속에서 마을의 과거와 연결된 금기된 진실이 모습을 드러내기 시작하고, <br/>
                    누구도 안전하지 않다는 사실이 선명해진다. <br/>
                    그 미소의 주인이 다시 환영을 건네올 때, <br/>
                    이들은 과연 무엇을 마주하게 될 것인가",
                </p>
                <button type='button'>▶ 재생</button>
                <button type='button' className='detailInfo'>ⓘ 상세 정보</button>
            </div>
            <div className='movies'>
                <h2 className='h2_1'>로맨틱한 한국 시리즈</h2>
                <div className='series1'>
                    <div className='series'>
                        <button type='button' className='left'>◁</button>
                        <ul>
                            {data.map((item) => (
                                <li key={item.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                                </li>
                            ))}
                        </ul>
                        <button type='button' className='right'>▷</button>
                    </div>
                </div>
                <h2 className='h2_2'>어워드 수상 시리즈</h2>
                <div className='series series2'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>범죄 시리즈</h2>
                <div className='series series3'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>액션 본능이 폭발한다</h2>
                <div className='series series4'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>감정을 파고드는 시리즈</h2>
                <div className='series series5'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>삼각관계를 다룬 시리즈</h2>
                <div className='series series6'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
                <h2 className='h2_2'>밥친구</h2>
                <div className='series series7'>
                    <button type='button' className='left'>◁</button>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right'>▷</button>
                </div>
            </div>
        </div>
    )
}