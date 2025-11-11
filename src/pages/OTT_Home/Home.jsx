
import {useState,useEffect} from "react"
import "./Home.css";

export default function Home({data,ActionData}){

    // title에 마우스오버하면 모두보기 > 보이기
    const [isMouseover,setIsmouseover]=useState(null);

    // < 모두보기 >를 클릭하면 상세정보 모달 보이기
    const [isAll,setIsAll]=useState(false);

    // 각 항목 타이틀 배열
    const titleArr=[
        '액션 & 어드벤처 영화',
        '힐링을 선사하는 드라마',
        '오늘 대한민국의 TOP10 영화',
        '넷플릭스에 새로 올라온 콘텐츠',
        '내가 찜한 리스트'
    ]

    // 해당 항목 클릭한 

    // top 10
    const top10=data.slice(10,20);


    return(
        <div className="all">
            {/* 01. 맨 위 대표 메인 파트 */}
            <div className="mainPart">
                <img src="https://image.tmdb.org/t/p/original/hpXBJxLD2SEf8l2CspmSeiHrBKX.jpg"/>
                <div className="content">
                    <h1>movie name</h1>
                    <div className="rankPart">
                        <span className="rankBox">TOP<br/>10</span>
                        <span className="mainPart_rank">오늘 영화 순위 6위</span>
                    </div>
                    <p className="mainPart_text">4명의 감독이 엮어낸 연작 영화. 살인 청부업자들의 위험한 직업을<br/> 중심으로 살인과 유혹, 혼돈의 세계가 펼쳐진다.</p>
                    <button className="play" type="button">▶ 재생</button>
                    <button className="detail" type="button">상세 정보</button>
                </div>
            </div>
            {/* 02. 오늘 대한민국의 TOP10 시리즈 */}
            <div className="Top10_series">
                <p className="title02">오늘 대한민국의 TOP10 시리즈</p>
                <ul>
                    {top10.map((item,index)=>(
                        <li key={item.id}>
                            <h1>{index+1}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="list">
                {/* 03. 액션 & 어드벤처 영화 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(0)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[0]}</p>
                        {isMouseover === 0? <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {ActionData.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 04. 힐링을 선사하는 드라마 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(1)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[1]}</p>
                        {isMouseover === 1? <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {data.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 05. 오늘 대한민국의 TOP10 영화 */}
                <p className="title05" onMouseOver={()=>setIsmouseover(2)} onMouseLeave={()=>setIsmouseover(null)}>오늘 대한민국의 TOP10 영화</p>
                {isMouseover === 2 ? <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>:null}
                <div className="Top10_movie">
                    <ul></ul>
                </div>
                {/* 06. 넷플릭스에 새로 올라온 콘텐츠*/}
                <p className="title06" onMouseOver={()=>setIsmouseover(3)} onMouseLeave={()=>setIsmouseover(null)}>넷플릭스에 새로 올라온 콘텐츠</p>
                {isMouseover === 3? <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>:null}
                <div className="new_movie">

                </div>
                {/* 07. 내가 찜한 리스트*/}
                <p className="title07" onMouseOver={()=>setIsmouseover(4)} onMouseLeave={()=>setIsmouseover(null)}>내가 찜한 리스트</p>
                {isMouseover ===4? <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>:null}
                <div className="like_list">

                </div>
            </div>

            {/* 모두보기 모달 */}
            {isAll &&<div className="overlay">
                 <div className="modal">
                    <p onClick={()=>setIsAll(false)}>X</p>
                    <h3>제목</h3>
                </div>
            </div>}
        </div>
    )
}