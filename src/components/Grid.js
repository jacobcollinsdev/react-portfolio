import React, {useState, Components} from 'react';
// import Profile from './Profile/Profile';
import profileImg from '../images/profile.jpg'
import About from './Content/About';
import Projects from './Content/Projects';
import Blog from './Content/Blog';
import Contact from './Content/Contact';

const Grid = ()=>{

    const [tab, setTab] = useState('About');

    function showTab(e){
        setTab(e.target.id)
    }
    
    // var MyComponent = Components[type];

    return(
        <div className='container'>

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

            <div className='content'>
                <About/>
            </div>
        </div>
   ) 
}

export default Grid