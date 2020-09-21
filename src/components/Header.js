import React, {useState} from 'react';

const Header = ()=>{
    const [darkMode] = useState("");

    function handleChange(){
        console.log('clicked')
    }
    return(
        <header className="nav-container">

                <label className="switch">
                    <input 
                        type="checkbox" 
                        onChange={handleChange}
                    />
                    <span className="slider"></span>
                </label>
                
        </header>
    ) 
}

export default Header