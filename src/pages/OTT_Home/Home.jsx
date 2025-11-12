
import {useState,useEffect} from "react"
import "./Home.css";

export default function Home({
    data,
    ActionData,
    ActionData02,
    ActionData03,
    PopularDramaData,
    AniData,
    DramaData,
    ComedyData,
    SFData,
    AniData02,
    AniData03,
    ComedyData02,
    ComedyData03,
    SFData02,
    SFData03,
    PopularDrama1,
    PopularDrama2,
    KoreaDrama,
    KoreaDrama1,
    KoreaDrama2,
}){

    // title에 마우스오버하면 모두보기 > 보이기
    const [isMouseover,setIsmouseover]=useState(null);

    // < 모두보기 >를 클릭하면 상세정보 모달 보이기
    const [isAll,setIsAll]=useState(false);

    // 각 항목 타이틀 배열
    const titleArr=[
        {id:0, title:'액션 & 어드벤처 영화', dataName: ActionData, dataAll: ActionData02, dataAll02: ActionData03},
        {id:1, title:'한국 드라마',dataName: KoreaDrama, dataAll: KoreaDrama1, dataAll02: KoreaDrama2 },
        {id:2, title:'오늘 대한민국의 TOP10 드라마',dataName: PopularDramaData, dataAll: PopularDrama1, dataAll02: PopularDrama2 },
        {id:3, title:'코미디 영화',dataName:ComedyData, dataAll: ComedyData02, dataAll02: ComedyData03},
        {id:4, title:'내가 찜한 리스트',dataName:'ActionData'},
        {id:5, title:'애니메이션 영화',dataName: AniData, dataAll: AniData02, dataAll02: AniData03},
        {id:6, title:'SF 영화',dataName: SFData, dataAll: SFData02, dataAll02: SFData03},
    ]
    // console.log('드라마 확인',KoreaDrama);

    // 해당 항목 클릭한 
    const [clickIndex,setClickIndex]=useState(null);

    // top 10
    const top10=PopularDramaData.slice(0,10);

    // 모달 -> 다음 페이지 더보기 버튼 클릭 시 항목 더보기 toggle
    const [toggle,setToggle]=useState(false);

   /*  let pictureNull=titleArr[clickIndex].dataAll; */

   // 메인 화면 자동 변경

   const [main,setMain]=useState(0);
   useEffect(()=>{
    let play=setInterval(()=>{
        if(main >= 9){
            setMain(0);
        }else{
            setMain(main+1);
        }
        
        // setMain(top10[main+1].backdrop_path)
    },10000);
 
    return(()=>{clearInterval(play)});
   },[main]);

  console.log(main)
//   for(let i=0; i<top10.length; i++){
//        console.log(top10[i].title)
//   }
 
    return(
    <div className="xall">
        {isAll && <p onClick={()=>{setIsAll(false);setToggle(false)}}>✕</p>}
        <div className="all">
            {/* 01. 맨 위 대표 메인 파트 */}
            <div className="mainPart">
                <img src={`https://image.tmdb.org/t/p/original/${top10[main].backdrop_path}`}/>
                <div className="mainOverlay"></div>
                <div className="content">
                    <h1>{top10[main].name}</h1>
                    <div className="rankPart">
                        <span className="rankBox">TOP<br/>10</span>
                        <span className="mainPart_rank">오늘 영화 순위 {main+1}위</span>
                    </div>
                    <p className="mainPart_text">{top10[main].overview}</p>
                    <button className="play" type="button">▶ 재생</button>
                    <button className="detail" type="button">상세 정보</button>
                </div>
                <div className="gra"></div>
            </div>
            {/* 02. 오늘 대한민국의 TOP10 영화 */}
            <div className="Top10_series">
                <p className="title02">오늘 대한민국의 TOP10 영화</p>
                <ul>
                    {top10.map((item,index)=>(
                        top10.backdrop_path !== null?
                        <li key={item.id}>
                            <h1 className="num1">{index+1}</h1>
                            <h1 className="num2">{index+1}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
                        </li> : null
                    ))}
                </ul>
            </div>
            <div className="list">
                {/* 03. 액션 & 어드벤처 영화 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(0)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[0].title}</p>
                        {isMouseover === 0? <span className="seeAll" onClick={()=>{setIsAll(!false);setClickIndex(0)}}> 모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {titleArr[0].dataName.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 04. 한국 드라마 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(1)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[1].title}</p>
                        {isMouseover === 1? <span className="seeAll" onClick={()=>{setIsAll(!false);setClickIndex(1)}}>모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {titleArr[1].dataName.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 05. 오늘 대한민국의 TOP10 드라마 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(2)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[2].title}</p>
                        {isMouseover === 2? <span className="seeAll" onClick={()=>{setIsAll(!false);setClickIndex(2)}}>모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {titleArr[2].dataName.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 06. 코미디 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(3)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[3].title}</p>
                        {isMouseover === 3? <span className="seeAll" onClick={()=>{setIsAll(!false);setClickIndex(3)}}>모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {titleArr[3].dataName.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* 07. 내가 찜한 리스트*/}
                <p className="title07" onMouseOver={()=>setIsmouseover(4)} onMouseLeave={()=>setIsmouseover(null)}>내가 찜한 리스트</p>
                {isMouseover ===4? <span className="seeAll" onClick={()=>{setIsAll(!false);setClickIndex(4)}}>모두보기</span>:null}
                <div className="like_list">

                </div>
                {/* 08. 애니메이션 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(5)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[5].title}</p>
                        {isMouseover === 5? <span className="seeAll" onClick={()=>{setIsAll(!false);setClickIndex(5)}}>모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {titleArr[5].dataName.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 09. SF 영화 */}
                <div className="list03" onMouseOver={()=>setIsmouseover(6)} onMouseLeave={()=>setIsmouseover(null)}>
                    <div className="textPart">
                        <p className="title03">{titleArr[6].title}</p>
                        {isMouseover === 6? <span className="seeAll" onClick={()=>{setIsAll(!false);setClickIndex(6)}}>모두보기</span>:null}
                    </div>
                    <ul className="action_movie">
                        {titleArr[6].dataName.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 모두보기 모달 */}
            
            {isAll &&<div className="overlay" onClick={()=>setIsAll(false)}>
                 <div className="modal">
                    {/* <p onClick={()=>{setIsAll(false);setToggle(false)}}>✕</p> */}
                    <h3>{titleArr[clickIndex].title}</h3>
                    <span>회원님을 위한 오늘의 콘텐츠</span>
                    {/* 01 페이지 */}
                    <ul className="modalList">
                        {titleArr[clickIndex].dataAll.map((item,index)=>(
                            titleArr[clickIndex].dataAll[index].backdrop_path !== null?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>:null
                        ))}
                    </ul>

                    {/* 다음 페이지 더보기 버튼 */}
                    <div className="line"><strong onClick={()=>setToggle(!toggle)}>{toggle ? '▲':'▼'}</strong></div>
                    

                    {/* 02 페이지 */}
                    {toggle && <ul className="modalList">
                        {titleArr[clickIndex].dataAll02.map((item,index)=>(
                            titleArr[clickIndex].dataAll02[index].backdrop_path !== null?
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            </li>:null
                        ))}
                    </ul>}

                </div>
            </div>}
        </div>
    </div>
    )
}