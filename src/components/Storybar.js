import React from 'react';
import './Storybar.css';


function Storybar(props){
    return(
        <div className='story_bar'>
            <img className='story_pic' src={require('../assets/insta.jpg')}></img>
            <div className='story_id'>{props.id}</div>
        </div>
    )
}

export default Storybar;