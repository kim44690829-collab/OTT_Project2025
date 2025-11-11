

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import '../OTT_Main/Main.css'

export default function Home(){
    return(
        <div className="Home">
            <header>
                <img src="Netflix_Logo_RGB.png" alt="로고"/>
                <Link to='/Login'><button type="button">로그인</button></Link>
            </header>
            <section>
                <div className="sec01">
                    <h1>영화, 시리즈 등을</h1>
                    <h1>무제한으로</h1>
                    <h4>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</h4>
                    <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                    <div className="inputBox">
                        <input type="email" placeholder="이메일 주소" id="email"></input>
                        <button type="submit">시작하기&nbsp; 〉</button>
                    </div>
                </div>
                <div className="sec02">
                    <h2>지금 뜨는 콘텐츠</h2>

                    <h2>가입해야 하는 또 다른 이유</h2>
                    <ul>
                        <li>
                            <h3>TV로 즐기세요</h3>
                            <p>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</p>
                            <i className="fa-solid fa-display"></i>
                        </li>
                        <li>
                            <h3>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요</h3>
                            <p>간편하게 저장하고 빈틈없이 즐겨보세요.</p>
                            <i className="fa-solid fa-arrow-down"></i>
                        </li>
                        <li>
                            <h3>다양한 디바이스로 시청하세요</h3>
                            <p>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.</p>
                            <i className="fa-solid fa-mobile"></i>
                        </li>
                        <li>
                            <h3>어린이 전용 프로필을 만들어 보세요</h3>
                            <p>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</p>
                            <i className="fa-solid fa-user"></i>
                        </li>
                    </ul>
                </div>
                <div className="sec03">
                    <h2>자주 묻는 질문</h2>
                    <ul>
                        <li>
                            <span>넷플릭스에서 어떤 콘텐츠를 사용할 수 있나요?</span>
                            <p>┼</p>
                        </li>
                        <li>
                            <span>넷플릭스스란 무엇인가요?</span>
                            <p>┼</p>
                        </li>
                        <li>
                            <span>넷플릭스요금은 얼마인가요?</span>
                            <p>┼</p>
                        </li>
                        <li>
                            <span>어디에서 시청할 수 있나요?</span>
                            <p>┼</p>
                        </li>
                        <li>
                            <span>멤버십을 해지하려면 어떻게 하나요?</span>
                            <p>┼</p>
                        </li>
                        <li>
                            <span>아이들이 넷플릭스를 봐도 좋을까요?</span>
                            <p>┼</p>
                        </li>
                    </ul>
                    <div className="sec03_start">
                        <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                        <input type="email" placeholder="이메일 주소" id="email"></input>
                        <button type="submit">시작하기&nbsp; 〉</button>
                    </div>
                </div>
            </section>
            <footer>
                <h3>질문이 있으신가요? 문의 전화 : <span>00-308-321-0161 (수신자 부담)</span></h3>
                <ul>
                    <li>자주 묻는 질문</li>
                    <li>고객 센터</li>
                    <li>계정</li>
                    <li>미디어 센터</li>
                    <li>투자 정보(IR)</li>
                    <li>입사 정보</li>
                    <li>넷플릭스 지원 디바이스</li>
                    <li>이용 약관</li>
                    <li>개인정보 처리방침</li>
                    <li>쿠키 설정</li>
                    <li>회사 정보</li>
                    <li>문의하기</li>
                    <li>속도 테스트</li>
                    <li>법적 고지</li>
                    <li>오직 넷플릭스에서</li>
                </ul>
                <p>넷플릭스 대한민국</p>
                <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</p>
                <p>대표: 레지널드 숀 톰프슨</p>
                <p>이메일 주소: korea@netflix.com</p>
                <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
                <p>사업자등록번호: 165-87-00119</p>
                <p>클라우드 호스팅: Amazon Web Services Inc.</p>
                <p>공정거래위원회 웹사이트</p>
                <h4>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</h4>
            </footer>
        </div>
    )
}
