import React from 'react';
import Profile from './Profile/Profile';

import About from './Content/About';
import Projects from './Content/Projects';
import Blog from './Content/Blog';
import Contact from './Content/Contact';

const Grid = ()=>{
   return(
       <div className='container'>
           <Profile/>
           <div className='content'>
                <About/>
                <Projects/>
                <Blog/>
                <Contact/>
            </div>
       </div>
   ) 
}

export default Grid