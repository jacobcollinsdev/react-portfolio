import React, {useState} from 'react';
import profileImg from '../../images/profile.jpg'
const Profile = ()=>{

    const [active, setActive] = useState(false);

    function showTab(e){
        setActive(!active)
    }


    return(
        <div className="profile">   
            <div className="hero-img">
                <img src={profileImg} alt="Jacob standing in the foreground in a mustard jumper, with a city landscape behind him."/>
            </div>
            <div className="tab-nav">
                <button className="tab-link" id="defaultOpen" onClick={showTab}>About</button>
                <button className="tab-link" onClick={showTab}>Projects</button>
                <button className="tab-link" onClick={showTab}>Blog</button>
                <button className="tab-link" onClick={showTab}>Contact</button>
            </div>
        </div>
    )
}

export default Profile