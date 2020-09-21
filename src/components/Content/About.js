import React from 'react';

const About = ()=>{
    return(
        <div className="tab-content">
            <h2>About</h2>
            <p>Hi, I'm Jacob.
                I'm a front end web developer based in London, UK. <br/><br/>
                
                I love designing websites and making them look good. If I'm not building something for a client, I'm coding for fun and learning new technologies.
            </p>
            <p>
                I know <span className="highlight">HTML</span>, <span className="highlight">CSS</span> and <span className="highlight">JavaScript</span> (ES6). I have a basic knowledge of <span className="highlight">React</span>, and have built a few simple projects with this framework. Other technologies I've used include <span className="highlight">jQuery</span>, <span className="highlight">SCSS</span>, <span className="highlight">GSAP</span>, and <span className="highlight">Bootstrap</span>. 
                
                I'm always excited about learning new languages; I'm currently learning <span className="highlight">PHP</span> and <span className="highlight">MySQL</span>.
            </p>
            <p>
                My interests are multi-faceted; <span className="highlight">graphic design</span>, <span className="highlight">web design</span>, and <span className="highlight">animation</span> occupy most of my spare time. When I'm away from the desktop you'll most likely find me playing chess, tennis, cycling in the great outdoors, or reading sci-fi novels.
            </p>
        </div>
    )
}

export default About