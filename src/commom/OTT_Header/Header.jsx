import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OTTContext } from "../../api/OTT_Context";

import '../OTT_Header/Header.css'

export default function Header({PopularData}){
    // 인풋 박스 on/off
    const [inputBox, setInputBox] = useState(false)
    // 인풋 검색창
    const [inputText, setInputText] = useState('')
    // 로그인 모달
    const [loginBtn, setLoginBtn] = useState(false)
    // 스크롤시 배경색 변경
    const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to bottom, #000, #00000000)')

    const {user, login, logout} = useContext(OTTContext)

    const navigate = useNavigate()

    // 로그아웃
    const LogoutHandeler = () => {
        logout()
        navigate('/Login')
    }

    // 스크롤 위치기준으로 배경색 변경
    useEffect(() => {
        const scrollHandeler = () => {
            if(window.scrollY > 5){
                // 스크롤 하면 어둡게
                setBackgroundColor('#000000')
            }else{
                // 아니면 그라데이션으로
                setBackgroundColor('linear-gradient(to bottom, #000, #00000000)')
            }
        }

        window.addEventListener('scroll', scrollHandeler)

        // 언마운트시 제거
        return() => window.removeEventListener('scroll', scrollHandeler)
    }, [])

    return(
        <>
        <header className="Header" style={{background: backgroundColor}}>
            <div className="HeadLeft">
            <Link to='/Home'><img src="Netflix_Logo_RGB.png" alt="로고" /></Link>
            <ul>
                <Link to='/Home'><li>홈</li></Link>
                <Link to='/Series'><li>시리즈</li></Link>
                <Link to='/Movie'><li>영화</li></Link>
                <Link to='/Like'><li>내가 찜한 리스트</li></Link>
            </ul>
            </div>
            <div className="HeadRight">
                {/* 검색창 */}
                {!inputBox ? <i className="fa-solid fa-magnifying-glass iButton" onClick={() => setInputBox(true)}></i> :
                    (<div className="input">
                        {/* 모달 */}
                        <div className="inputModal">
                            <button type="button">✕</button>
                            <div className="inputBox">
                                <i className="fa-solid fa-magnifying-glass inputButton" onClick={() => setInputBox(false)}></i>
                                <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} placeholder="제목, 사람, 장르"></input>
                                {inputText ? <p>"{inputText}" 검색 결과</p> : (<p>검색 결과가 없습니다.</p>)}
                            </div>
                            {/* Top10 랭킹 */}
                            <div className="Top10">
                                <ul>
                                    {PopularData.slice(0, 10).map((item, index) => (
                                    <li key={index}>
                                        <h2>{index + 1}</h2>
                                        <p>{item.title}</p>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>)}
                    <div className="inputModalBackground"></div>

                {/* 유저정보/로그아웃 */}
                <div className="userBox"
                    onMouseEnter={() => setLoginBtn(true)}
                    onMouseLeave={() => setLoginBtn(false)}>
                    {/* 로그인 후 유저 이름 */}
                    <p className="userName">{user}님</p>
                    {/* 로그아웃 모달 */}
                    {loginBtn && (<Link to='/Login'><p onClick={LogoutHandeler} className="LogoutBtn">로그아웃</p></Link>)}
                </div>
            </div>
        </header>
        </>
    )
}