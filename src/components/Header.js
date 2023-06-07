import React from 'react';
import HeaderStyles from '../styles/HeaderStyles';


const Header = () => {
    return (
        <HeaderStyles>
            <div className="description">
                <h2>Vinyet Escribano</h2>
                <h4>FRONT-END WEB DEVELOPER</h4>
                <p>· Desarrolladora web <span>front-end</span><br/> · Especializada en <span>UI</span>, <span>UX</span> y <span>accesibilidad web</span><br/>· Formación en <span>Periodismo</span> y <span>Marketing Digital</span></p>
            </div>
        </HeaderStyles>
    )
}

export default Header;