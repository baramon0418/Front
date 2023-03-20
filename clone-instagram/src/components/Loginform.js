import React from "react";
import './Loginform.css'
import { Link } from "react-router-dom";


function Loginform() {
  return (
    <div className="box">
      <div className="login_logo">
        <Link to={"/"}>
          <img id="login_logoimg" alt="instagram_logo" src={require('../assets/Instagram_logo.png')} />
        </Link>
      </div>
      <div className="input_box">
        <input id="id_input_box" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input id="pw_input_box" placeholder="비밀번호"/>
      </div>
      <div className="check_login">
        로그인 정보 저장하기
      </div>
      
      <div className="button_area">
        <Link to="mainpage">
          <div className="login_button">
            로그인
          </div>
        </Link>
      </div>
      <div className="or">
        <div id="hr_tag" ></div>
        <div id="or_text">또는</div>
        <div id="hr_tag"></div>
      </div>
      <div className="facebook_link">
        Facebook으로 로그인
      </div>
      <div className="find_pw_link">
        비밀번호를 잊으셨나요?
      </div>
    </div>
  )
}

export default Loginform;