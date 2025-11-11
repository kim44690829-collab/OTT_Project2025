import "../OTT_ModalB/ModalB.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function ModalB(){
    const [PopularData,setPopularData] = useState(null)
    
        useEffect(()=>{    
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&page=1`)
            .then((res)=>{
                if(!res.ok){
                    throw new Error(`HTTP Error! status, ${res.status}`)
                }
                return res.json()
            })
            .then((data)=>{
                console.log(data,'받아온 데이터')
                setPopularData(data.results)
            })
            .catch((err)=>{
                console.log("X 에러 발생",err)
                setErrMsg(err.message)
            })
            .finally(()=>{
                setLoading(false)
            })
            
            
        },[])
        console.log(PopularData[0].backdrop_path)
        const genre =(item)=>{
        if(item===14){
            return '판타지'
        }else if(item === 27){
            return '공포'
        }else if(item === 18){
            return '드라마'
        }
        else if(item === 28){
            return '액션'
        }
        else if(item === 12){
            return '모험'
        }
        else if(item === 16){
            return '애니메이션'
        }
        else if(item === 35){
            return '코미디'
        }
        else if(item === 80){
            return '범죄'
        }
        else if(item === 99){
            return '다큐멘터리'
        }
        else if(item === 10749){
            return '로맨스'
        }
        else if(item === 878){
            return 'SF'
        }
        else if(item === 53){
            return '스릴러'
        }
        else if(item === 10750){
            return '전쟁'
        }
        else if(item === 37){
            return '서부극'
        }
    }
    return(
        
        <div className="ModalB_container">
            <div className="ModalB_box">
                <img src={`https://image.tmdb.org/t/p/original${PopularData[0].backdrop_path}`} alt="" />
            </div>
            <div className="ModalB_box">
                <button type="button" className="close_btn"><i class="fa-solid fa-xmark"></i></button>
                <ul>
                    <li><h1>{PopularData[0].title}</h1></li>
                    <li className="MB_btn_group">
                        <div className="left_group">
                            <button type="button" className="play_btn">▶ 재생</button>
                            <button type="button" className="like_btn">❤</button>
                        </div>
                        <div className="right_group">
                            <button type="button"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </li>
                    <li className="info_group">
                        <div className="L_info">
                            <p>리미티드 시리즈 <span>HD</span></p>
                            <p><img src="15_40x40.png" alt="시청 연령" /></p>
                            <p>{PopularData[0].overview}</p>
                        </div>
                        <div className="R_info">
                            <p><span>장르 : {PopularData[0].genre_ids.map((item,index)=>(
                                <span key={index}>{genre(item)}  </span>
                            ))}</span> </p>
                            <p><span>개봉일자 :</span>{PopularData[0].release_date}</p>                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}