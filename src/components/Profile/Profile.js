import React, {useState} from 'react';
import profileImg from '../../images/profile.jpg'
const Profile = ()=>{

    const [tab, setTab] = useState('About');

    function showTab(e){
        setTab(e.target.id)
        console.log(tab)
    }


    return(
        <div className="profile">   
            <div className="hero-img">
                <img src={profileImg} alt="Jacob standing in the foreground in a mustard jumper, with a city landscape behind him."/>
            </div>
            <div className="tab-nav">
                <button className="tab-link" id="About" onClick={(e)=> showTab(e)}>About</button>
                <button className="tab-link" id="Projects" onClick={(e)=> showTab(e)}>Projects</button>
                <button className="tab-link" id="Blog" onClick={(e)=> showTab(e)}>Blog</button>
                <button className="tab-link" id="Contact" onClick={(e)=> showTab(e)}>Contact</button>
            </div>
        </div>
    )
}

export default Profile