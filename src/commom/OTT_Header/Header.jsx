import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OTTContext } from "../../api/OTT_Context";

import '../OTT_Header/Header.css'

export default function Header(){
    const [inputBox, setInputBox] = useState(false)

    const {user, login} = useContext(OTTContext)

    const navigate = useNavigate()

    // 로그아웃
    const LogoutHandeler = () => {
        LogoutHandeler()
        navigate('/Login')
    }

    // 인풋 온클릭
    // const inputHanderler = () => {
    //     onclick={() => setInputBox(true)}
    //     onMouseLeave={() => setInputBox(false)}
    // }

    return(
        <>
        <header className="Header">
            <div className="HeadLeft">
            <Link to='/Home'><img src="Netflix_Logo_RGB.png" alt="로고" /></Link>
            <ul>
                <Link to='/Home'><li>홈</li></Link>
                <Link to='/Series'><li>시리즈</li></Link>
                <Link to='/Like'><li>내가 찜한 리스트</li></Link>
            </ul>
            </div>
            <div className="HeadRight">
                {inputBox === false ? <i className="fa-solid fa-magnifying-glass iButton" onClick={() => setInputBox(true)}></i> :
                    <div className="input" onClick={() => setInputBox(false)}>
                        <i className="fa-solid fa-magnifying-glass inputButton"></i>
                        <input type="text" placeholder="제목, 사람, 장르"></input>
                    </div>
                }
                <p>{user}님</p>
            </div>
        </header>
        </>
    )
}