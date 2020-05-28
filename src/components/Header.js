import React from 'react';

const Header = () => {
    return <header>
            <div className="description">
                <h2>Vinyet Escribano</h2>
                <h4>Front-End Developer</h4>
                <p>Desarrolladora web <span>front-end</span> junior. Especializada en <span>SEO</span>, <span>UI</span>, <span>UX</span> y <span>accesibilidad web</span>. Sueño con un <span>Internet descentralizado &#10084;</span></p>
            </div>
            <div className="photo">
                <img src='myAvatar.png' alt='vinyet escribano'></img>
            </div>
        </header>
}

export default Header;