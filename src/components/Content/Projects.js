import React from 'react';
import LearnChess from './Projects/LearnChess';
import ChessTrainer from './Projects/ChessTrainer';
import GuitarTuner from './Projects/GuitarTuner';
import WeatherApp from './Projects/WeatherApp';

const Projects = ()=>{
    return(
        <div className='tab-content'>
            <h2>Projects</h2>
                <p>Links to some of my projects can be found below. The rest of my projects can be viewed on my <a href="https://github.com/jacobcollinsdev" target="_blank" rel="noopener noreferrer"><span className="highlight">GiHub profile.</span></a></p>
                <div className='project-grid'>
                    <LearnChess/>
                    <ChessTrainer/>
                    <GuitarTuner/>
                    <WeatherApp/>
                </div>

        </div>
    )
}

export default Projects