import React, {useState} from 'react';

const Header = ()=>{
    const [toggle, setToggle] = useState(false);

    function handleChange(event){
        setToggle(prevToggle => !prevToggle);
        console.log(toggle)
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