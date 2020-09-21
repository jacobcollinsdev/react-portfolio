import React from 'react';
import coverImg from '../../../images/learn-chess.jpg';

const LearnChess = ()=>{
    return(
        <div className="project">
            <h3>Learn Chess</h3>
            <div className="project-example__container">
                <a href="https://learnchess.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={coverImg} alt="Learn-Chess"/></a>
                <div className="overlay">
                    <div className="text">
                        <p>
                            A simple single page application built with React. A basic introduction to chess rules and how the pieces move.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnChess