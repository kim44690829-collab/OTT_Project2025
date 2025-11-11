import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function useOttData(){
    //가져오는 데이터 목록
    const [PopularData,setPopularData] = useState([])//인기순1
    const [PopularData1,setPopularData1] = useState([])//인기순2
    const [PopularData2,setPopularData2] = useState([])//인기순3
    const [PopularData3,setPopularData3] = useState([])//인기순4
    const [PopularData4,setPopularData4] = useState([])//인기순5
    const [PopularData5,setPopularData5] = useState([])//인기순6
    const [ActionData,setActionData] = useState([])//액션 영화1
    const [ActionData1,setActionData1] = useState([])//액션 영화2
    const [ActionData2,setActionData2] = useState([])//액션 영화3
    const [ActionData3,setActionData3] = useState([])//액션 영화4
    const [ActionData4,setActionData4] = useState([])//액션 영화5
    const [ActionData5,setActionData5] = useState([])//액션 영화6
    const [AniData,setAniData] = useState([])//애니메이션1
    const [AniData1,setAniData1] = useState([])//애니메이션2
    const [AniData2,setAniData2] = useState([])//애니메이션3
    const [AniData3,setAniData3] = useState([])//애니메이션4
    const [AniData4,setAniData4] = useState([])//애니메이션5
    const [AniData5,setAniData5] = useState([])//애니메이션6

    const [DramaData,setDramaData] = useState([])//드라마
    const [ComedyData,setComedyData] = useState([])//코미디
    const [SFData,setSFData] = useState([])//SF

    // 드라마(시리즈)
    const [PopularDrama,setPopularDrama]=useState([]); // 인기순
    const [KoreaDrama,setKoreaDrama]=useState([]); // 한국 드라마
    const [OverseasDrama,setOverseasDrama]=useState([]); // 해외 드라마
    const [CrimeDrama,setCrimeDrama]=useState([]); // 범죄 드라마
    const [AniDrama,setAniDrama]=useState([]); // 애니메이션
    const [MedicalDrama,setMedicalDrama]=useState([]); // 매디컬 드라마

    
    //에러 메시지
    const [errMsg,setErrMsg] = useState(null)
    //로딩 중 확인
    const [loading,setLoading] = useState(true)
    //데이더 가지고 오는 페치
    
    //인기순 한국 영화
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=1`)
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
    //인기순 한국 영화 sub1
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData5(data.results)
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
            setActionData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub1
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
            setActionData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub2
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
            setActionData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData5(data.results)
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
            setAniData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub1
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
            setAniData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터2222')
            setAniData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData5(data.results)
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
    // -------------------------------------------------------------------------------------------------------------------------------------
    // 인기순 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 한국 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country=KR&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setKoreaDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 해외 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country!=KR&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setOverseasDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 범죄 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=80,18&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setCrimeDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 애니메이션(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setAniDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 매디컬 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_keywords=208788&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setMedicalDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    
    return [PopularData,PopularData1,PopularData2,PopularData3,PopularData4,PopularData5,
            ActionData,ActionData1,ActionData2,ActionData3,ActionData4,ActionData5,
            AniData,AniData1,AniData2,AniData3,AniData4,AniData5,
            DramaData,
            ComedyData,
            SFData,
            PopularDrama,
            KoreaDrama,
            OverseasDrama,
            CrimeDrama,
            AniDrama,
            MedicalDrama
        ];
}