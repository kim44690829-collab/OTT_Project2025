import { useState, useEffect } from "react";

export default function useData(){
    const [data, setData] = useState([])
    // const [ottData, setOttData] = useState([])
    const [ottData, setOttData] = useState(1)

    useEffect(() => {
        // for(let i = 1; i < 10; i++){
            fetch(`https://api.themoviedb.org/3/tv/popular?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&page=${ottData}`)
            .then((res) => {
            if(!res.ok){
                throw new Error(`에러 : ${res.status}`)
            }
            return res.json()
            })
            .then((data) => {
                setData(data.results)
                console.log('여기 : ' , data.results)
                // const ottDataCopy = [...ottData]
                // ottDataCopy.push(data.results)
                // setOttData(ottDataCopy)
                // console.log('여기 : ' , ottData)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                console.log('요청 완료')
            })

        // }
        
    },[])
    return data;
}