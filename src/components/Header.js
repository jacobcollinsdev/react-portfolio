import React, {useState} from 'react';

const Header = ()=>{
    const [toggle, setToggle] = useState(false);

    function handleChange(event){
        setToggle(!toggle);
    }
    
    toggle ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')

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