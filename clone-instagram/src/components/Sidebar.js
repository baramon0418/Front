import React from "react"
import './Sidebar.css'
import { Link } from "react-router-dom"
import { GrHomeRounded } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineCompass } from 'react-icons/ai'
import { TbSend } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiPlusSquare } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'


function side() {
    return (
        <div className="side">
            <div className="logo">
            <img id="sidelogo" src={require('../assets/Instagram_logo.png')}/>
            </div>
            <div className="side_list">
                <div className="side_home">
                    <li>
                        <Link to={"/"}>
                            <GrHomeRounded id="home_icon"/>홈
                        </Link>
                    </li>
                </div>
                <div className="side_search">
                    <li>
                        <Link to={"/"}>
                            <FiSearch id="search_icon"/>검색
                        </Link>
                    </li>
                </div>
                <div className="side_look">
                    <li>
                        <Link to={"/"}>
                            <AiOutlineCompass id="look_icon"/>탐색 탭
                        </Link>
                    </li>
                </div>
                <div className="side_message">
                    <li>
                        <Link to={"/"}>
                            <TbSend id="message_icon"/>메시지
                        </Link>
                    </li>
                </div>
                <div className="side_Noti">
                    <li>
                        <Link to={"/"}>
                            <AiOutlineHeart id="Noti_icon"/>알림
                        </Link>
                    </li>
                </div>
                <div className="side_make">
                    <li>
                        <Link to={"/"}>
                            <FiPlusSquare id="make_icon"/>만들기
                        </Link>
                    </li>
                </div>
                <div className="side_more">
                    <li>
                        <Link to={"/"}>
                            <AiOutlineMenu id="more_icon"/>더 보기
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default side;