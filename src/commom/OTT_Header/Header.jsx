import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OTTContext } from "../../api/OTT_Context";

import '../OTT_Header/Header.css'

export default function Header(){
    const {user, login} = useContext(OTTContext)
    const navigate = useNavigate()

    const LogoutHandeler = () => {
        LogoutHandeler()
        navigate('/Login')
    }

    return(
        <>
        <header className="Header">
            <div className="HeadLeft">
            <img src="Netflix_Logo_RGB.png" alt="로고" />
            <ul>
                <Link to='/Home'><li>홈</li></Link>
                <Link to='/Series'><li>시리즈</li></Link>
                <Link to='/Like'><li>내가 찜한 리스트</li></Link>
            </ul>
            </div>
            <div className="HeadRight">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="제목, 사람, 장르"></input>
                <p>{user}님</p>
            </div>
        </header>
        </>
    )
}