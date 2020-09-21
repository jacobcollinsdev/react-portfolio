import React from 'react';
import coverImg from '../../../images/tuner.jpg';

const GuitarTuner = ()=>{
    return(
        <div className="project">
            <h3>Guitar Tuner</h3>
            <div className="project-example__container">
                <a href="https://learnchess.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={coverImg} alt="Learn-Chess"/></a>
                <div className="overlay">
                    <div className="text">
                        <p>
                            An app designed for tuning your guitar. Features custom themes. Fretboard made from pure CSS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuitarTuner