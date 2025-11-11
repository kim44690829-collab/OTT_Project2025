import { useState,useEffect } from "react";
<<<<<<< HEAD

export default function useOttData(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        console.log('데이터 시작')
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setData(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    return data;
=======
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function OTT_Data(){
    //가져오는 데이터 목록
    const [PopularData,setPopularDate] = useState([])//인기순
    const [ActionData,setActionDate] = useState([])//액션 영화
    const [AniData,setAniDate] = useState([])//애니메이션
    const [DramaData,setDramaData] = useState([])//드라마
    const [ComedyData,setComedyData] = useState([])//코미디
    const [SFData,setSFData] = useState([])//SF
    
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
            setActionDate(data.resultes)
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
            setAniDate(data.resultes)
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
            setDramaData(data.resultes)
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
            setComedyData(data.resultes)
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
            setSFData(data.resultes)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    

    
    
    return [PopularData,ActionData,AniData,DramaData,ComedyData,SFData];
>>>>>>> 8aa6924f9ae1ca0bf291133214fb67bc6fefd9fe
}