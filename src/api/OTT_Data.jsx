import { useState,useEffect } from "react";

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
}