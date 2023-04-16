import React from 'react';
import { Link } from "react-router-dom"
import Sidebar from "../../components/Sidebar";
import Storybar from "../../components/Storybar";
import Postcard from "../../components/Postcard";
import MyProfile from '../../components/Myprofile';
import Profilelist from '../../components/Profilelist';
import './Main.css';

function mainPage() {
  return (
    <div className="main-page">
      <div className='main_sidebar'>
          <Sidebar/>
      </div>
      <div className="content-area">
        <div className="main-contents">
          <div className="story-card">
            <div className="story-box">
              <div id="left-margin" />
              <Storybar id="dkssud"/>
              <Storybar id="22_22_@2"/>
              <div id="right-margin" />
            </div>
          </div>
          <div className='main_post'>
            <Postcard name="dkssud" location="Korea"/>
            <Postcard name="22_22_@2" location="Korea"/>
          </div>
        </div>
        <div className="profile-area">
          <MyProfile id="hihello" name="김안녕"/>
          <div className="pro_recomm">
            <div id="recomm">회원님을 위한 추천</div>
            <div id="blank" />
            <div id="see">모두 보기</div>
          </div>
          <Profilelist id="iwanttogohome" sub="회원님을 위한 추천"/>
          <Profilelist id="hero-hero" sub="회원님을 위한 추천"/>
          <Profilelist id="mechel" sub="회원님을 위한 추천"/>
          <Profilelist id="youngjin" sub="회원님을 위한 추천"/>
          <Profilelist id="lool" sub="회원님을 위한 추천"/>
          <div className="bottom-link1">
            <div id="bottom-link-style">
              <Link to={"/"}>
                소개
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                도움말
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                홍보 센터
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                API
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                채용 정보
              </Link>
            </div>
            &#183;
            
          </div>
          <div className="bottom-link2">
          <div id="bottom-link-style">
              <Link to={"/"}>
                개인정보처리방침
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                약관
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                위치
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                언어
              </Link>
            </div>
          </div>
          <div className="copyright">
            &#169; 2023 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  )
}

export default mainPage