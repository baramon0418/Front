import React from "react";
import './Postcard.css'
import { Link } from "react-router-dom"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { AiOutlineHeart } from 'react-icons/ai'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import { BiBookmark } from 'react-icons/bi'
import { BiHappyHeartEyes } from 'react-icons/bi'


function Postcard(props) {
  return (
    <div className="post_box">
      <div className="post_head">
        <img className="post_img" src={require('../assets/insta.jpg')}/>
        <div id="post_head_info">
          <div id="post_id_location">
          <span className='post_name'>{props.name}</span>
            <div id="post_head_location">{props.location}</div>
          </div>
        </div>
        <div id="blank" />
            <HiOutlineDotsHorizontal id="more_icon" />
        </div>
        <div className="post_body">
            <img className="post_body_photo" src={require('../assets/insta.jpg')}/>
        </div>
        <div className="post_icon">
            <AiOutlineHeart id="heart_button"/>
            <IoChatbubbleOutline id="chat_button"/>
            <FiSend id="send_button"/>
            <div id="blank"/>
            <BiBookmark id="bookmark_button"/>
        </div>
        <div className="post_like">
            <div className="post_like_text">
                <Link to={"/"}>좋아요</Link>
            </div>
        </div>
        <div className="post_text">
            <div id="post_id">{props.id}</div>
        </div>
        <div className="post_comm">
            <div id="post_comm">댓글 {props.count_comm}개 모두 보기</div>
        </div>
        <div className="post_date">
            <div id="post_date">{props.date}일 전</div>
        </div>
        <div className="post_reaction">
            <BiHappyHeartEyes id="reaction" />
            <input type="text" id="reaction_text" placeholder="댓글 달기..." />
            <div id="post_button">게시</div>
        </div>
    </div>
  )
}

export default Postcard