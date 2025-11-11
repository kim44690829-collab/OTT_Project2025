import {useState,useEffect} from "react"
import "./Home.css";

export default function Home({data}){

    // title에 마우스오버하면 모두보기 > 보이기
    const [isMouseover,setIsmouseover]=useState(false);

    // < 모두보기 >를 클릭하면 상세정보 모달 보이기
    const [isAll,setIsAll]=useState(false);


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
                    {data.map((item,index)=>(
                        <li key={item.id}>
                            <h1>{index+1}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="list">
                {/* 03. 액션 & 어드벤처 영화 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(!false)} onMouseLeave={()=>setIsmouseover(false)}>
                    <p className="title03">액션 & 어드벤처 영화</p>
                    {isMouseover && <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>}
                    <ul className="action_movie">
                        {data.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 04. 힐링을 선사하는 드라마 */}
                <p className="title04" onMouseOver={()=>setIsmouseover(!false)} onMouseLeave={()=>setIsmouseover(false)}>힐링을 선사하는 드라마</p>
                {isMouseover && <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>}
                <div className="healing_movie">

                </div>
                {/* 05. 오늘 대한민국의 TOP10 영화 */}
                <p className="title05" onMouseOver={()=>setIsmouseover(!false)} onMouseLeave={()=>setIsmouseover(false)}>오늘 대한민국의 TOP10 영화</p>
                {isMouseover && <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>}
                <div className="Top10_movie">
                    <ul></ul>
                </div>
                {/* 06. 넷플릭스에 새로 올라온 콘텐츠*/}
                <p className="title06" onMouseOver={()=>setIsmouseover(!false)} onMouseLeave={()=>setIsmouseover(false)}>넷플릭스에 새로 올라온 콘텐츠</p>
                {isMouseover && <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>}
                <div className="new_movie">

                </div>
                {/* 07. 내가 찜한 리스트*/}
                <p className="title07" onMouseOver={()=>setIsmouseover(!false)} onMouseLeave={()=>setIsmouseover(false)}>내가 찜한 리스트</p>
                {isMouseover && <span className="seeAll" onClick={()=>setIsAll(!false)}>모두보기</span>}
                <div className="like_list">

                </div>
            </div>

            {/* 모두보기 모달 */}
            {isAll && <div className="modal">
                <p onClick={()=>setIsAll(false)}>X</p>
                <h3>제목</h3>

            </div>}
        </div>
    )
}