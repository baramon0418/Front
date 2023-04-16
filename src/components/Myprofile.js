import React from "react";
import './Myprofile.css'

function MyProfile(props) {
  return (
    <div className="my_profile">
      <img className="pro_pic" src={require('../assets/insta.jpg')}/>
      <div className="profile_text">
        <div id="profile_id">{props.id}</div> 
        <div id="profile_name">{props.name}</div>
      </div>
      <div id="blank" />
      <div className="profile_change">
        전환
      </div>
    </div>
  )
}

export default MyProfile