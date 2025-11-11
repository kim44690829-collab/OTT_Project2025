import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function useOttData(){
    //가져오는 데이터 목록
    const [PopularData,setPopularDate] = useState([])//인기순
    const [ActionData,setActionDate] = useState([])//액션 영화
    const [ActionData02,setActionDate02] = useState([])//액션 영화 02
    const [ActionData03,setActionDate03] = useState([])//액션 영화 03
    const [AniData,setAniDate] = useState([])//애니메이션
    const [AniData02,setAniDate02] = useState([])//애니메이션 02
    const [AniData03,setAniDate03] = useState([])//애니메이션 03
    const [DramaData,setDramaData] = useState([])//드라마
    const [ComedyData,setComedyData] = useState([])//코미디
    const [ComedyData02,setComedyData02] = useState([])//코미디 02
    const [ComedyData03,setComedyData03] = useState([])//코미디 03
    const [SFData,setSFData] = useState([])//SF
    const [SFData02,setSFData02] = useState([])//SF 02
    const [SFData03,setSFData03] = useState([])//SF 03
    const [PopularDramaData,setPopularDramaData] = useState([])//인기순 드라마
    // const [data,setData]=useState([]);
    
    //에러 메시지
    const [errMsg,setErrMsg] = useState(null)
    //로딩 중 확인
    const [loading,setLoading] = useState(true)
    //데이더 가지고 오는 페치
    
    //인기순 한국 영화
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
            setPopularDate(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 액션 한국어 영화 
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionDate(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[])

    //장르 액션 한국어 영화 02
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionDate02(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[])

    //장르 액션 한국어 영화 03
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionDate03(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[])

    //장르 애니메이션 한국어 영화
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniDate(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 애니메이션 한국어 영화 02
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniDate02(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 애니메이션 한국어 영화 03
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniDate03(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 드라마 한국어 영화
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=18&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setDramaData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 코미디
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 코미디02
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData02(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 코미디03
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData03(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])

    //장르 SF
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF 02
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData02(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF 03
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData03(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    // 드라마 인기순
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularDramaData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])


    // useEffect(()=>{
    //     console.log('데이터 시작')
    //     fetch('https://api.themoviedb.org/3/movie/popular?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&page=1')
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((data)=>{
    //         console.log('데이터 내용',data)
    //         setData(data.results);
    //     })
    //     .finally(()=>{
    //         console.log('완료')
    //     })
    // },[]);
    
    return [PopularData,ActionData,AniData,DramaData,ComedyData,SFData,ActionData02,ActionData03,PopularDramaData,AniData02,AniData03,
        ComedyData02,ComedyData03,SFData02,SFData03
    ];
}