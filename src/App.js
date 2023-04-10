import React, { Component } from 'react';


class App extends Component {
      NewComponent = React.createClass({
        render: function() {
          return (
            <div>
              <div id="header">
                <div id="header_wrap">
                  <div className="header_content1"><img src="images/airbnb-logo.png" alt=""/> airbnb</div>
                  <div className="header_content2">
                    <span className="header_content2_box">
                      어디든지  <span>|</span>  언제든 일주일  <span>|  게스트 추가</span>    <i className="fa-solid fa-magnifying-glass" />
                    </span>
                  </div>
                  <div className="header_content3">
                    당신의 공간을 에어비앤비하세요   <i className="fa-solid fa-globe" />  
                    <span id="user1">
                      <i className="fa-solid fa-bars" />   <i className="fa-solid fa-circle-user" />
                    </span>
                  </div>
                </div>
              </div>
              <div id="modal">
                <div className="modal">회원가입</div>
                <div className="modal">로그인</div><hr />
                <div className="modal">당신의 공간을 에어비앤비하세요</div>
                <div className="modal">체험 호스팅</div>
                <div className="modal">도움말</div>
              </div>
              <hr />
              <div id="menu">
                <div id="menu_wrap">
                  <div className="menu_content"><i className="fa-solid fa-tower-observation" /><br />최고의 전망</div>
                  <div className="menu_content"><i className="fa-solid fa-igloo" /><br />기상천외한 숙소</div>
                  <div className="menu_content"><i className="fa-solid fa-mountain-city" /><br />한옥</div>
                  <div className="menu_content"><i className="fa-solid fa-tree" /><br />한적한 시골</div>
                  <div className="menu_content"><i className="fa-solid fa-person-skiing" /><br />스키</div>
                  <div className="menu_content"><i className="fa-solid fa-bed" /><br />개인실</div>
                  <div className="menu_content"><i className="fa-solid fa-umbrella-beach" /><br />해변 바로 앞</div>
                  <div className="menu_content"><i className="fa-solid fa-fire" /><br />인기 급상승</div>
                  <div className="menu_content"><i className="fa-solid fa-landmark" /><br />료칸</div>
                  <div className="menu_content"><i className="fa-solid fa-mountain-sun" /><br />국립공원</div>
                  <div className="menu_content"><i className="fa-solid fa-water-ladder" /><br />멋진 수영장</div>
                  <div className="menu_content"><i className="fa-solid fa-hotel" /><br />저택</div>
                </div>
              </div>
              <div id="main">
                <div id="main_wrap1">
                  <div className="main_content1">
                    <img src="images/1.png" data-src="images/1.png" className="pic" alt="" /><br />
                    <span>
                      Ganggu-myeon, Yeongdeok-gun, 한국<br />
                      바다 전망<br />
                      4월 1일~6일<br />
                      <b>\286,200/박</b>
                    </span>
                  </div>
                  <div className="main_content1">
                    <img src="images/2.png" data-src="images/2.png" className="pic" alt="" /><br />
                    <span>
                      Geoje-myeon, Geoje-si, 한국<br />
                      바다 전망<br />
                      4월 16일~21일<br />
                      <b>\467,460/박</b>
                    </span>
                  </div>
                  <div className="main_content1">
                    <img src="images/3.png" data-src="images/3.png" className="pic" alt="" /><br />
                    <span>
                      南伊豆町, 静岡県, 일본<br />
                      산 및 바다 전망<br />
                      6월 14일~19일<br />
                      <b>\675,706/박</b>
                    </span>
                  </div>
                  <div className="main_content1">
                    <img src="images/4.png" data-src="images/4.png" className="pic" alt="" /><br />
                    <span>
                      Niseko, Abuta District, 일본<br />
                      산 전망<br />
                      4월 1일~6일<br />
                      <b>\339,394/박</b>
                    </span>
                  </div>
                </div>
                <div id="main_wrap2">
                  <div className="main_content2">
                    <img src="images/5.png" data-src="images/5.png" className="pic" alt="" /><br />
                    <span>
                      Abiansemal, 인도네시아<br />
                      5,275km 거리<br />
                      12월 14일~19일<br />
                      <b>\518,356/박</b>
                    </span>
                  </div>
                  <div className="main_content2">
                    <img src="images/6.png" data-src="images/6.png" className="pic" alt="" /><br />
                    <span>
                      Sindun-myeon, Icheon-si, 한국<br />
                      46km 거리<br />
                      4월 2일~7일<br />
                      <b>\106,129/박</b>
                    </span>
                  </div>
                  <div className="main_content2">
                    <img src="images/7.png" data-src="images/7.png" className="pic" alt="" /><br />
                    <span>
                      Hua Hin District, 태국<br />
                      3,872km 거리<br />
                      4월 15일~20일<br />
                      <b>\168,629/박</b>
                    </span>
                  </div>
                  <div className="main_content2">
                    <img src="images/8.png" data-src="images/8.png" className="pic" alt="" /><br />
                    <span>
                      Selat, 인도네시아<br />
                      5,256km 거리<br />
                      11월 8일~13일<br />
                      <b>\378,449/박</b>
                    </span>
                  </div>
                </div>
                <div id="lightbox">
                  <img src="images/1.png" alt="" id="lightboxImage" />
                </div>
              </div>
              <hr />
              <div id="footer">
                <div id="footer_wrap">
                  <div className="footer_content1">
                    <span className="left">
                      © 2023 Airbnb, Inc. · 개인정보 처리방침 · 이용약관 · 사이트맵 · 한국의 변경된 환불 정책 · 회사 세부정보
                    </span>
                    <span className="right">
                      <i className="fa-solid fa-globe" /> 한국어 (KR) ₩ KRW 지원 및 참고 자료
                    </span>
                  </div>
                  <div className="footer_content2">
                    <span>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스
                      <br />제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })
}

export default App;
