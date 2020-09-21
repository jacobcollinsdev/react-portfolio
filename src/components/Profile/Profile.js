import React from 'react';
import profileImg from '../../images/profile.jpg'
const Profile = ()=>{
    return(
        <div className="profile">   
            <div className="hero-img">
                <img src={profileImg} alt="Jacob standing in the foreground in a mustard jumper, with a city landscape behind him."/>
            </div>
            <div className="tab-nav">
                <button className="tab-link" id="defaultOpen">About</button>
                <button className="tab-link">Projects</button>
                <button className="tab-link">Blog</button>
                <button className="tab-link">Contact</button>
            </div>
        </div>
    )
}

export default Profile