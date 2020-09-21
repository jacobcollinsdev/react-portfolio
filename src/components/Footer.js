import React from 'react';

const Footer = ()=>{
   return(
       <footer>
            <div className="social-nav">
                <a href="https://www.linkedin.com/in/jacobcollinsdev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/jacobcollinsdev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="mailto:jacobcollinsdev@gmail.com"><i className="far fa-envelope"></i></a>
                <a href="https://codepen.io/jacobcollinsdev" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                <a href="https://twitter.com/jacobcollinsdev" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
       </footer>
   ) 
}

export default Footer