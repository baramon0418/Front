import React from "react"
import './Profilelist.css'

function ProfileList(props) {
  return (
    <div className="profile_list">
      <div className="profilelist_pic"></div>
      <div className="profilelist_id">
        <div id="profilelist_idrecomm">{props.id}</div>
        <div id="profilelist_subrecomm">{props.sub}</div>
      </div>
      <div className="blank" />
      <div className="profilelist_follow_button">팔로우</div>
    </div>
  )
}

export default ProfileList