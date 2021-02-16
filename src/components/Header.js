import React from 'react';
import styled from 'styled-components';
import { accentColor } from '../variables';


const HeaderStyle = styled.div`
    margin-left: 500px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    max-width: 90em;
    .description {
        padding: 10px;
        h2 {
            letter-spacing: 3px;
            font-size: 3rem;
            font-weight: 200;
            margin-bottom: 0px;
        }
        h4 {
            display: inline;
            font-weight: 400;
            letter-spacing: 3px;
            color: ${accentColor};
        }
        p {
            margin-top: 40px;
            font-size: 200;
            line-height: 20px;
            letter-spacing: 1px;
            span { font-weight: 800; }
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyle>
            <div className="description">
                <h2>Vinyet Escribano</h2>
                <h4>FRONT-END DEVELOPER</h4>
                <p>· Desarrolladora web <span>front-end</span><br/> · Especializada en <span>marketing</span>, <span>UI</span>, <span>UX</span> y <span>accesibilidad web</span><br/>· Sueño con un <span>Internet descentralizado &#10084;</span></p>
            </div>
        </HeaderStyle>
    )
}

export default Header;