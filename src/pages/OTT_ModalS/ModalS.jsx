import "../OTT_ModalS/ModalS.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"



export default function ModalS(){
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
    console.log(PopularData[0])
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
    return (
        <div className="ModalS">
            <h2 className="TitleLogo">{PopularData[0].title}</h2>
            <ul>
                <li><img src={`https://image.tmdb.org/t/p/original${PopularData[0].backdrop_path}`} alt="" /></li>
                <li className="ModalS_BtnAria">
                    <div className="MS_l_Btns">
                        <button type="button" className="PlayBtn">▶</button>
                        <button type="button" className="LikeBtn">❤</button>
                    </div>
                    <div className="Ms_r_Btns">
                        <button type="button" className="InfoBtn"><i class="fa-solid fa-angle-down"></i></button>
                    </div>
                </li>
                <li>
                    <span>{PopularData[0].adult?<img src="19_112x1120.png" alt="청소년 이용불가" />:<img src="15_40x40.png" alt="15세 이용가" />}</span>
                    <span>리미티드 시리즈</span>
                    <span className="quality">HD</span>
                </li>
                <li className="ModalS_Genre">
                    <ul>
                        {PopularData[0].genre_ids.map((item,index)=>(
                            <li key={index}>{genre(item)}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}