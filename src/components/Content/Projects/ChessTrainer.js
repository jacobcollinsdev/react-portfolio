import React from 'react';
import coverImg from '../../../images/chesstrainer.jpg';

const ChessTrainer = ()=>{
    return(
        <div className="project">
            <h3>Chess Speed Trainer</h3>
            <div className="project-example__container">
                <a href="https://learnchess.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={coverImg} alt="Learn-Chess"/></a>
                <div className="overlay">
                    <div className="text">
                        <p>
                            A training tool for chess players to improve their speed and accuracy. Built with Vanilla JavaScript
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChessTrainer