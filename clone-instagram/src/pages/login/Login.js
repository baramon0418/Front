import React from "react";
import '../login/Login.css'
import { Link } from "react-router-dom";
import Loginform from "../../components/Loginform";

function LoginPage() {
  return(
    <div className="login_page">
      <div className="login_form">
        <Loginform />
      </div>
      <div className="sign_up">
        <div id="no_account">
          계정이 없으신가요?
        </div>
        <div id="sign_up_link">
          <Link to={"/"}>
            가입하기
          </Link>
        </div>
      </div>
      <div className="download_guide">
        앱을 다운로드하세요.
      </div>
      <div className="download_img">
      <img
        src={require('../../assets/AppStore.png')}
        alt="appstore"
        className="AppStore"/>
      
      <img
        src={require('../../assets/GooglePlay.png')}
        alt="googleplay"
        className="GooglePlay"/>
        </div>

      <div className="link_meta">
        <div id="link_meta_style">
          <Link to={"/"}>
            Meta
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            소개
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            블로그
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            채용 정보
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            도움말
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            API
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            개인정보처리방침
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            약관
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            인기 계정
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            Instagram Lite
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            연락처 업로드 & 비사용자
          </Link>
        </div>
        <div id="link_meta_style">
          <Link to={"/"}>
            한국어
          </Link>
        </div>
        <div className="copyright">
            &#169; 2023 INSTAGRAM FROM META
        </div>
      </div>
    </div>
  )
}

export default LoginPage;